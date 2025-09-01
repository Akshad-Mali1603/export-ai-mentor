package com.example.export_ai_mentor_backend.buyerverification.service;

import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class ExternalApiService {

    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${whois.api.url}")
    private String whoisApiUrl;

    @Value("${whois.api.key}")
    private String whoisApiKey;

    // --- API Methods ---

    // Check if domain WHOIS record exists (basic "company exists" check)
    public boolean checkCompanyExists(String domain) {
        String url = whoisApiUrl + "?apiKey=" + whoisApiKey + "&domainName=" + domain + "&outputFormat=JSON";
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        JSONObject json = new JSONObject(response.getBody());

        return json.has("WhoisRecord") && json.getJSONObject("WhoisRecord").has("registryData");
    }
    public boolean verifyEmail(String email) {
        // Very basic validation, replace with real email validation API (e.g. Hunter.io, ZeroBounce)
        return email != null && email.contains("@") && email.contains(".");
    }


    // Get domain age in years
    public int getDomainAgeYears(String domain) {
        String url = whoisApiUrl + "?apiKey=" + whoisApiKey + "&domainName=" + domain + "&outputFormat=JSON";
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        JSONObject json = new JSONObject(response.getBody());

        if (!json.has("WhoisRecord") || !json.getJSONObject("WhoisRecord").has("registryData")) {
            return 0;
        }

        String createdDate = json.getJSONObject("WhoisRecord")
                .getJSONObject("registryData")
                .optString("createdDate", null);

        if (createdDate == null || createdDate.length() < 4) {
            return 0;
        }

        int createdYear = Integer.parseInt(createdDate.substring(0, 4));
        int currentYear = java.time.Year.now().getValue();
        return currentYear - createdYear;
    }
}
