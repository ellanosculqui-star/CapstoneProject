package com.comunidad.gestion.dto.prediccion;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PrediccionQuorumDto {
    private Long asambleaId;
    private String asambleaTitulo;
    private String fecha;
    private Integer totalHabilitados;
    private Integer asistenciaEstimada;
    private BigDecimal porcentajeEstimado;
    private BigDecimal quorumRequeridoPct;
    private Integer quorumRequeridoVotos;
    private BigDecimal probabilidadQuorumPct;
    private String nivelRiesgo; // "BAJO", "MEDIO", "ALTO"
    private String mensajeRecomendacion;
    private String versionModelo;
    private List<String> factoresAnalisis;
}
