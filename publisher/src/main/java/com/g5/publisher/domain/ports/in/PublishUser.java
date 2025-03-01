package com.g5.publisher.domain.ports.in;

import com.g5.publisher.domain.model.User;

public interface PublishUser {
    String publishUser(User user);
}
