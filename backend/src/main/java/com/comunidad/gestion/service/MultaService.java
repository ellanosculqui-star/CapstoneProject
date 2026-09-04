package com.comunidad.gestion.service;

import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.multa.*;
import com.comunidad.gestion.entity.enums.EstadoMulta;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.List;

public interface MultaService {

    ConfigMultaResponse configurarMontoMulta(ConfigMultaRequest request);

    ConfigMultaResponse obtenerConfiguracionActual();

    List<MultaResponse> generarMultasPorInasistencia(Long asambleaId);

    PagoMultaResponse registrarPago(Long multaId, RegistrarPagoRequest request);

    MultaResponse obtenerPorId(Long id);

    PagedResponse<MultaResponse> listarMultas(String busqueda,
                                             Long comuneroId,
                                             Long asambleaId,
                                             EstadoMulta estado,
                                             LocalDate fechaDesde,
                                             LocalDate fechaHasta,
                                             Pageable pageable);

    EstadoCuentaComuneroDto obtenerEstadoCuentaComunero(Long comuneroId);

    ResumenFinancieroDto obtenerResumenFinanciero();

    PagedResponse<PagoMultaResponse> listarPagos(LocalDate fechaDesde, LocalDate fechaHasta, Pageable pageable);
}
