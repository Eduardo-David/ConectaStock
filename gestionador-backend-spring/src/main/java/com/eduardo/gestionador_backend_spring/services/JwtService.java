package com.eduardo.gestionador_backend_spring.services;

import java.util.Map;
import java.security.Key;
import java.sql.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.eduardo.gestionador_backend_spring.models.UserDto;

import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class JwtService {

    @Value("${security.jwt.secret-key}")
    private String SECRET_KEY;


    private Key generateKey(){
        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    }
 
    private class TimeExpiration{

        private final Date issuedAt;
        private final Date expiration;

        public TimeExpiration(int timeMinute) {
            this.issuedAt = new Date(System.currentTimeMillis());
            this.expiration = new Date(issuedAt.getTime() + (timeMinute*60*1000));
        }
        public Date getIssuedAt() {
            return issuedAt;
        }
        public Date getExpiration() {
            return expiration;
        }
    }

    private class GenerateExtraClaims{
        private Map<String, Object> claims = new HashMap<>();

        public GenerateExtraClaims(UserDto userDto) {
            this.claims.put("name", userDto.getUsername());
            this.claims.put("role", userDto.getRole());
        }

        public Map<String, Object> getClaims() {
            return claims;
        }

    }

    public String generateToken(UserDto userDto) {
        GenerateExtraClaims extraClaims = new GenerateExtraClaims(userDto);
        TimeExpiration timeExpiration = new TimeExpiration(30);
        return Jwts.builder()
            .setClaims(extraClaims.getClaims())
            .setSubject(userDto.getUsername())
            .setIssuedAt(timeExpiration.getIssuedAt())
            .setExpiration(timeExpiration.getExpiration())
            .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
            .signWith(generateKey(),SignatureAlgorithm.HS256)
            .compact();
    }

}
