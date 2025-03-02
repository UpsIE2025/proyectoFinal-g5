package com.g5.grpc.service;


import com.g5.grpc.model.AppAccount;
import com.g5.grpc.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public AppAccount createAccount(String accountNum, int userId, Double amount) {
        AppAccount account = new AppAccount();
        account.setAccount(accountNum);
        account.setUserId(userId);
        account.setAmount(amount + 1000);
        return accountRepository.save(account);
    }

    public Optional<AppAccount> findByAccountNum(String accountNum){
        return accountRepository.findByAccount(accountNum);
    }

    public AppAccount updateAccount(AppAccount appAccount, Double amount){

        appAccount.setAmount(appAccount.getAmount() + amount);

        return accountRepository.save(appAccount);

    }
}