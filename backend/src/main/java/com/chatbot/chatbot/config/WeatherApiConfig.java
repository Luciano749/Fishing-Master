package com.chatbot.chatbot.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ConfigurationProperties(prefix = "application.weather")
public class WeatherApiConfig {
    private String apiKey;
}
