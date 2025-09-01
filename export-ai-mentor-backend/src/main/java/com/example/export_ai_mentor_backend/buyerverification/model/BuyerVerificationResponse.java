package com.example.export_ai_mentor_backend.buyerverification.model;

import lombok.Data;

import java.util.List;

@Data
public class BuyerVerificationResponse {

    private int riskPercent;
    private String verdictLabel;
    private List<String> redFlags;
    private BuyerDetails details;
}
