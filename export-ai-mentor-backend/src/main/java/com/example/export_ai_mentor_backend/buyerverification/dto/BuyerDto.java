package com.example.export_ai_mentor_backend.buyerverification.dto;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BuyerDto {
    private Long id;
    private String companyName;
    private String websiteUrl;
    private String email;
    private String country;

    private Integer riskPercent;
    private String verdictLabel;
    private List<String> redFlags;

    public BuyerDto(Long id,String companyName, String websiteUrl, String email, String country, String verdictLabel, Integer riskPercent, String redFlags) {
        this.id = id;
        this.companyName = companyName;
        this.websiteUrl = websiteUrl;
        this.email = email;
        this.country = country;
        this.verdictLabel = verdictLabel;
        this.riskPercent = riskPercent;

        // Split comma-separated redFlags into List<String>
        if (redFlags != null && !redFlags.isBlank()) {
            this.redFlags = List.of(redFlags.split(",\\s*"));
        }
    }
}
