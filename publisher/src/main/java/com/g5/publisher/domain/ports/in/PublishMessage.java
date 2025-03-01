package com.g5.publisher.domain.ports.in;

import com.g5.publisher.domain.model.Message;

public interface PublishMessage {
    String publishMessage(Message message);
}
