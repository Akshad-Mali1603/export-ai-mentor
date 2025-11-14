package com.example.export_ai_mentor_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Entity
@Table(name = "otp")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OTP {
    @Id
    private String email;
    private String otpCode;
    private LocalDateTime creationTime;

}
