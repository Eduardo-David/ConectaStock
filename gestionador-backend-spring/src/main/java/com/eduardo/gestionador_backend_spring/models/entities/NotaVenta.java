package com.eduardo.gestionador_backend_spring.models.entities;

import java.io.Serializable;
import java.math.BigDecimal;

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
@Table(name = "notaventa")
public class NotaVenta implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="notaventa_sequence")
    @SequenceGenerator(name="notaventa_sequence", sequenceName="notaventa_sequence", allocationSize=1)
    @Column(name = "id_venta")
    private Long id;
    
    @Column(name = "monto_total", precision = 10, scale = 2, nullable = false)
    private BigDecimal montoTotal;
}