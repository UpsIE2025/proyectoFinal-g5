package com.g5.publisher.domain.exceptions;

import lombok.Getter;

import java.util.Map;

@Getter
public class InvalidDataException extends RuntimeException {
    private final Map<String, String> errors;

    public InvalidDataException(String message, Map<String, String> errors) {
        super(message);
        this.errors = errors;
    }
}
