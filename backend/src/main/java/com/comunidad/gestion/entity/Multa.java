package com.comunidad.gestion.entity;

import com.comunidad.gestion.entity.enums.EstadoMulta;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "multas", indexes = {
    @Index(name = "idx_multa_comunero_estado", columnList = "comunero_id, estado"),
    @Index(name = "idx_multa_asamblea", columnList = "asamblea_id")
})
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Multa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "comunero_id", nullable = false)
    private Comunero comunero;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "asamblea_id")
    private Asamblea asamblea;

    @Column(nullable = false, length = 150)
    private String concepto;

    @Column(name = "monto_original", nullable = false, precision = 10, scale = 2)
    private BigDecimal montoOriginal;

    @Column(name = "saldo_pendiente", nullable = false, precision = 10, scale = 2)
    private BigDecimal saldoPendiente;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    @Builder.Default
    private EstadoMulta estado = EstadoMulta.PENDIENTE;

    @Column(name = "fecha_emision", nullable = false)
    @Builder.Default
    private LocalDate fechaEmision = LocalDate.now();

    @OneToMany(mappedBy = "multa", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<PagoMulta> pagos = new ArrayList<>();

    @CreatedDate
    @Column(name = "fecha_registro", updatable = false)
    private LocalDateTime fechaRegistro;
}
