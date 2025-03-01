package com.g5.publisher.infrastructure.kafka;

import com.g5.publisher.domain.model.User;
import com.g5.publisher.domain.ports.out.UserPublisher;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.server.ResponseStatusException;

@Log4j2
@AllArgsConstructor
public class UserPublisherImpl implements UserPublisher {

    private final KafkaTemplate<String, String> kafkaTemplate;
    private String pointToPointTopic;

    @Override
    public String sendPointToPoint(User user) {
        return this.sendUser(this.pointToPointTopic, user);
    }

    private String sendUser(String topic, User user) {
        try {
            log.info("Sending User: {}, to Topic: {}", user, topic);
            kafkaTemplate.send(topic, user.toString());

            return "User sent";
        } catch (Exception e) {
            log.error("Error while sending user, error: {}", e.getMessage());
            throw new ResponseStatusException(HttpStatus.SERVICE_UNAVAILABLE, "Error while sending user to Kafka");
        }
    }
}
