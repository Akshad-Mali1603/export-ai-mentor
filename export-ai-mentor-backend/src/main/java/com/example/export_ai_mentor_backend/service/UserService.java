package com.example.export_ai_mentor_backend.service;

import com.example.export_ai_mentor_backend.dto.UserDTO;
import com.example.export_ai_mentor_backend.exportAiMentorException.ExportAiMentorException;

public interface UserService {

    public UserDTO registerUser(UserDTO userDTO) throws ExportAiMentorException;
}
