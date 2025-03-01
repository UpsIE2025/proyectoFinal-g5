package com.g5.receiver;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReceiverApplication {

    public static void main(String[] args) {
        Dotenv.configure().ignoreIfMissing().load().entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
        SpringApplication.run(ReceiverApplication.class, args);
    }

}
