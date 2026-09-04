package com.comunidad.gestion.entity;

import com.comunidad.gestion.entity.enums.TipoAccionAuditoria;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "auditoria", indexes = {
    @Index(name = "idx_auditoria_fecha_modulo", columnList = "fecha_hora, modulo"),
    @Index(name = "idx_auditoria_username", columnList = "username")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Auditoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @Column(nullable = false, length = 50)
    private String username;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 50)
    private TipoAccionAuditoria accion;

    @Column(nullable = false, length = 50)
    private String modulo;

    @Column(name = "registro_afectado", length = 200)
    private String registroAfectado;

    @Column(name = "tabla_afectada", length = 50)
    private String tablaAfectada;

    @Column(name = "registro_id")
    private Long registroId;

    @Column(name = "detalle_anterior", columnDefinition = "TEXT")
    private String detalleAnterior;

    @Column(name = "detalle_nuevo", columnDefinition = "TEXT")
    private String detalleNuevo;

    @Column(name = "ip_address", length = 45)
    private String ipAddress;

    @Column(name = "fecha_hora", nullable = false)
    @Builder.Default
    private LocalDateTime fechaHora = LocalDateTime.now();
}
