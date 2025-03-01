package com.g5.receiver.infrastructure.kafka;

import com.g5.receiver.domain.ports.in.UserReceiver;
import lombok.extern.log4j.Log4j2;
import org.springframework.kafka.annotation.KafkaListener;

@Log4j2
public class UserReceiverImpl implements UserReceiver {
    @KafkaListener(topics = "${kafka.point-to-point.topic}", groupId = "${spring.kafka.consumer.group-id}")
    public void receivePointToPointUser (String user) {
        log.info("New user received: {}", user);
    }
}
