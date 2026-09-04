package com.comunidad.gestion.dto.votacion;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResultadoVotacionDto {
    private Long votosAFavor;
    private Long votosEnContra;
    private Long votosAbstencion;
    private Long totalVotosEmitidos;
    private BigDecimal porcentajeAFavor;
    private BigDecimal porcentajeEnContra;
    private BigDecimal porcentajeAbstencion;
    private String resultadoDecision; // "APROBADA", "RECHAZADA", "EMPATE"
}
