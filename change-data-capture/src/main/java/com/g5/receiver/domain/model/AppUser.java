package com.g5.receiver.domain.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "app_user")
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @JsonProperty("last_name")
    private String lastName;
    private String email;
    @JsonProperty("user_name")
    private String userName;
    private String password;
    @JsonProperty("created_at")
    private LocalDateTime createdAt;
    @JsonProperty("updated_at")
    private LocalDateTime updatedAt;
    @JsonProperty("delete_at")
    private LocalDateTime deleteAt;
}

