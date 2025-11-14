package com.example.export_ai_mentor_backend.controller;

import com.example.export_ai_mentor_backend.dto.LoginDTO;
import com.example.export_ai_mentor_backend.dto.ResponseDTO;
import com.example.export_ai_mentor_backend.dto.UserDTO;
import com.example.export_ai_mentor_backend.exportAiMentorException.ExportAiMentorException;
import com.example.export_ai_mentor_backend.service.UserService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@Validated
@EnableScheduling
@RequestMapping("/users")
public class UserApi {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDTO>registerUser(@RequestBody @Valid UserDTO userDTO) throws ExportAiMentorException {
        userDTO = userService.registerUser(userDTO);
        return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
    }


    @PostMapping("/login")
    public ResponseEntity<UserDTO>loginUser(@RequestBody @Valid LoginDTO loginDTO) throws ExportAiMentorException {

        return new ResponseEntity<>(userService.loginUser(loginDTO), HttpStatus.OK);
    }

    @PostMapping("/changePass")
    public  ResponseEntity<ResponseDTO> changePassword(@RequestBody @Valid LoginDTO loginDTO) throws ExportAiMentorException{
        return new ResponseEntity<>(userService.changePassword(loginDTO),HttpStatus.OK);
    }


    @PostMapping("/otp/{email}")
    public ResponseEntity<ResponseDTO>sendOtp(@PathVariable @Email(message = "{user.email.invalid}") String email) throws Exception{
        try {
            userService.sendOtp(email);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>(new ResponseDTO("OTP sent successfully."), HttpStatus.OK);
    }

    @GetMapping("/verifyOtp/{email}/{otp}")
    public ResponseEntity<ResponseDTO>verifyOtp(@PathVariable @Email(message = "{user.email.invalid}") String email, @PathVariable @Pattern(regexp="^[0-9]{6}$",message="{otp.invalid}") String otp) throws ExportAiMentorException{
        try {
            userService.verifyOtp(email,otp);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>(new ResponseDTO("OTP has been verified."), HttpStatus.OK);
    }


}
