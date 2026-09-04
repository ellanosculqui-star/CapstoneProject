package com.comunidad.gestion.dto.asistencia;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QuorumResponse {
    private Long asambleaId;
    private String asambleaTitulo;
    private Integer totalHabilitados;
    private Long asistentes;
    private Long ausentes;
    private Long justificados;
    private BigDecimal porcentajeAsistencia;
    private BigDecimal quorumRequeridoPct;
    private Boolean quorumAlcanzado;
    private String estadoMensaje; // "QUÓRUM ALCANZADO" or "QUÓRUM NO ALCANZADO"
}
