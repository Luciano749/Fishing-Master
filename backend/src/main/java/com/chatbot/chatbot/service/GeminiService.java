package com.chatbot.chatbot.service;

import org.springframework.stereotype.Service;

import com.chatbot.chatbot.config.GeminiConfig;
import com.chatbot.chatbot.dto.WeatherApiResponse;
import com.chatbot.chatbot.utils.WeatherPromptBuilder;
import com.google.genai.Client;
import com.google.genai.types.Content;
import com.google.genai.types.GenerateContentConfig;
import com.google.genai.types.GenerateContentResponse;
import com.google.genai.types.Part;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GeminiService {
    private final GeminiConfig geminiConfig;

    public String conversation(String message, WeatherApiResponse weather) {
        String detailedWeather = weather != null 
            ? WeatherPromptBuilder.buildDetailedWeatherInfo(weather)
            : "Dados climáticos não disponíveis no momento.";
            
        String prompt = String.format("Usuário: %s\n\n%s\n\nResponda de forma natural e contextualizada.",
                message, detailedWeather);

        final String apiKey = geminiConfig.getApiKey();
        final String modelName = geminiConfig.getModelName();
        final String trainingPrompt = geminiConfig.getPromptTemplate();

        Client client = Client.builder().apiKey(apiKey).build();

        GenerateContentConfig config = GenerateContentConfig.builder()
                .systemInstruction(
                        Content.fromParts(Part.fromText(trainingPrompt)))
                .build();

        GenerateContentResponse geminiResponse = client.models.generateContent(modelName, prompt, config);
        String response = geminiResponse.text();

        return response;
    }
}
