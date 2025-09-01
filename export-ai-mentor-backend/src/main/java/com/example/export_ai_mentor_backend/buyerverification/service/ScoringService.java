package com.example.export_ai_mentor_backend.buyerverification.service;

import com.example.export_ai_mentor_backend.buyerverification.model.BuyerDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ScoringService {

    public int computeRisk(BuyerDetails details) {
        int risk = 0;

        // Company age scoring
        if (details.getCompanyAgeYears() == null) {
            risk += 20;
        } else if (details.getCompanyAgeYears() < 2) {
            risk += 30;
        } else if (details.getCompanyAgeYears() < 5) {
            risk += 15;
        }

        // LinkedIn presence
        if (!details.isLinkedinFound()) {
            risk += 25;
        }

        // Email validity
        if (!details.isEmailValid()) {
            risk += 25;
        } else if (!details.isEmailDomainMatchesCompany()) {
            risk += 15;
        }

        // Import history
        if (!details.isImportHistoryFound()) {
            risk += 10;
        }

        return Math.min(100, risk);
    }

    public String labelForRisk(int risk) {
        if (risk <= 25) return "Buyer is much better";
        if (risk <= 50) return "Buyer is good for trade";
        if (risk <= 75) return "Buyer may be risky";
        return "Buyer is Risky (avoid trade)";
    }

    public List<String> buildRedFlags(BuyerDetails details) {
        List<String> flags = new ArrayList<>();
        if (details.getCompanyAgeYears() != null && details.getCompanyAgeYears() < 2)
            flags.add("Company age < 2 years");
        if (!details.isLinkedinFound())
            flags.add("No LinkedIn/company presence found");
        if (!details.isEmailValid())
            flags.add("Invalid email");
        if (!details.isEmailDomainMatchesCompany())
            flags.add("Email domain mismatch");
        if (!details.isImportHistoryFound())
            flags.add("No import history found");
        return flags;
    }
}
