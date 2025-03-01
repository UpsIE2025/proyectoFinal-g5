package com.g5.receiver.infrastructure.configuration;

import com.g5.receiver.domain.ports.in.MessageReceiver;
import com.g5.receiver.infrastructure.kafka.MessageReceiverImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Beans {
    @Bean
    public MessageReceiver messageReceiver() {
        return new MessageReceiverImpl();
    }
}
