package com.comunidad.gestion.dto.reportes;

import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import com.comunidad.gestion.entity.enums.EstadoMulta;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReporteFilterDto {
    private String tipoReporte; // PADRON, ASISTENCIAS, QUORUM, MULTAS, RECAUDACION, ACTAS
    private LocalDate fechaDesde;
    private LocalDate fechaHasta;
    private Long asambleaId;
    private Long sectorId;
    private Long comuneroId;
    private EstadoComunero estadoComunero;
    private CondicionHabilitacion condicionHabilitacion;
    private EstadoAsamblea estadoAsamblea;
    private EstadoMulta estadoMulta;
}
