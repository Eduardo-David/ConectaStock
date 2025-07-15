package com.eduardo.gestionador_backend_spring.controllers.request;

public record RegisterRequest(
        String name,
        String password,
        String role,
        String telefono) {

}
