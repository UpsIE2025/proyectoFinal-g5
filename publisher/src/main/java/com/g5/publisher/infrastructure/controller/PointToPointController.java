package com.g5.publisher.infrastructure.controller;

import com.g5.publisher.domain.model.User;
import com.g5.publisher.domain.ports.in.PublishUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/point-to-point")
@RequiredArgsConstructor
public class PointToPointController {
    private final PublishUser publishUser;

    @PostMapping
    public ResponseEntity<String> pointToPoint(@RequestBody User user) {
        publishUser.publishUser(user);

        return ResponseEntity.ok().build();
    }
}
