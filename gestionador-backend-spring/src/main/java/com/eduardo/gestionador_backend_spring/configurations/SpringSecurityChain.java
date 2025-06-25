package com.eduardo.gestionador_backend_spring.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@Configuration
public class SpringSecurityChain {
    
    public SpringSecurityChain(){}

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity)throws Exception{
        return httpSecurity.csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(authRequest -> authRequest.requestMatchers("/user/create", "/user/login")
        .permitAll()
        .anyRequest().authenticated()
         )
         //.formLogin(withDefaults())
         .build();
    }
}
