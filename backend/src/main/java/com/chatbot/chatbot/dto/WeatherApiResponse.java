package com.chatbot.chatbot.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class WeatherApiResponse {
    private Location location;
    private Current current;

    @Getter
    @Setter
    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class Location {
        private String name;
        private String region;
        private String country;
        private double lat;
        private double lon;
        private String tzId;
        private long localtimeEpoch;
        private String localtime;
    }

    @Getter
    @Setter
    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public static class Current {
        private long lastUpdatedEpoch;
        private String lastUpdated;
        private double tempC;
        private double tempF;
        private int isDay;
        private Condition condition;
        private double windMph;
        private double windKph;
        private int windDegree;
        private String windDir;
        private double pressureMb;
        private double pressureIn;
        private double precipMm;
        private double precipIn;
        private int humidity;
        private int cloud;
        private double feelslikeC;
        private double feelslikeF;
        private double windchillC;
        private double windchillF;
        private double heatindexC;
        private double heatindexF;
        private double dewpointC;
        private double dewpointF;
        private double visKm;
        private double visMiles;
        private double uv;
        private double gustMph;
        private double gustKph;

        @Getter
        @Setter
        @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
        public static class Condition {
            private String text;
            private String icon;
            private int code;
        }
    }
}
