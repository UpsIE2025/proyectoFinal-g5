package com.g5.grpc.service_rpc;

import com.g5.grpc.*;
import com.g5.grpc.model.AppUser;
import com.g5.grpc.service.AccountService;
import com.g5.grpc.service.UserService;
import com.g5.grpc.util.GenerateAccount;
import io.grpc.Status;
import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;

@GrpcService
public class GrpcUserServer extends UserServiceGrpc.UserServiceImplBase {
    @Autowired
    private UserService userService;

    @Autowired
    private AccountService accountService;

    @Override
    public void createUser(UserRequest request, StreamObserver<UserResponse> responseObserver) {
        try {
            Optional<AppUser> existingUser = userService.findByUserName(request.getUserName());
            if (existingUser.isPresent()) {
                responseObserver.onError(Status.ALREADY_EXISTS
                        .withDescription("El usuario " + request.getUserName() + " ya fue registrado.")
                        .asException());
                return;
            }
            AppUser createdUser = userService.createUser(request.getName(), request.getLastName(),
                    request.getEmail(), request.getUserName(), request.getPassword());
            String numCta = GenerateAccount.generateCodCta();
            accountService.createAccount(numCta, createdUser.getId(), 0.00);
            UserResponse response = UserResponse.newBuilder()
                    .setId(String.valueOf(createdUser.getId()))
                    .setName(createdUser.getName())
                    .setLastName(createdUser.getLastName())
                    .setEmail(createdUser.getEmail())
                    .setUserName(createdUser.getUserName())
                    .setCreatedAt(createdUser.getCreatedAt().toString())
                    .setUpdateAt(createdUser.getUpdatedAt().toString())
                    .setDeleteAt(createdUser.getDeleteAt() != null ? createdUser.getDeleteAt().toString() : "")
                    .build();
            responseObserver.onNext(response);
            responseObserver.onCompleted();
        } catch (Exception e) {
            responseObserver.onError(e);
        }
    }

    @Override
    public void findUserByUserName(UserNameRequest request, StreamObserver<UserResponse> responseObserver) {
        Optional<AppUser> optionalUser = userService.findByUserName(request.getUserName());
        if (optionalUser.isPresent()) {
            AppUser appUser = optionalUser.get();
            UserResponse response = UserResponse.newBuilder()
                    .setId(String.valueOf(appUser.getId()))
                    .setName(appUser.getName())
                    .setLastName(appUser.getLastName())
                    .setUserName(appUser.getUserName())
                    .setEmail(appUser.getEmail())
                    .setPassword(appUser.getPassword())
                    .setCreatedAt(appUser.getCreatedAt().toString())
                    .setUpdateAt(appUser.getUpdatedAt().toString())
                    .setDeleteAt(appUser.getDeleteAt() != null ? appUser.getDeleteAt().toString() : "")
                    .build();
            responseObserver.onNext(response);
        } else {
            responseObserver.onError(Status.NOT_FOUND
                    .withDescription("El usuario " + request.getUserName() + " no fue encontrado.")
                    .asException());
        }
        responseObserver.onCompleted();
    }
}
