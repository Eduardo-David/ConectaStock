package com.eduardo.gestionador_backend_spring.models.dto;

public class UserDto {

    private String username;
    private String password;
    private String role;
    
    public UserDto(String username, String password, String role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public UserDto() {
    }
    @Override
    public String toString() {
        return "UserDto [username=" + username + ", password=" + password + ", role=" + role + "]";
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
   
    

    
}

