package com.eduardo.gestionador_backend_spring.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eduardo.gestionador_backend_spring.models.User;
import com.eduardo.gestionador_backend_spring.models.UserDto;
import com.eduardo.gestionador_backend_spring.services.JwtService;
import com.eduardo.gestionador_backend_spring.services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private JwtService jwtService;
    
    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<?> createEntity(@RequestBody User user) {
        System.err.println("llego la credenciales "+user.toString());
        if (userService.createUser(user)) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.badRequest().body(new ErrorResponse("El nombre de usuario ya existe."));    
        }       
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDto userDto) {
        boolean login=userService.existsByUsernameAndPassword(userDto);
        System.err.println("llego la credenciales "+userDto.toString());
        System.err.println("login es: "+login+"");
        if (login) {
            String token = jwtService.generateToken(userDto);
            return ResponseEntity.ok(Map.of("token",token));
        } else {
            return ResponseEntity.badRequest().body(new ErrorResponse("Credenciales incorrectas."));
        }
    }

    
    
}
