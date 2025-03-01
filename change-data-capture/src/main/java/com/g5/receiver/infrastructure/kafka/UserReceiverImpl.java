package com.g5.receiver.infrastructure.kafka;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.g5.receiver.domain.model.AppUser;
import com.g5.receiver.domain.ports.in.UserReceiver;
import com.g5.receiver.infrastructure.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.kafka.annotation.KafkaListener;

@Log4j2
@RequiredArgsConstructor
public class UserReceiverImpl implements UserReceiver {

    private final AppUserRepository appUserRepository;

    @KafkaListener(topicPattern = "${kafka.topic}", groupId = "${spring.kafka.consumer.group-id}")
    public void receivePointToPointUser (String user) {
        log.info("New user received: {}", user);

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(user);

            JsonNode afterNode = rootNode.path("payload").path("after");
            this.appUserRepository.save(objectMapper.treeToValue(afterNode, AppUser.class));
        } catch (Exception e) {
            log.error(e.getMessage());
        }
    }
}
