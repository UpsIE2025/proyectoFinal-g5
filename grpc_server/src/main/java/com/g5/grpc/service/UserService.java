package com.g5.grpc.service;

import com.g5.grpc.model.AppUser;
import com.g5.grpc.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public AppUser createUser(String name, String lastName, String email,
                              String userName, String password) {
        AppUser user = new AppUser();
        user.setName(name);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setUserName(userName);
        user.setPassword(password);
        return userRepository.save(user);
    }

    public Optional<AppUser> findByUserName(String userName){
        return userRepository.findByUserName(userName);
    }
}