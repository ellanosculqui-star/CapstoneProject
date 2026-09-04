package com.comunidad.gestion.dto.dashboard;

import com.comunidad.gestion.dto.alerta.AlertaDto;
import com.comunidad.gestion.dto.asamblea.AsambleaResponse;
import com.comunidad.gestion.dto.asistencia.QuorumResponse;
import com.comunidad.gestion.dto.prediccion.PrediccionQuorumDto;
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
public class DashboardStatsDto {
    private Long totalComuneros;
    private Long comunerosHabilitados;
    private Long comunerosInhabilitados;
    private Long comunerosInactivos;
    private Long totalAsambleas;
    private Long asambleasFinalizadas;
    private Long asambleasProgramadas;
    private AsambleaResponse proximaAsamblea;
    private AsambleaResponse ultimaAsamblea;
    private QuorumResponse quorumUltimaAsamblea;
    private BigDecimal totalMultasPendientes;
    private BigDecimal totalMultasRecaudadas;
    private Long cantidadMultasPendientes;
    private Long totalActasRegistradas;
    private List<AsistenciaHistoricaDto> historialAsistencias;
    private PrediccionQuorumDto prediccionProxima;
    private List<AlertaDto> alertas;
}
