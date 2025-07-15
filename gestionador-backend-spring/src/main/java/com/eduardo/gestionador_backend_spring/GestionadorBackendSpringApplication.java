package com.eduardo.gestionador_backend_spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class GestionadorBackendSpringApplication {

	public static void main(String[] args) {

		// 1. Cargar .env
		Dotenv dotenv = Dotenv.configure().load();

		// 2. Pasar la variable como propiedad del sistema
		System.setProperty("SECRET", dotenv.get("SECRET"));

		//3. Arrancar Spring Boot
		SpringApplication.run(GestionadorBackendSpringApplication.class, args);
	}

}
