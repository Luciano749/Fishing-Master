package com.chatbot.chatbot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.chatbot.chatbot.config.WeatherApiConfig;
import com.chatbot.chatbot.dto.WeatherApiResponse;

@Service
public class WeatherApiService {
    @Autowired
    RestTemplate restTemplate;

    @Autowired
    WeatherApiConfig weatherApiConfig;

    public WeatherApiResponse getWeather(String lat, String lon) {
        String apiKey = weatherApiConfig.getApiKey();
        String url = "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + lat + "," + lon;
        WeatherApiResponse response = restTemplate.getForObject(url, WeatherApiResponse.class);
        return response;
    }

}
