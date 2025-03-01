package com.g5.publisher.application;

import com.g5.publisher.domain.model.Message;
import com.g5.publisher.domain.ports.in.PublishMessage;
import com.g5.publisher.domain.ports.out.MessagePublisher;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class PublishMessageImpl implements PublishMessage {

    private final MessagePublisher messagePublisher;

    @Override
    public String publishMessage(Message message) {
       return messagePublisher.sendPointToPoint(message.getContent());
    }
}
