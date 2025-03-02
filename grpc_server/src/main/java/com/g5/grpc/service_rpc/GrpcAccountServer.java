package com.g5.grpc.service_rpc;

import com.g5.grpc.*;
import com.g5.grpc.model.AppAccount;
import com.g5.grpc.service.AccountService;
import com.g5.grpc.util.GenerateAccount;
import io.grpc.Status;
import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

@GrpcService
public class GrpcAccountServer extends AccountServiceGrpc.AccountServiceImplBase {

    @Autowired
    private AccountService accountService;

    @Override
    public void createAccount(AccountRequest request, StreamObserver<AccountResponse> responseObserver) {
        try {
            String numCta = GenerateAccount.generateCodCta();
            AppAccount createdAccount = accountService.createAccount(numCta, Integer.parseInt(request.getUserId()), 0.00);
            AccountResponse responseAcc = AccountResponse.newBuilder()
                    .setId(String.valueOf(createdAccount.getId()))
                    .setAccount(createdAccount.getAccount())
                    .setAmount(createdAccount.getAmount().toString())
                    .setCreatedAt(createdAccount.getCreatedAt().toString())
                    .build();
            responseObserver.onNext(responseAcc);
            responseObserver.onCompleted();
        } catch (Exception e) {
            responseObserver.onError(e);
        }
    }

    @Override
    public void findAccountByAccountNum(AccountNumRequest request, StreamObserver<AccountResponse> responseObserver) {
        Optional<AppAccount> optionalAccount = accountService.findByAccountNum(request.getAccount());
        if (optionalAccount.isPresent()) {
            AppAccount appAccount = optionalAccount.get();
            AccountResponse response = AccountResponse.newBuilder()
                    .setId(String.valueOf(appAccount.getId()))
                    .setAccount(appAccount.getAccount())
                    .setAmount(appAccount.getAmount().toString())
                    .setCreatedAt(appAccount.getCreatedAt().toString())
                    .build();
            responseObserver.onNext(response);
        } else {
            responseObserver.onError(Status.NOT_FOUND
                    .withDescription("La cuenta " + request.getAccount() + " no fue encontrada.")
                    .asException());
        }
        responseObserver.onCompleted();
    }

    @Override
    public void updateAccount(AccountUpdateRequest request, StreamObserver<AccountResponse> responseObserver){
        Optional<AppAccount> optionalAccount = accountService.findByAccountNum(request.getAccount());
        if (optionalAccount.isPresent()) {
            AppAccount appAccount = optionalAccount.get();
            accountService.updateAccount(appAccount, Double.parseDouble(request.getAmount()));
            AccountResponse response = AccountResponse.newBuilder()
                    .setId(String.valueOf(appAccount.getId()))
                    .setAccount(appAccount.getAccount())
                    .setAmount(appAccount.getAmount().toString())
                    .setCreatedAt(appAccount.getCreatedAt().toString())
                    .build();
            responseObserver.onNext(response);
        } else {
            responseObserver.onError(Status.NOT_FOUND
                    .withDescription("La cuenta " + request.getAccount() + " no fue encontrada.")
                    .asException());
        }
        responseObserver.onCompleted();
    }
}
