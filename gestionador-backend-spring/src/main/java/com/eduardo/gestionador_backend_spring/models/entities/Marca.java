package com.eduardo.gestionador_backend_spring.models.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "marca")
public class Marca implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="marca_sequence")
    @SequenceGenerator(name="marca_sequence", sequenceName="marca_sequence", allocationSize=1)
    @Column(name = "id_marca")
    private Long id;
    
    @Column(name = "nombre", length = 100, nullable = false)
    private String nombre;

}