package com.eduardo.gestionador_backend_spring.controllers.request;

public record AuthRequest(
    String name,
    String password
) {
    
}
