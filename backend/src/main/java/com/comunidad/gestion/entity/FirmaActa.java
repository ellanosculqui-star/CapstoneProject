package com.comunidad.gestion.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "firmas_actas",
    uniqueConstraints = {
        @UniqueConstraint(name = "uk_acta_comunero", columnNames = {"acta_id", "comunero_id"})
    },
    indexes = {
        @Index(name = "idx_firma_acta", columnList = "acta_id")
    }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FirmaActa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "acta_id", nullable = false)
    private Acta acta;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "comunero_id", nullable = false)
    private Comunero comunero;

    @Column(name = "fecha_hora_firma", nullable = false)
    @Builder.Default
    private LocalDateTime fechaHoraFirma = LocalDateTime.now();

    @Column(name = "trazo_firma", columnDefinition = "LONGTEXT")
    private String trazoFirma;

    @Column(name = "dispositivo", columnDefinition = "TEXT")
    private String dispositivo;

    @Column(name = "ip_address", length = 50)
    private String ipAddress;
}
