package com.g5.publisher.infrastructure.kafka;

import com.g5.publisher.domain.ports.out.MessagePublisher;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.server.ResponseStatusException;

@Log4j2
@AllArgsConstructor
public class MessagePublisherImpl implements MessagePublisher {

    private final KafkaTemplate<String, String> kafkaTemplate;
    private String pointToPointTopic;

    @Override
    public String sendPointToPoint(String message) {
        return this.sendMessage(this.pointToPointTopic, message);
    }

    private String sendMessage(String topic, String message) {
        try {
            log.info("Sending Message: {}, to Topic: {}", message, topic);
            kafkaTemplate.send(topic, message);

            return "Message sent";
        } catch (Exception e) {
            log.error("Error while sending message, error: {}", e.getMessage());
            throw new ResponseStatusException(HttpStatus.SERVICE_UNAVAILABLE, "Error while sending message to Kafka");
        }
    }
}
