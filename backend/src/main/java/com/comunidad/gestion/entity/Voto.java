package com.comunidad.gestion.entity;

import com.comunidad.gestion.entity.enums.OpcionVoto;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "votos",
    uniqueConstraints = {
        @UniqueConstraint(name = "uk_voto_votacion_comunero", columnNames = {"votacion_id", "comunero_id"})
    },
    indexes = {
        @Index(name = "idx_voto_votacion_opcion", columnList = "votacion_id, opcion")
    }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Voto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "votacion_id", nullable = false)
    private Votacion votacion;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "comunero_id", nullable = false)
    private Comunero comunero;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private OpcionVoto opcion;

    @Column(name = "candidato_elegido", length = 150)
    private String candidatoElegido;

    @Column(name = "fecha_hora", nullable = false)
    @Builder.Default
    private LocalDateTime fechaHora = LocalDateTime.now();
}
