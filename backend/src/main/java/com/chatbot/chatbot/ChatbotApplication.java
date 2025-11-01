package com.chatbot.chatbot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.chatbot.chatbot.config.GeminiConfig;
import com.chatbot.chatbot.config.WeatherApiConfig;

@EnableConfigurationProperties({GeminiConfig.class, WeatherApiConfig.class})
@SpringBootApplication
public class ChatbotApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChatbotApplication.class, args);
	}

}
