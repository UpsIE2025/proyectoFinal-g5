package com.g5.publisher.domain.ports.out;

public interface MessagePublisher {
    String sendPointToPoint(String message);
}
