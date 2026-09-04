package com.comunidad.gestion.service;

import com.comunidad.gestion.dto.acta.ActaResponse;
import com.comunidad.gestion.dto.asistencia.AsistenciaResponse;
import com.comunidad.gestion.dto.asistencia.QuorumResponse;
import com.comunidad.gestion.dto.comunero.ComuneroResponse;
import com.comunidad.gestion.dto.multa.MultaResponse;
import com.comunidad.gestion.dto.multa.PagoMultaResponse;
import com.comunidad.gestion.dto.reportes.ReporteFilterDto;

import java.util.List;

public interface ReporteService {
    List<ComuneroResponse> generarReportePadron(ReporteFilterDto filtro);
    List<AsistenciaResponse> generarReporteAsistencia(ReporteFilterDto filtro);
    QuorumResponse generarReporteQuorum(Long asambleaId);
    List<MultaResponse> generarReporteMultas(ReporteFilterDto filtro);
    List<PagoMultaResponse> generarReportePagos(ReporteFilterDto filtro);
    List<ActaResponse> generarReporteActas(ReporteFilterDto filtro);
}
