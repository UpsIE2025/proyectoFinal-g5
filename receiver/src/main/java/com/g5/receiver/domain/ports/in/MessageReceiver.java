package com.g5.receiver.domain.ports.in;

public interface MessageReceiver {
    void receivePointToPointMessage(String message);
}
