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
@Table(name = "subcategoria")
public class Subcategoria implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="subcategoria_sequence")
    @SequenceGenerator(name="subcategoria_sequence", sequenceName="subcategoria_sequence", allocationSize=1)
    @Column(name = "id_subcategoria")
    private Long id;
    
    @Column(name = "nombre", length = 100, nullable = false)
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "id_categoria", nullable = false)
    private Categoria categoria;
}