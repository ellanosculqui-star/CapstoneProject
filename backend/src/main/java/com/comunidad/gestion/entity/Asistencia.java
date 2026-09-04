package com.comunidad.gestion.entity;

import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "asistencias",
    uniqueConstraints = {
        @UniqueConstraint(name = "uk_asistencia_asamblea_comunero", columnNames = {"asamblea_id", "comunero_id"})
    },
    indexes = {
        @Index(name = "idx_asistencia_asamblea_estado", columnList = "asamblea_id, estado")
    }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Asistencia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "asamblea_id", nullable = false)
    private Asamblea asamblea;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "comunero_id", nullable = false)
    private Comunero comunero;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private EstadoAsistencia estado;

    @Column(name = "fecha_hora_registro", nullable = false)
    @Builder.Default
    private LocalDateTime fechaHoraRegistro = LocalDateTime.now();

    @Column(length = 255)
    private String observacion;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "registrado_por_usuario_id")
    private Usuario registradoPor;
}
