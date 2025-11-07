package com.example.export_ai_mentor_backend.service;

import com.example.export_ai_mentor_backend.dto.BuyerDto;


public interface BuyerService {

    BuyerDto getBuyerByInputFields(String companyName, String websiteUrl, String email, String country);
}
