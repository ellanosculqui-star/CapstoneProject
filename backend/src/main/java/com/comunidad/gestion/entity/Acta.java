package com.comunidad.gestion.entity;

import com.comunidad.gestion.entity.enums.EstadoActa;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "actas", indexes = {
    @Index(name = "idx_acta_numero", columnList = "numero_acta", unique = true),
    @Index(name = "idx_acta_asamblea", columnList = "asamblea_id", unique = true)
})
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Acta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "asamblea_id", nullable = false, unique = true)
    private Asamblea asamblea;

    @Column(name = "numero_acta", nullable = false, unique = true, length = 50)
    private String numeroActa;

    @Column(nullable = false)
    private LocalDate fecha;

    @Column(nullable = false, length = 150)
    private String lugar;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String agenda;

    @Column(columnDefinition = "TEXT")
    private String resumen;

    @Column(name = "resultados_votaciones", columnDefinition = "TEXT")
    private String resultadosVotaciones;

    @Column(columnDefinition = "TEXT")
    private String observaciones;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    @Builder.Default
    private EstadoActa estado = EstadoActa.BORRADOR;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "responsable_usuario_id")
    private Usuario responsable;

    @OneToMany(mappedBy = "acta", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Acuerdo> acuerdos = new ArrayList<>();

    @CreatedDate
    @Column(name = "fecha_creacion", updatable = false)
    private LocalDateTime fechaCreacion;

    @LastModifiedDate
    @Column(name = "fecha_modificacion")
    private LocalDateTime fechaModificacion;
}
