package com.example.export_ai_mentor_backend.buyerverification.mapper;

import com.example.export_ai_mentor_backend.buyerverification.dto.BuyerDto;
import com.example.export_ai_mentor_backend.buyerverification.model.BuyerEntity;


public class BuyerMapper {

    public static BuyerDto toBuyerDto(BuyerEntity buyerEntity) {
            return new BuyerDto(
                    buyerEntity.getId(),
                    buyerEntity.getCompanyName(),
                    buyerEntity.getWebsiteUrl(),
                    buyerEntity.getEmail(),
                    buyerEntity.getCountry(),
                    buyerEntity.getVerdictLabel(),
                    buyerEntity.getRiskPercent(),
                    buyerEntity.getRedFlags()
            );
    }

    public static BuyerEntity toBuyerEntity(BuyerDto buyerDto){
            return new BuyerEntity(
                  buyerDto.getId(),
                  buyerDto.getCompanyName(),
                  buyerDto.getWebsiteUrl(),
                  buyerDto.getEmail(),
                  buyerDto.getCountry()
            );
    }
}
