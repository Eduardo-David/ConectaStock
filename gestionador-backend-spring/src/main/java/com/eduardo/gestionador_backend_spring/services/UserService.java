package com.eduardo.gestionador_backend_spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.eduardo.gestionador_backend_spring.models.User;
import com.eduardo.gestionador_backend_spring.models.UserDto;
import com.eduardo.gestionador_backend_spring.models.UserRepository;

@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    public boolean createUser(User user){
        try {
            user.setPassword(encoder.encode(user.getPassword()));
            userRepository.save(user);
            return true;
        } catch (DataIntegrityViolationException e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    public boolean existsByUsernameAndPassword(UserDto userDto) {
        boolean existsName = userRepository.existsByName(userDto.getUsername());
        boolean comparePassword= encoder.matches(userDto.getPassword(), userRepository.findByName(userDto.getUsername()).getPassword());
        User user = userRepository.findByName(userDto.getUsername());
        boolean existsRole = user.getRole().equals(userDto.getRole()); 
        return (existsName && comparePassword && existsRole)?true:false;
    }

}
