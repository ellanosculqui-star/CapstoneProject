package com.comunidad.gestion.entity;

import com.comunidad.gestion.entity.enums.MetodoPago;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "pagos_multas", indexes = {
    @Index(name = "idx_pago_multa_recibo", columnList = "numero_recibo", unique = true),
    @Index(name = "idx_pago_multa_multa_id", columnList = "multa_id")
})
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PagoMulta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "multa_id", nullable = false)
    private Multa multa;

    @Column(name = "monto_pagado", nullable = false, precision = 10, scale = 2)
    private BigDecimal montoPagado;

    @Column(name = "fecha_pago", nullable = false)
    @Builder.Default
    private LocalDate fechaPago = LocalDate.now();

    @Column(name = "numero_recibo", nullable = false, unique = true, length = 50)
    private String numeroRecibo;

    @Enumerated(EnumType.STRING)
    @Column(name = "metodo_pago", nullable = false, length = 30)
    @Builder.Default
    private MetodoPago metodoPago = MetodoPago.EFECTIVO;

    @Column(length = 255)
    private String observacion;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "registrado_por_usuario_id")
    private Usuario registradoPor;

    @CreatedDate
    @Column(name = "fecha_registro", updatable = false)
    private LocalDateTime fechaRegistro;
}
