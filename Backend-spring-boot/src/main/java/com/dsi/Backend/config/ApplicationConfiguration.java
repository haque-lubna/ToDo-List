package com.dsi.Backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ApplicationConfiguration {
    @Value("${application.properties.client.base.url}")
    private String clientBaseUrl;

    @Value("${application.properties.allowed.methods}")
    private String[] allowedMethods;

    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins(clientBaseUrl)
                        .allowedMethods(allowedMethods);
            }
        };
    }
}
