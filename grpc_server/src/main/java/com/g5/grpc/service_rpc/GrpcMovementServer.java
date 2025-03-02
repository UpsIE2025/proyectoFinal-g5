package com.g5.grpc.service_rpc;

import com.g5.grpc.mo.IdMovementResponse;
import com.g5.grpc.mo.MovementsRequest;
import com.g5.grpc.mo.MovementsServiceGrpc;
import com.g5.grpc.model.AppMovements;
import com.g5.grpc.service.MovementsService;
import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;

@GrpcService
public class GrpcMovementServer extends MovementsServiceGrpc.MovementsServiceImplBase {

    @Autowired
    private MovementsService movementsService;

    @Override
    public void createMovements(MovementsRequest request, StreamObserver<IdMovementResponse> responseObserver) {
        try {
            AppMovements createdMovement = movementsService.createMovements(request.getAccountId(), Double.parseDouble(request.getAmount()), "D", request.getDescription());
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
