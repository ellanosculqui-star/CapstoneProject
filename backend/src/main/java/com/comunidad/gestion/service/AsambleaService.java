package com.comunidad.gestion.service;

import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.asamblea.AsambleaDetailDto;
import com.comunidad.gestion.dto.asamblea.AsambleaRequest;
import com.comunidad.gestion.dto.asamblea.AsambleaResponse;
import com.comunidad.gestion.dto.asamblea.CambiarEstadoAsambleaRequest;
import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import com.comunidad.gestion.entity.enums.TipoAsamblea;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;

public interface AsambleaService {

    AsambleaResponse crearAsamblea(AsambleaRequest request);

    AsambleaResponse actualizarAsamblea(Long id, AsambleaRequest request);

    AsambleaResponse obtenerPorId(Long id);

    AsambleaDetailDto obtenerDetalleAsamblea(Long id);

    PagedResponse<AsambleaResponse> listarAsambleas(String busqueda,
                                                   TipoAsamblea tipo,
                                                   EstadoAsamblea estado,
                                                   LocalDate fechaDesde,
                                                   LocalDate fechaHasta,
                                                   Pageable pageable);

    AsambleaResponse cambiarEstado(Long id, CambiarEstadoAsambleaRequest request);

    void eliminarAsamblea(Long id);
}
