package com.g5.publisher.domain.ports.out;

import com.g5.publisher.domain.model.User;

public interface UserPublisher {
    String sendPointToPoint(User user);
}
