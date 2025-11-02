package com.chatbot.chatbot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chatbot.chatbot.dto.WeatherApiResponse;
import com.chatbot.chatbot.dto.ChatResponseDto;
import com.chatbot.chatbot.service.GeminiService;
import com.chatbot.chatbot.service.WeatherApiService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.chatbot.chatbot.dto.ChatRequestDto;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:5173", "http://192.168.100.85:5173"})
public class ChatBotController {
    
    @Autowired
    private GeminiService geminiService;
    @Autowired
    private WeatherApiService weatherApiService;

    @PostMapping("/conversar")
    public ResponseEntity<ChatResponseDto> conversation(@RequestBody ChatRequestDto request) {
        try {
            String lat = (request.getLat() != null && !request.getLat().isEmpty()) ? request.getLat() : null;
            String lon = (request.getLon() != null && !request.getLon().isEmpty()) ? request.getLon() : null;
            
            WeatherApiResponse weather = null;
            
            // Só busca o clima se houver coordenadas válidas
            if (lat != null && lon != null && !lat.isEmpty() && !lon.isEmpty()) {
                try {
                    weather = weatherApiService.getWeather(lat, lon);
                } catch (Exception weatherError) {
                    System.err.println("Erro ao buscar clima: " + weatherError.getMessage());
                    // Continua sem informações de clima
                }
            }
            
            String response = geminiService.conversation(request.getMessage(), weather);
            
            ChatResponseDto chatResponse = new ChatResponseDto();
            chatResponse.setResponse(response);
            return ResponseEntity.ok(chatResponse);
            
        } catch (Exception e) {
            e.printStackTrace(); // Para debug
            ChatResponseDto errorResponse = new ChatResponseDto();
            errorResponse.setResponse("Desculpe, ocorreu um erro ao processar sua pergunta. Tente novamente.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }    
    

}
