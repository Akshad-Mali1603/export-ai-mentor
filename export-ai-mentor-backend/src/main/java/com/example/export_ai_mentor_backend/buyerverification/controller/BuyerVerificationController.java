package com.example.export_ai_mentor_backend.buyerverification.controller;

import com.example.export_ai_mentor_backend.buyerverification.model.BuyerRequest;
import com.example.export_ai_mentor_backend.buyerverification.model.BuyerVerificationResponse;
import com.example.export_ai_mentor_backend.buyerverification.service.BuyerVerificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class BuyerVerificationController {
    private final BuyerVerificationService buyerVerificationService;

    @PostMapping("/buyer-verification")
    public ResponseEntity<BuyerVerificationResponse> verify(@RequestBody BuyerRequest req) {
        return ResponseEntity.ok(buyerVerificationService.verifyBuyer(req));
    }
}
