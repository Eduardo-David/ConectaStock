package com.eduardo.gestionador_backend_spring.models.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduardo.gestionador_backend_spring.models.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

    boolean existsByName(String name);
    Optional<User> findByName(String name);

}
