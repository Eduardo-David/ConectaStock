package com.eduardo.gestionador_backend_spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.eduardo.gestionador_backend_spring.controllers.request.AuthRequest;
import com.eduardo.gestionador_backend_spring.controllers.request.RegisterRequest;
import com.eduardo.gestionador_backend_spring.controllers.response.TokenResponse;
import com.eduardo.gestionador_backend_spring.models.entities.Role;
import com.eduardo.gestionador_backend_spring.models.entities.Token;
import com.eduardo.gestionador_backend_spring.models.entities.User;
import com.eduardo.gestionador_backend_spring.models.repositories.TokenRepository;
import com.eduardo.gestionador_backend_spring.models.repositories.UserRepository;

import jakarta.annotation.Nonnull;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;
    private TokenRepository tokenRepository;
    private PasswordEncoder passwordEncoder;
    private JwtService jwtService;
    private AuthenticationManager authenticationManager;

    private void saveUserToken(User user, String jwtToken) {
        final Token token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(Token.TokenType.BEARER)
                .isExpired(false)
                .isRevoked(false)
                .build();
        tokenRepository.save(token);
    }

    public TokenResponse register(final RegisterRequest request) {
        final User user = User.builder()
                .username(request.name())
                .password(passwordEncoder.encode(request.password()))
                .telefono(request.telefono())
                .build();
        Role role = Role.valueOf(request.role());
        user.setRole(role);
        final User savedUser = repository.save(user);
        final String jwtToken = jwtService.generateToken(savedUser);
        final String refreshToken = jwtService.generateRefreshToken(savedUser);

        saveUserToken(savedUser, jwtToken);
        return new TokenResponse(jwtToken, refreshToken);
    }

    public TokenResponse authenticate(final AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.name(),
                        request.password()));
        final User user = repository.findByName(request.name()).orElseThrow(() -> new UsernameNotFoundException("No se existe el usuario"));    
        if (user == null) {
            throw new UsernameNotFoundException("No se existe el usuario");
        }
        final String accessToken = jwtService.generateToken(user);
        final String refreshToken = jwtService.generateRefreshToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, accessToken);
        return new TokenResponse(accessToken, refreshToken);
    }


    private void revokeAllUserTokens(final User user) {
        final List<Token> validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if (!validUserTokens.isEmpty()) {
            validUserTokens.forEach(token -> {
                token.setIsExpired(true);
                token.setIsRevoked(true);
            });
            tokenRepository.saveAll(validUserTokens);
        }
    }

    public TokenResponse refreshToken(@Nonnull final String authentication) {

        if (authentication == null || !authentication.startsWith("Bearer ")) {
            throw new IllegalArgumentException("Invalid auth header");
        }
        final String refreshToken = authentication.substring(7);
        final String username = jwtService.extractUsername(refreshToken);
        if (username == null) {
            return null;
        }

        final User user = this.repository.findByName(username).orElseThrow(() -> new UsernameNotFoundException("No se existe el usuario"));
        final boolean isTokenValid = jwtService.isTokenValid(refreshToken, user);
        if (!isTokenValid) {
            return null;
        }

        final String accessToken = jwtService.generateRefreshToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, accessToken);

        return new TokenResponse(accessToken, refreshToken);
    }
}
