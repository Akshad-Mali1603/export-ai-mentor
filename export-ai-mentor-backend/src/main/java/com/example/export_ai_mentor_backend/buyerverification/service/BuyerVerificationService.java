package com.example.export_ai_mentor_backend.buyerverification.service;

import com.example.export_ai_mentor_backend.buyerverification.entity.BuyerEntity;
import com.example.export_ai_mentor_backend.buyerverification.model.BuyerDetails;
import com.example.export_ai_mentor_backend.buyerverification.model.BuyerRequest;
import com.example.export_ai_mentor_backend.buyerverification.model.BuyerVerificationResponse;
import com.example.export_ai_mentor_backend.buyerverification.repository.BuyerRepository;
import com.example.export_ai_mentor_backend.buyerverification.service.ExternalApiService;
import com.example.export_ai_mentor_backend.buyerverification.service.ScoringService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
@Service
@RequiredArgsConstructor
public class BuyerVerificationService {

    private final BuyerRepository buyerRepository;
    private final ScoringService scoringService;
    private final ExternalApiService externalApiService;

    public BuyerVerificationResponse verifyBuyer(BuyerRequest req) {
        BuyerDetails details = new BuyerDetails();

        // ✅ External API checks
        boolean companyExists = externalApiService.checkCompanyExists(req.getCompanyName());
        boolean emailValid = req.getEmail() != null && externalApiService.verifyEmail(req.getEmail());
        int domainAge = (req.getWebsiteUrl() != null)
                ? externalApiService.getDomainAgeYears(req.getWebsiteUrl().replace("https://", "").replace("www.", ""))
                : 0;

        details.setCompanyNameFound(req.getCompanyName());
        details.setCompanyAgeYears(domainAge);
        details.setLinkedinFound(companyExists); // dummy check
        details.setEmailValid(emailValid);
//        details.setEmailDomainMatchesCompany(true);
        details.setImportHistoryFound(false); // later can connect to Trade APIs

        // ✅ Risk score
        int risk = scoringService.computeRisk(details);
        String label = scoringService.labelForRisk(risk);

        BuyerVerificationResponse response = new BuyerVerificationResponse();
        response.setRiskPercent(risk);
        response.setVerdictLabel(label);
        response.setDetails(details);
        response.setRedFlags(scoringService.buildRedFlags(details));

        // ✅ Save in DB
        BuyerEntity entity = new BuyerEntity();
        entity.setCompanyName(req.getCompanyName());
        entity.setWebsiteUrl(req.getWebsiteUrl());
        entity.setEmail(req.getEmail());
        entity.setCountry(req.getCountry());
        entity.setRiskPercent(risk);
        entity.setVerdictLabel(label);
        buyerRepository.save(entity);

        return response;
    }
}
