package com.g5.grpc.service_rpc;

import com.g5.grpc.mo.IdMovementResponse;
import com.g5.grpc.mo.MovementsRequest;
import com.g5.grpc.mo.MovementsServiceGrpc;
import com.g5.grpc.model.AppAccount;
import com.g5.grpc.model.AppMovements;
import com.g5.grpc.service.AccountService;
import com.g5.grpc.service.MovementsService;
import io.grpc.Status;
import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

@GrpcService
public class GrpcMovementServer extends MovementsServiceGrpc.MovementsServiceImplBase {

    @Autowired
    private MovementsService movementsService;

    @Autowired
    private AccountService accountService;

    @Override
    public void createMovements(MovementsRequest request, StreamObserver<IdMovementResponse> responseObserver) {
        try {
            Optional<AppAccount> optionalAccountDes = accountService.findByAccountNum(request.getAccountDest());
            movementsService.createMovements(request.getAccountDest(), Double.parseDouble(request.getAmount()), "C", request.getDescription());
            if (optionalAccountDes.isPresent()) {
                AppAccount appAccountDes = optionalAccountDes.get();
                accountService.updateAccount(appAccountDes,Double.parseDouble(request.getAmount()));
            } else {
                responseObserver.onError(Status.NOT_FOUND
                        .withDescription("La cuenta " + request.getAccountDest() + " no fue encontrada.")
                        .asException());
            }
            AppMovements createdMovement = movementsService.createMovements(request.getAccountId(), Double.parseDouble(request.getAmount()), "D", request.getDescription());
            Optional<AppAccount> optionalAccount = accountService.findByAccountNum(request.getAccountId());
            if (optionalAccount.isPresent()) {
                AppAccount appAccount = optionalAccount.get();
                accountService.updateAccount(appAccount,Double.parseDouble(request.getAmount()) * -1);
            }
            IdMovementResponse responseAcc = IdMovementResponse.newBuilder()
                    .setId(String.valueOf(createdMovement.getId()))
                    .build();
            responseObserver.onNext(responseAcc);
            responseObserver.onCompleted();
        } catch (Exception e) {
            responseObserver.onError(e);
        }
    }


}
