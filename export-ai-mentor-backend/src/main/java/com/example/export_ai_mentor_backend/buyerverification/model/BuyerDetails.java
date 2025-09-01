package com.example.export_ai_mentor_backend.buyerverification.model;

import lombok.Data;

@Data
public class BuyerDetails {

    private String companyNameFound;
    private Integer companyAgeYears;

    private String domainCreationDate;
    private Integer domainAgeYears;

    private boolean linkedinFound;
    private Integer linkedinEmployees;

    private boolean emailValid;
    private boolean emailDomainMatchesCompany;

    private boolean importHistoryFound;
    private String importSummary;
}
