package com.chatbot.chatbot.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ConfigurationProperties(prefix = "application.gemini")
public class GeminiConfig {
    private String apiKey;
    private String modelName;
    private String promptTemplate;
}
