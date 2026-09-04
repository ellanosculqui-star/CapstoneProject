package com.comunidad.gestion.service;

import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.auditoria.AuditoriaDto;
import com.comunidad.gestion.entity.enums.TipoAccionAuditoria;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;

public interface AuditoriaService {

    void registrarLog(String username,
                      TipoAccionAuditoria accion,
                      String modulo,
                      String registroAfectado,
                      String tablaAfectada,
                      Long registroId,
                      String detalleAnterior,
                      String detalleNuevo,
                      String ipAddress);

    PagedResponse<AuditoriaDto> listarAuditoria(String busqueda,
                                               String modulo,
                                               TipoAccionAuditoria accion,
                                               String username,
                                               LocalDateTime fechaDesde,
                                               LocalDateTime fechaHasta,
                                               Pageable pageable);
}
