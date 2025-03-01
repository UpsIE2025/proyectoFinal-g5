package com.g5.receiver.infrastructure.configuration;

import com.g5.receiver.domain.ports.in.UserReceiver;
import com.g5.receiver.infrastructure.kafka.UserReceiverImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Beans {
    @Bean
    public UserReceiver userReceiver() {
        return new UserReceiverImpl();
    }
}
