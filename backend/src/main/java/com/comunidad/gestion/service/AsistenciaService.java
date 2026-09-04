package com.comunidad.gestion.service;

import com.comunidad.gestion.dto.asistencia.AsistenciaPadronDto;
import com.comunidad.gestion.dto.asistencia.AsistenciaResponse;
import com.comunidad.gestion.dto.asistencia.RegistrarAsistenciaRequest;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;

import java.util.List;

public interface AsistenciaService {

    List<AsistenciaPadronDto> obtenerPadronAsamblea(Long asambleaId);

    AsistenciaResponse registrarAsistencia(Long asambleaId, RegistrarAsistenciaRequest request);

    AsistenciaResponse marcarAsistenciaRapida(Long asambleaId, String dniOrCodigo, EstadoAsistencia estado);

    List<AsistenciaResponse> listarAsistenciasPorAsamblea(Long asambleaId);
}
