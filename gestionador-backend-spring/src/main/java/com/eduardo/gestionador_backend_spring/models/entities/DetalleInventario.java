package com.eduardo.gestionador_backend_spring.models.entities;

import java.io.Serializable;
import java.time.LocalDate;

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
@Table(name = "detalleinventario")
public class DetalleInventario implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="detalleinventario_sequence")
    @SequenceGenerator(name="detalleinventario_sequence", sequenceName="detalleinventario_sequence", allocationSize=1)
    @Column(name = "id_detalle_inventario")
    private Long id;
 
    @Column(name = "cantidad_disponible", nullable = false)
    private int cantidadDisponible;

    @Column(name = "punto_reorden", nullable = false)
    private int puntoReorden;

    @Column(name = "fecha_actualizacion", nullable = false)
    private LocalDate fechaActualizacion;

    @ManyToOne
    @JoinColumn(name = "id_producto", nullable = false)
    private Producto producto;
}