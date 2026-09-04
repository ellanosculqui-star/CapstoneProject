package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.auditoria.AuditoriaDto;
import com.comunidad.gestion.entity.Auditoria;
import com.comunidad.gestion.entity.Usuario;
import com.comunidad.gestion.entity.enums.TipoAccionAuditoria;
import com.comunidad.gestion.repository.AuditoriaRepository;
import com.comunidad.gestion.repository.UsuarioRepository;
import com.comunidad.gestion.service.AuditoriaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuditoriaServiceImpl implements AuditoriaService {

    private final AuditoriaRepository auditoriaRepository;
    private final UsuarioRepository usuarioRepository;

    @Override
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void registrarLog(String username,
                             TipoAccionAuditoria accion,
                             String modulo,
                             String registroAfectado,
                             String tablaAfectada,
                             Long registroId,
                             String detalleAnterior,
                             String detalleNuevo,
                             String ipAddress) {
        try {
            Usuario usuario = null;
            if (username != null && !username.equalsIgnoreCase("SISTEMA") && !username.equalsIgnoreCase("ANONIMO")) {
                usuario = usuarioRepository.findByUsername(username).orElse(null);
            }

            Auditoria auditoria = Auditoria.builder()
                    .usuario(usuario)
                    .username(username != null ? username : "SISTEMA")
                    .accion(accion)
                    .modulo(modulo)
                    .registroAfectado(registroAfectado)
                    .tablaAfectada(tablaAfectada)
                    .registroId(registroId)
                    .detalleAnterior(detalleAnterior)
                    .detalleNuevo(detalleNuevo)
                    .ipAddress(ipAddress != null ? ipAddress : "127.0.0.1")
                    .fechaHora(LocalDateTime.now())
                    .build();

            auditoriaRepository.save(auditoria);
        } catch (Exception ex) {
            log.error("Error al registrar auditoría: {}", ex.getMessage());
        }
    }

    @Override
    @Transactional(readOnly = true)
    public PagedResponse<AuditoriaDto> listarAuditoria(String busqueda,
                                                      String modulo,
                                                      TipoAccionAuditoria accion,
                                                      String username,
                                                      LocalDateTime fechaDesde,
                                                      LocalDateTime fechaHasta,
                                                      Pageable pageable) {
        Page<Auditoria> page = auditoriaRepository.findWithFilters(busqueda, modulo, accion, username, fechaDesde, fechaHasta, pageable);

        Page<AuditoriaDto> dtoPage = page.map(a -> AuditoriaDto.builder()
                .id(a.getId())
                .usuarioId(a.getUsuario() != null ? a.getUsuario().getId() : null)
                .username(a.getUsername())
                .accion(a.getAccion())
                .modulo(a.getModulo())
                .registroAfectado(a.getRegistroAfectado())
                .tablaAfectada(a.getTablaAfectada())
                .registroId(a.getRegistroId())
                .detalleAnterior(a.getDetalleAnterior())
                .detalleNuevo(a.getDetalleNuevo())
                .ipAddress(a.getIpAddress())
                .fechaHora(a.getFechaHora())
                .build());

        return PagedResponse.of(dtoPage);
    }
}
