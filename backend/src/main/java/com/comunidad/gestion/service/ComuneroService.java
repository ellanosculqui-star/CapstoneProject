package com.comunidad.gestion.service;

import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.comunero.CambiarCondicionRequest;
import com.comunidad.gestion.dto.comunero.ComuneroRequest;
import com.comunidad.gestion.dto.comunero.ComuneroResponse;
import com.comunidad.gestion.dto.comunero.ComuneroSummaryDto;
import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ComuneroService {

    ComuneroResponse crearComunero(ComuneroRequest request);

    ComuneroResponse actualizarComunero(Long id, ComuneroRequest request);

    ComuneroResponse obtenerPorId(Long id);

    ComuneroResponse obtenerPorDni(String dni);

    ComuneroResponse obtenerPerfilComuneroActual();

    PagedResponse<ComuneroResponse> listarComuneros(String busqueda,
                                                   Long sectorId,
                                                   EstadoComunero estado,
                                                   CondicionHabilitacion condicion,
                                                   Pageable pageable);

    List<ComuneroSummaryDto> listarHabilitados();

    ComuneroResponse cambiarCondicion(Long id, CambiarCondicionRequest request);

    ComuneroResponse cambiarEstado(Long id, EstadoComunero nuevoEstado);
}
