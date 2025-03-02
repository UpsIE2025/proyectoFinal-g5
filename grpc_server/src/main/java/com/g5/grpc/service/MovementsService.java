package com.g5.grpc.service;

import com.g5.grpc.model.AppMovements;
import com.g5.grpc.repository.MovementsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovementsService {

    @Autowired
    private MovementsRepository movementsRepository;

    public AppMovements createMovements(String accountId, Double amount, String type,
                              String description) {
        AppMovements user = new AppMovements();
        user.setAccountNum(accountId);
        user.setAmount(amount);
        user.setType(type);
        user.setDescription(description);
        return movementsRepository.save(user);
    }

    public List<AppMovements> findMovementsByAccountNum(String accountNum){
        return movementsRepository.findByAccountNum(accountNum);
    }
}