package com.eduardo.gestionador_backend_spring.models.entities;

import java.io.Serializable;
import java.math.BigDecimal;
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
@Table(name = "detalleventa")
public class DetalleVenta implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="detalleventa_sequence")
    @SequenceGenerator(name="detalleventa_sequence", sequenceName="detalleventa_sequence", allocationSize=1)
    @Column(name = "id_detalle_venta")
    private Long id;
    
    private int cantidad;

    @Column(name ="subtotal", precision = 10, scale = 2, nullable = false)
    private BigDecimal subtotal;

    @Column(name ="fecha", nullable = false)
    private LocalDate fecha; 

    @ManyToOne
    @JoinColumn(name = "id_venta", nullable = false)
    private NotaVenta notaVenta;

    @ManyToOne
    @JoinColumn(name = "id_producto", nullable = false)
    private Producto producto;
}