package com.eduardo.gestionador_backend_spring.models.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.eduardo.gestionador_backend_spring.models.entities.Token;

@Repository
public interface TokenRepository extends JpaRepository<Token, Long> {
    @Query(value =
     "SELECT * FROM token t INNER JOIN user u ON t.user_id = u.id WHERE u.id = :id AND (t.expired = false OR t.revoked = false)"
    , nativeQuery = true)
    List<Token> findAllValidTokenByUser(@Param("id") Long id);
    
    Optional<Token> findByToken(String token);
}
