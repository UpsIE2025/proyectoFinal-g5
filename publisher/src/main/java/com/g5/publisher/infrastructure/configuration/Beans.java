package com.g5.publisher.infrastructure.configuration;

import com.g5.publisher.application.PublishUserImpl;
import com.g5.publisher.domain.ports.in.PublishUser;
import com.g5.publisher.domain.ports.out.UserPublisher;
import com.g5.publisher.infrastructure.kafka.UserPublisherImpl;
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
    public PublishUser publishUser() {
        return new PublishUserImpl(userPublisher());
    }

    @Bean
    public UserPublisher userPublisher() {
        return new UserPublisherImpl(kafkaTemplate, pointToPointTopic);
    }
}
