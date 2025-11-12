package com.example.export_ai_mentor_backend.repository;

import com.example.export_ai_mentor_backend.model.BuyerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BuyerRepository extends JpaRepository <BuyerEntity, Long > {

    Optional<BuyerEntity> findByCompanyNameAndWebsiteUrlAndEmailAndCountry(String companyName, String websiteUrl, String email, String country);
}
