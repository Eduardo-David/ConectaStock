package com.eduardo.gestionador_backend_spring.services;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.eduardo.gestionador_backend_spring.models.entities.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

    @Value("${security.jwt.secret-key}")
    private String SECRET_KEY;

    // Use constants for expiration times for better readability and maintenance
    private static final long ACCESS_TOKEN_EXPIRATION_MINUTES = 30;
    private static final long REFRESH_TOKEN_EXPIRATION_MINUTES = 60;

    private Key getKey() {
        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    }

    public String buildToken(User user, long expirationMinute) {
        final Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("username", user.getUsername());
        extraClaims.put("role", user.getRole());

        final long currentTime = System.currentTimeMillis();
        final Date issuedAt = new Date(currentTime);
        final Date expiration = new Date(currentTime + (expirationMinute * 60 * 1000));

        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(user.getUsername())
                .setIssuedAt(issuedAt)
                .setExpiration(expiration)
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .signWith(getKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public String generateToken(final User user) {
        return buildToken(user, ACCESS_TOKEN_EXPIRATION_MINUTES);
    }

    public String generateRefreshToken(final User user) {
        return buildToken(user, REFRESH_TOKEN_EXPIRATION_MINUTES);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

      public boolean isTokenValid(String token, User user) {
        final String username = extractUsername(token);
        return (username.equals(user.getUsername())) && !isTokenExpired(token);
    }
    // Validar token

    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getKey())
                .build()
                .parseClaimsJws(token)
                .getBody();

    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

}
