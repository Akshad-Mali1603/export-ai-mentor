package com.example.export_ai_mentor_backend.service;

import com.example.export_ai_mentor_backend.dto.LoginDTO;
import com.example.export_ai_mentor_backend.dto.ResponseDTO;
import com.example.export_ai_mentor_backend.dto.UserDTO;
import com.example.export_ai_mentor_backend.exportAiMentorException.ExportAiMentorException;


public interface UserService {

    public UserDTO registerUser(UserDTO userDTO) throws ExportAiMentorException;

    public UserDTO loginUser(LoginDTO loginDTO) throws ExportAiMentorException;

    public boolean sendOtp(String email) throws  Exception;

    public boolean verifyOtp(String email, String otp) throws ExportAiMentorException;

    public ResponseDTO changePassword(LoginDTO loginDTO) throws ExportAiMentorException;
}
