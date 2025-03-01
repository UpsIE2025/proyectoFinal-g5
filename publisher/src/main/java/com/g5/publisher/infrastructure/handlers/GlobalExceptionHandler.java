package com.g5.publisher.infrastructure.handlers;

import com.g5.publisher.domain.exceptions.InvalidDataException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import com.g5.publisher.domain.model.Error;
import com.g5.publisher.domain.model.ErrorDetail;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler({InvalidDataException.class})
    public ResponseEntity<Error> invalidDataException(InvalidDataException ex) {
        Error error = new Error();
        error.setTitle("Invalid params");
        error.setDetail(ex.getMessage());

        error.setErrors(Collections.emptyList());
        List<ErrorDetail> errorDetails = new ArrayList<>();
        ex.getErrors().forEach((key, detail) -> {
            ErrorDetail errorDetail = new ErrorDetail();
            errorDetail.setMessage(key + " " + detail);
            errorDetails.add(errorDetail);
        });
        error.setErrors(errorDetails);
        error.setStatus(HttpStatus.UNPROCESSABLE_ENTITY.value());
        return new ResponseEntity<>(error, HttpStatus.UNPROCESSABLE_ENTITY);
    }

}
