package com.example.export_ai_mentor_backend.buyerverification.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "buyers")
@Data
public class BuyerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String companyName;
    private String websiteUrl;
    private String email;
    private String country;

    private int riskPercent;
    private String verdictLabel;
}
