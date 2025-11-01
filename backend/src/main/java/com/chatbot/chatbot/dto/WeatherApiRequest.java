package com.chatbot.chatbot.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WeatherApiRequest {
    private String lat;
    private String lon;
}
