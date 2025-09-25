package com.example.export_ai_mentor_backend.buyerverification.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Buyers")
public class BuyerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "company_name")
    private String companyName;

    @Column(name = "website_url")
    private String websiteUrl;

    @Column(name = "email_id", nullable = false, unique = true)
    private String email;

    @Column(name = "country_of_origin")
    private String country;


    @Column(name = "risk_percent")
    private Integer riskPercent;

    @Column(name = "verdict_label")
    private String verdictLabel;

    @Column(name = "red_flags")
    private String redFlags;

    public BuyerEntity(Long id, String companyName, String websiteUrl, String email, String country) {
        this.id = id;
        this.companyName = companyName;
        this.websiteUrl = websiteUrl;
        this.email = email;
        this.country = country;
    }
}
