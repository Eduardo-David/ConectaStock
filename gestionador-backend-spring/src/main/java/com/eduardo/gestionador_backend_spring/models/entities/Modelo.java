package com.eduardo.gestionador_backend_spring.models.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "modelo")
public class Modelo implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="modelo_sequence")
    @SequenceGenerator(name="modelo_sequence", sequenceName="modelo_sequence", allocationSize=1)
    @Column(name = "id_modelo")
    private Long id;
    
    @Column(name = "nombre", length = 100, nullable = false)
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "id_marca", nullable = false)
    private Marca marca;
}