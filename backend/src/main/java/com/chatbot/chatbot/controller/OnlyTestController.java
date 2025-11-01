package com.chatbot.chatbot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chatbot.chatbot.dto.WeatherApiResponse;
import com.chatbot.chatbot.service.GeminiService;
import com.chatbot.chatbot.service.WeatherApiService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.chatbot.chatbot.dto.ChatRequestDto;

@RestController
@RequestMapping("/api")
public class OnlyTestController {
    @Autowired
    private GeminiService geminiService;
    @Autowired
    private WeatherApiService weatherApiService;

    @PostMapping("/conversar")
    public String conversation(@RequestBody ChatRequestDto request) {
        String lat = (request.getLat() != null && !request.getLat().isEmpty()) ? request.getLat() : "";
        String lon = (request.getLon() != null && !request.getLon().isEmpty()) ? request.getLon() : "";
        
        WeatherApiResponse weather = weatherApiService.getWeather(lat, lon);
        
        String response = geminiService.conversation(request.getMessage(), weather);
        return response;
    }    
    

}
