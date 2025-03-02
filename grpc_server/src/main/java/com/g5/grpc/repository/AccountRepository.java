package com.g5.grpc.repository;

import com.g5.grpc.model.AppAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<AppAccount, Long> {
    Optional<AppAccount> findByAccount(String accountNum);
}
