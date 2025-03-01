package com.g5.receiver.infrastructure.configuration;

import com.g5.receiver.domain.ports.in.UserReceiver;
import com.g5.receiver.infrastructure.kafka.UserReceiverImpl;
import com.g5.receiver.infrastructure.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class Beans {

    private final AppUserRepository appUserRepository;

    @Bean
    public UserReceiver userReceiver() {
        return new UserReceiverImpl(appUserRepository);
    }
}
