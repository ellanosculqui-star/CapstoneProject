package com.comunidad.gestion.entity;

import com.comunidad.gestion.entity.enums.EstadoAcuerdo;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "acuerdos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Acuerdo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "acta_id", nullable = false)
    private Acta acta;

    @Column(nullable = false)
    private Integer numero;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String descripcion;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    @Builder.Default
    private EstadoAcuerdo estado = EstadoAcuerdo.PENDIENTE;
}
