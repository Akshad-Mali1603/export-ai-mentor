package com.example.export_ai_mentor_backend.service;

import com.example.export_ai_mentor_backend.dto.LoginDTO;
import com.example.export_ai_mentor_backend.dto.UserDTO;
import com.example.export_ai_mentor_backend.exportAiMentorException.ExportAiMentorException;
import com.example.export_ai_mentor_backend.model.User;
import com.example.export_ai_mentor_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service(value = "userService")
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

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
}
