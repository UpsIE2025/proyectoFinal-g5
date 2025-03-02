package com.g5.grpc.repository;

import com.g5.grpc.model.AppMovements;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovementsRepository extends JpaRepository<AppMovements, Long> {
    List<AppMovements> findByAccountNum(String accountNum);
}
