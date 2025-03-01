package com.g5.publisher.infrastructure.configuration;

import com.g5.publisher.application.PublishMessageImpl;
import com.g5.publisher.domain.ports.in.PublishMessage;
import com.g5.publisher.domain.ports.out.MessagePublisher;
import com.g5.publisher.infrastructure.kafka.MessagePublisherImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.KafkaTemplate;

@Configuration
@RequiredArgsConstructor
public class Beans {

    @Value("${kafka.point-to-point.topic}")
    private String pointToPointTopic;

    private final KafkaTemplate<String, String> kafkaTemplate;

    @Bean
    public PublishMessage publishMessage() {
        return new PublishMessageImpl(messagePublisher());
    }

    @Bean
    public MessagePublisher messagePublisher() {
        return new MessagePublisherImpl(kafkaTemplate, pointToPointTopic);
    }
}
