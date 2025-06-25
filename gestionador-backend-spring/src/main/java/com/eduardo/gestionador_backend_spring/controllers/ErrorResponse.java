package com.eduardo.gestionador_backend_spring.controllers;

public class ErrorResponse {
    String message;

    public ErrorResponse(String message) {
        this.message = message;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
}
