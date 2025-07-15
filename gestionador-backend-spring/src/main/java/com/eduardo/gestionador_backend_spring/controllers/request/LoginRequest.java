package com.eduardo.gestionador_backend_spring.controllers.request;

public record LoginRequest(
    String username,
    String password
) {
    
}
