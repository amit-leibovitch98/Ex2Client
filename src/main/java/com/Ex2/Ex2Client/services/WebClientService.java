package com.Ex2.Ex2Client.services;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import java.time.LocalDateTime;

@Service
public class WebClientService {
    private final WebClient webClient;

    public WebClientService() {
        this.webClient = WebClient.create("http://localhost:8989");
    }

    public String Question1()
    {
        LocalDateTime now = LocalDateTime.now();
        return this.webClient.get().uri("/test_get_method/{h}&{m}", now.getHour(), now.getMinute())
                .exchange()
                .block()
                .bodyToMono(String.class)
                .block();
    }

}
