package com.example.export_ai_mentor_backend.service;

import com.example.export_ai_mentor_backend.dto.LoginDTO;
import com.example.export_ai_mentor_backend.dto.UserDTO;
import com.example.export_ai_mentor_backend.exportAiMentorException.ExportAiMentorException;
import jakarta.validation.Valid;

public interface UserService {

    public UserDTO registerUser(UserDTO userDTO) throws ExportAiMentorException;

    public UserDTO loginUser(LoginDTO loginDTO) throws ExportAiMentorException;
}
