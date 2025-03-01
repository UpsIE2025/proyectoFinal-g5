package com.g5.receiver.infrastructure.kafka;

import com.g5.receiver.domain.ports.in.MessageReceiver;
import lombok.extern.log4j.Log4j2;
import org.springframework.kafka.annotation.KafkaListener;

@Log4j2
public class MessageReceiverImpl implements MessageReceiver {
    @KafkaListener(topics = "${kafka.point-to-point.topic}", groupId = "${spring.kafka.consumer.group-id}")
    public void receivePointToPointMessage (String message) {
        log.info("New message received: {}", message);
    }
}
