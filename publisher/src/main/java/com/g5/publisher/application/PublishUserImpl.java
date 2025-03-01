package com.g5.publisher.application;

import com.g5.publisher.domain.model.User;
import com.g5.publisher.domain.ports.in.PublishUser;
import com.g5.publisher.domain.ports.out.UserPublisher;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class PublishUserImpl implements PublishUser {

    private final UserPublisher userPublisher;

    @Override
    public String publishUser(User user) {
       return userPublisher.sendPointToPoint(user);
    }
}
