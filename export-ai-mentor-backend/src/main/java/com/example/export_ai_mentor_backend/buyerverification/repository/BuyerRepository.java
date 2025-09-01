package com.example.export_ai_mentor_backend.buyerverification.repository;

import com.example.export_ai_mentor_backend.buyerverification.entity.BuyerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BuyerRepository extends JpaRepository<BuyerEntity, Long> {

}
