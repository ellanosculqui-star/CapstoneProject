package com.comunidad.gestion.dto.asamblea;

import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import com.comunidad.gestion.entity.enums.TipoAsamblea;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AsambleaResponse {
    private Long id;
    private String titulo;
    private String agenda;
    private TipoAsamblea tipo;
    private LocalDate fecha;
    private LocalTime horaInicio;
    private LocalTime horaFin;
    private String lugar;
    private EstadoAsamblea estado;
    private BigDecimal quorumMinimoPct;
    private Integer totalHabilitadosCorte;
    private Boolean multasGeneradas;
    private Long totalAsistentes;
    private Long totalAusentes;
    private BigDecimal porcentajeAsistencia;
    private Boolean quorumAlcanzado;
    private LocalDateTime fechaCreacion;
}
