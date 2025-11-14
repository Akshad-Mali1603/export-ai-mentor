package com.example.export_ai_mentor_backend.repository;

import com.example.export_ai_mentor_backend.model.OTP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface OTPRepository extends JpaRepository<OTP, String> {
    List<OTP> findByCreationTimeBefore(LocalDateTime expiry);
}
