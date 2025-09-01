package com.example.export_ai_mentor_backend.buyerverification.model;

import lombok.Data;

@Data
public class BuyerRequest {
    private String companyName;

    private String websiteUrl;

    private String email;

    private String country;
}
