package com.chatbot.chatbot.utils;

import com.chatbot.chatbot.dto.WeatherApiResponse;

public class WeatherPromptBuilder {
    
    private static final String PROMPT_TEMPLATE = """
            Usuário: %s
            
            %s
            
            Por favor, responda à pergunta do usuário considerando os dados climáticos fornecidos quando relevante.
            Seja natural e conversacional na resposta, incorporando as informações meteorológicas de forma contextual.
            """;
    
    private static final String WEATHER_DATA_TEMPLATE = """
            Dados climáticos atuais disponíveis:
            Localização: %s, %s, %s
            Temperatura: %.1f°C (%.1f°F)
            Condição: %s
            Sensação térmica: %.1f°C
            Umidade: %d%%
            Vento: %.1f km/h %s
            Visibilidade: %.1f km
            Pressão: %.1f mb
            Índice UV: %.1f
            """;
    
    public static String buildPrompt(String userMessage, WeatherApiResponse weather) {
        if (weather == null) {
            return buildPromptWithoutWeather(userMessage);
        }
        
        String weatherInfo = buildWeatherInfo(weather);
        return String.format(PROMPT_TEMPLATE, userMessage, weatherInfo);
    }
    
    public static String buildPromptWithoutWeather(String userMessage) {
        return String.format(PROMPT_TEMPLATE, userMessage, "Nenhum dado climático disponível no momento.");
    }
    
    private static String buildWeatherInfo(WeatherApiResponse weather) {
        try {
            return String.format(WEATHER_DATA_TEMPLATE,
                weather.getLocation().getName(),
                weather.getLocation().getRegion(),
                weather.getLocation().getCountry(),
                weather.getCurrent().getTempC(),
                weather.getCurrent().getTempF(),
                weather.getCurrent().getCondition().getText(),
                weather.getCurrent().getFeelslikeC(),
                weather.getCurrent().getHumidity(),
                weather.getCurrent().getWindKph(),
                weather.getCurrent().getWindDir(),
                weather.getCurrent().getVisKm(),
                weather.getCurrent().getPressureMb(),
                weather.getCurrent().getUv()
            );
        } catch (Exception e) {
            return "Dados climáticos indisponíveis (erro ao processar informações meteorológicas).";
        }
    }
    
    public static String buildSimpleWeatherSummary(WeatherApiResponse weather) {
        if (weather == null) {
            return "Dados climáticos não disponíveis.";
        }
        
        try {
            return String.format("Clima em %s: %.1f°C, %s, sensação térmica de %.1f°C",
                weather.getLocation().getName(),
                weather.getCurrent().getTempC(),
                weather.getCurrent().getCondition().getText(),
                weather.getCurrent().getFeelslikeC()
            );
        } catch (Exception e) {
            return "Erro ao acessar dados climáticos.";
        }
    }
    
    public static String buildDetailedWeatherInfo(WeatherApiResponse weather) {
        if (weather == null) {
            return "Dados climáticos não disponíveis.";
        }
        
        StringBuilder details = new StringBuilder();
        
        try {
            details.append("🌍 Localização: ")
                   .append(weather.getLocation().getName())
                   .append(", ").append(weather.getLocation().getRegion())
                   .append(", ").append(weather.getLocation().getCountry())
                   .append("\n");
                   
            details.append("🌡️ Temperatura: ")
                   .append(String.format("%.1f°C (%.1f°F)", 
                           weather.getCurrent().getTempC(), 
                           weather.getCurrent().getTempF()))
                   .append("\n");
                   
            details.append("☁️ Condição: ")
                   .append(weather.getCurrent().getCondition().getText())
                   .append("\n");
                   
            details.append("🤲 Sensação térmica: ")
                   .append(String.format("%.1f°C", weather.getCurrent().getFeelslikeC()))
                   .append("\n");
                   
            details.append("💧 Umidade: ")
                   .append(weather.getCurrent().getHumidity())
                   .append("%\n");
                   
            details.append("💨 Vento: ")
                   .append(String.format("%.1f km/h %s", 
                           weather.getCurrent().getWindKph(), 
                           weather.getCurrent().getWindDir()))
                   .append("\n");
                   
            details.append("👁️ Visibilidade: ")
                   .append(String.format("%.1f km", weather.getCurrent().getVisKm()))
                   .append("\n");
                   
            details.append("📊 Pressão: ")
                   .append(String.format("%.1f mb", weather.getCurrent().getPressureMb()))
                   .append("\n");
                   
            details.append("☀️ Índice UV: ")
                   .append(String.format("%.1f", weather.getCurrent().getUv()));
                   
        } catch (Exception e) {
            return "Erro ao processar dados climáticos detalhados.";
        }
        
        return details.toString();
    }
}