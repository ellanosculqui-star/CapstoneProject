package com.comunidad.gestion.entity;

import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoCivil;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import com.comunidad.gestion.entity.enums.TipoComunero;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "comuneros", indexes = {
    @Index(name = "idx_comunero_dni", columnList = "dni", unique = true),
    @Index(name = "idx_comunero_codigo", columnList = "codigo_comunero", unique = true),
    @Index(name = "idx_comunero_padron", columnList = "numero_padron"),
    @Index(name = "idx_comunero_estado_condicion", columnList = "estado, condicion_habilitacion")
})
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Comunero {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "codigo_comunero", nullable = false, unique = true, length = 30)
    private String codigoComunero;

    @Column(name = "numero_padron", length = 30)
    private String numeroPadron;

    @Column(nullable = false, unique = true, length = 8)
    private String dni;

    @Column(nullable = false, length = 100)
    private String nombres;

    @Column(nullable = false, length = 100)
    private String apellidos;

    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    @Enumerated(EnumType.STRING)
    @Column(name = "estado_civil", length = 20)
    @Builder.Default
    private EstadoCivil estadoCivil = EstadoCivil.SOLTERO;

    @Column(length = 100)
    private String ocupacion;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_comunero", length = 20)
    @Builder.Default
    private TipoComunero tipoComunero = TipoComunero.CALIFICADO;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "sector_id", nullable = false)
    private Sector sector;

    @Column(length = 100)
    private String caserio;

    @Column(name = "fecha_incorporacion", nullable = false)
    private LocalDate fechaIncorporacion;

    @Column(length = 20)
    private String telefono;

    @Column(length = 255)
    private String direccion;

    @Lob
    @Column(name = "foto_url", columnDefinition = "LONGTEXT")
    private String fotoUrl;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    @Builder.Default
    private EstadoComunero estado = EstadoComunero.ACTIVO;

    @Enumerated(EnumType.STRING)
    @Column(name = "condicion_habilitacion", nullable = false, length = 20)
    @Builder.Default
    private CondicionHabilitacion condicionHabilitacion = CondicionHabilitacion.HABILITADO;

    @Column(name = "motivo_inhabilitacion", length = 255)
    private String motivoInhabilitacion;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", unique = true)
    private Usuario usuario;

    @CreatedDate
    @Column(name = "fecha_registro", updatable = false)
    private LocalDateTime fechaRegistro;

    @LastModifiedDate
    @Column(name = "fecha_modificacion")
    private LocalDateTime fechaModificacion;
}
