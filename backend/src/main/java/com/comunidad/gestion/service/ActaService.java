package com.comunidad.gestion.service;

import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.acta.ActaRequest;
import com.comunidad.gestion.dto.acta.ActaResponse;
import com.comunidad.gestion.entity.enums.EstadoActa;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;

public interface ActaService {

    ActaResponse crearActa(ActaRequest request);

    ActaResponse actualizarActa(Long id, ActaRequest request);

    ActaResponse obtenerPorId(Long id);

    ActaResponse obtenerPorAsambleaId(Long asambleaId);

    ActaResponse generarBorradorAutomatico(Long asambleaId);

    ActaResponse crearOActualizarActaDeAsamblea(Long asambleaId);

    ActaResponse aprobarActa(Long id);

    ActaResponse agregarAcuerdo(Long actaId, String descripcion);

    void eliminarAcuerdo(Long actaId, Long acuerdoId);

    com.comunidad.gestion.dto.acta.FirmaActaDto registrarFirmaComunero(Long actaId, String dni, String trazoFirma, String dispositivo, String ip);

    PagedResponse<ActaResponse> listarActas(String busqueda,
                                           EstadoActa estado,
                                           LocalDate fechaDesde,
                                           LocalDate fechaHasta,
                                           Pageable pageable);
}
