package com.example.export_ai_mentor_backend.buyerverification.service;

import com.example.export_ai_mentor_backend.buyerverification.dto.BuyerDto;


public interface BuyerService {

    BuyerDto getBuyerByInputFields(String companyName, String websiteUrl, String email, String country);
}
