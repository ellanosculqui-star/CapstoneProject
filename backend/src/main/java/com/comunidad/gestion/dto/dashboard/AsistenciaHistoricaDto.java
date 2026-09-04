package com.comunidad.gestion.dto.dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AsistenciaHistoricaDto {
    private Long asambleaId;
    private String asambleaTitulo;
    private LocalDate fecha;
    private Long asistentes;
    private Long ausentes;
    private Integer habilitados;
    private BigDecimal porcentajeAsistencia;
    private Boolean quorumAlcanzado;
}
