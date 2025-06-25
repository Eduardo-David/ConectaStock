package com.eduardo.gestionador_backend_spring.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_usuario;

    @Column(nullable = false, unique = true, length = 100)
    private String name;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, length = 20)
    private String role;

    @Column(nullable = false, length = 15)
    private String ci;

    @Column(nullable = false, length = 20)
    private String telefono;

    // Getters y Setters (si no los tienes ya, son recomendables)
    public Long getId_usuario() {
        return id_usuario;
    }
    public void setId_usuario(Long id_usuario) {
        this.id_usuario = id_usuario;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
     public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }

    public String getCi() {
        return ci;
    }
    public void setCi(String ci) {
        this.ci = ci;
    }

    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    // ... (otros getters y setters)

    @Override
    public String toString() {
        return "User{" +
                "id_usuario=" + id_usuario +
                ", name='" + name + '\'' +
                ", password='"+ password + // Es buena práctica no imprimir contraseñas
                ", role='" + role + '\'' +
                ", ci='" + ci + '\'' +
                ", telefono='" + telefono + '\'' +
                '}';
    }

}
