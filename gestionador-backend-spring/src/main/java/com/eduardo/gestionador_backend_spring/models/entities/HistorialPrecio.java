package com.eduardo.gestionador_backend_spring.models.entities;

import java.io.Serializable;
import java.math.BigDecimal;

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
@Table(name = "historialprecio")
public class HistorialPrecio implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="historialprecio_sequence")
    @SequenceGenerator(name="historialprecio_sequence", sequenceName="historialprecio_sequence", allocationSize=1)
    @Column(name = "id_historial_precio")
    private Long id;
    
    @Column(name ="costo", precision = 10, scale = 2, nullable = false)
    private BigDecimal costo;

    @Column(name ="precio_venta", precision = 10, scale = 2, nullable = false)
    private BigDecimal precioVenta;

    @ManyToOne
    @JoinColumn(name = "id_producto", nullable = false)
    private Producto producto;
}