package com.project.gameshop.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Deshabilita CSRF para simplificar pruebas
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/game/**").permitAll() // Permitir acceso público a todas las rutas de /games
                .anyRequest().permitAll() // Permitir acceso público a todos los demás endpoints para pruebas
            )
            .httpBasic(httpBasic -> {}); // Configuración básica para pruebas

        return http.build();
    }
}
