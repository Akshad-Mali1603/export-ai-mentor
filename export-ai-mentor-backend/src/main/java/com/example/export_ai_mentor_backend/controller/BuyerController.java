package com.example.export_ai_mentor_backend.controller;

import com.example.export_ai_mentor_backend.dto.BuyerDto;
import com.example.export_ai_mentor_backend.service.BuyerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/")
@RequiredArgsConstructor
@CrossOrigin
public class BuyerController {

    final private BuyerService buyerService;

    @PostMapping("/verify-buyer")
    public ResponseEntity<BuyerDto> verifyBuyer(@RequestBody BuyerDto request) {
        BuyerDto dto = buyerService.getBuyerByInputFields(
                request.getCompanyName(),
                request.getWebsiteUrl(),
                request.getEmail(),
                request.getCountry()
        );

        if (dto == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(dto);
    }

//    @GetMapping("/verify-buyer")
//    public ResponseEntity<BuyerDto> verifyBuyerGet(
//            @RequestParam(required = false) String companyName,
//            @RequestParam(required = false) String websiteUrl,
//            @RequestParam(required = false) String email,
//            @RequestParam(required = false) String country
//    ) {
//        BuyerDto dto = buyerService.getBuyerByInputFields(companyName, websiteUrl, email, country);
//
//        if (dto == null) {
//            return ResponseEntity.notFound().build();
//        }
//        return ResponseEntity.ok(dto);
//    }


}

