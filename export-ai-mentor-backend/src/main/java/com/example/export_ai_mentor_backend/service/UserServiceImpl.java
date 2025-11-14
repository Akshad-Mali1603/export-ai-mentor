package com.example.export_ai_mentor_backend.service;

import com.example.export_ai_mentor_backend.dto.LoginDTO;
import com.example.export_ai_mentor_backend.dto.ResponseDTO;
import com.example.export_ai_mentor_backend.dto.UserDTO;
import com.example.export_ai_mentor_backend.exportAiMentorException.ExportAiMentorException;
import com.example.export_ai_mentor_backend.model.OTP;
import com.example.export_ai_mentor_backend.model.User;
import com.example.export_ai_mentor_backend.repository.OTPRepository;
import com.example.export_ai_mentor_backend.repository.UserRepository;
import com.example.export_ai_mentor_backend.utility.Data;
import com.example.export_ai_mentor_backend.utility.Utilities;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service(value = "userService")
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private OTPRepository otpRepository;

    @Override
    public UserDTO registerUser(UserDTO userDTO) throws ExportAiMentorException {
        Optional<User> optional = userRepository.findByEmail(userDTO.getEmail());
        if (optional.isPresent())throw new ExportAiMentorException("USER_FOUND");
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        User user = userDTO.toEntity();
        user=userRepository.save(user);
        return user.toDTO();

    }

    @Override
    public UserDTO loginUser(LoginDTO loginDTO) throws ExportAiMentorException {
        User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(()->new ExportAiMentorException("USER_NOT_FOUND"));
        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword()))throw new ExportAiMentorException("INVALID_CREDENTIALS");
        return user.toDTO();
    }

    @Override
    public boolean sendOtp(String email) throws Exception {
        User user = userRepository.findByEmail(email).orElseThrow(()->new ExportAiMentorException("USER_NOT_FOUND"));
        MimeMessage mm = mailSender.createMimeMessage();
        MimeMessageHelper message = new MimeMessageHelper(mm, true);
        message.setTo(email);
        message.setSubject("Your OTP Code");
        String genOtp = Utilities.generateOtp();
        OTP otp = new OTP(email, genOtp, LocalDateTime.now());
        otpRepository.save(otp);
        message.setText(Data.getMessageBody(genOtp, user.getName()), true);
        mailSender.send(mm);

        return true;
    }

    @Override
    public boolean verifyOtp(String email, String otp) throws ExportAiMentorException {
        OTP otpEntity = otpRepository.findById(email).orElseThrow(()->new ExportAiMentorException("OTP_NOT_FOUND"));
        if (!otpEntity.getOtpCode().equals(otp)) throw new ExportAiMentorException("OTP_INCORRECT");
        return true;
    }

    @Override
    public ResponseDTO changePassword(LoginDTO loginDTO) throws ExportAiMentorException {
        User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(()->new ExportAiMentorException("USER_NOT_FOUND"));
        user.setPassword(passwordEncoder.encode(loginDTO.getPassword()));
        userRepository.save(user);
        return new ResponseDTO("Password Changed Successfully !!");
    }

    @Scheduled(fixedRate = 60000)
    public void removeExpiredOTP(){
      LocalDateTime expiry = LocalDateTime.now().minusMinutes(5);
        List<OTP>expiredOtps = otpRepository.findByCreationTimeBefore(expiry);
        if (!expiredOtps.isEmpty()){
            otpRepository.deleteAll(expiredOtps);
            System.out.println("Removed "+expiredOtps.size()+" expired OTPs.");
        }
    }
}
