package com.example.export_ai_mentor_backend.service;

import com.example.export_ai_mentor_backend.dto.BuyerDto;
import com.example.export_ai_mentor_backend.mapper.BuyerMapper;
import com.example.export_ai_mentor_backend.model.BuyerEntity;
import com.example.export_ai_mentor_backend.repository.BuyerRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class BuyerServiceImpl implements BuyerService{


    private final BuyerRepository buyerRepository;

    @Override
    public BuyerDto getBuyerByInputFields(String companyName, String websiteUrl, String email, String country) {
        Optional<BuyerEntity> buyerOpt =
                buyerRepository.findByCompanyNameAndWebsiteUrlAndEmailAndCountry(companyName, websiteUrl, email, country);

        return buyerOpt.map(BuyerMapper::toBuyerDto)
                .orElse(null);
    }
}
