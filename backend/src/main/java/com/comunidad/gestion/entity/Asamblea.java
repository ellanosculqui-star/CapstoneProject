package com.comunidad.gestion.entity;

import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import com.comunidad.gestion.entity.enums.TipoAsamblea;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "asambleas", indexes = {
    @Index(name = "idx_asamblea_fecha_estado", columnList = "fecha, estado")
})
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Asamblea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String titulo;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String agenda;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private TipoAsamblea tipo;

    @Column(nullable = false)
    private LocalDate fecha;

    @Column(name = "hora_inicio", nullable = false)
    private LocalTime horaInicio;

    @Column(name = "hora_fin")
    private LocalTime horaFin;

    @Column(nullable = false, length = 150)
    private String lugar;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    @Builder.Default
    private EstadoAsamblea estado = EstadoAsamblea.PROGRAMADA;

    @Column(name = "quorum_minimo_pct", precision = 5, scale = 2, nullable = false)
    @Builder.Default
    private BigDecimal quorumMinimoPct = new BigDecimal("50.00");

    @Column(name = "total_habilitados_corte")
    private Integer totalHabilitadosCorte;

    @Column(name = "multas_generadas", nullable = false)
    @Builder.Default
    private Boolean multasGeneradas = false;

    @CreatedDate
    @Column(name = "fecha_creacion", updatable = false)
    private LocalDateTime fechaCreacion;

    @LastModifiedDate
    @Column(name = "fecha_modificacion")
    private LocalDateTime fechaModificacion;
}
