package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.common.exception.ResourceNotFoundException;
import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.comunero.CambiarCondicionRequest;
import com.comunidad.gestion.dto.comunero.ComuneroRequest;
import com.comunidad.gestion.dto.comunero.ComuneroResponse;
import com.comunidad.gestion.dto.comunero.ComuneroSummaryDto;
import com.comunidad.gestion.entity.Comunero;
import com.comunidad.gestion.entity.Sector;
import com.comunidad.gestion.entity.Usuario;
import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import com.comunidad.gestion.entity.enums.TipoAccionAuditoria;
import com.comunidad.gestion.mapper.ComuneroMapper;
import com.comunidad.gestion.repository.*;
import com.comunidad.gestion.service.AuditoriaService;
import com.comunidad.gestion.service.ComuneroService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ComuneroServiceImpl implements ComuneroService {

    private final ComuneroRepository comuneroRepository;
    private final SectorRepository sectorRepository;
    private final UsuarioRepository usuarioRepository;
    private final MultaRepository multaRepository;
    private final AsistenciaRepository asistenciaRepository;
    private final ComuneroMapper comuneroMapper;
    private final AuditoriaService auditoriaService;

    @Override
    @Transactional
    public ComuneroResponse crearComunero(ComuneroRequest request) {
        String dni = request.getDni().trim();
        String codigo = request.getCodigoComunero().trim();

        if (comuneroRepository.existsByDni(dni)) {
            throw new BadRequestException("Ya existe un comunero registrado con el DNI " + dni);
        }
        if (comuneroRepository.existsByCodigoComunero(codigo)) {
            throw new BadRequestException("Ya existe un comunero con el código " + codigo);
        }

        Long sectorId = request.getSectorId() != null ? request.getSectorId() : 1L;
        Sector sector = sectorRepository.findById(sectorId)
                .orElseGet(() -> sectorRepository.findAll().stream().findFirst().orElse(null));

        if (request.getFechaIncorporacion() == null) {
            request.setFechaIncorporacion(LocalDate.now());
        }

        Comunero comunero = comuneroMapper.toEntity(request, sector);
        Comunero guardado = comuneroRepository.save(comunero);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.CREAR_COMUNERO,
                "PADRON",
                "Registro de comunero " + guardado.getApellidos() + ", " + guardado.getNombres() + " (DNI: " + dni + ")",
                "comuneros",
                guardado.getId(),
                null,
                "Comunero registrado",
                "127.0.0.1"
        );

        return comuneroMapper.toResponse(guardado, BigDecimal.ZERO, 0L, 0L);
    }

    @Override
    @Transactional
    public ComuneroResponse actualizarComunero(Long id, ComuneroRequest request) {
        Comunero comunero = comuneroRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Comunero", "id", id));

        String dni = request.getDni().trim();
        String codigo = request.getCodigoComunero().trim();

        if (!comunero.getDni().equals(dni) && comuneroRepository.existsByDni(dni)) {
            throw new BadRequestException("Ya existe otro comunero registrado con el DNI " + dni);
        }
        if (!comunero.getCodigoComunero().equals(codigo) && comuneroRepository.existsByCodigoComunero(codigo)) {
            throw new BadRequestException("Ya existe otro comunero registrado con el código " + codigo);
        }

        Sector sector = null;
        if (request.getSectorId() != null) {
            sector = sectorRepository.findById(request.getSectorId()).orElse(comunero.getSector());
        } else {
            sector = comunero.getSector();
        }

        comuneroMapper.updateEntity(comunero, request, sector);
        Comunero actualizado = comuneroRepository.save(comunero);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.EDITAR_COMUNERO,
                "PADRON",
                "Actualización de datos del comunero " + actualizado.getApellidos() + ", " + actualizado.getNombres(),
                "comuneros",
                actualizado.getId(),
                null,
                "Datos actualizados",
                "127.0.0.1"
        );

        return obtenerPorId(actualizado.getId());
    }

    @Override
    @Transactional(readOnly = true)
    public ComuneroResponse obtenerPorId(Long id) {
        Comunero comunero = comuneroRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Comunero", "id", id));

        BigDecimal deuda = multaRepository.sumSaldoPendienteByComuneroId(id);
        long asistencias = asistenciaRepository.findByComuneroIdOrderByFechaHoraRegistroDesc(id).stream()
                .filter(a -> a.getEstado() == EstadoAsistencia.PRESENTE).count();
        long inasistencias = asistenciaRepository.findByComuneroIdOrderByFechaHoraRegistroDesc(id).stream()
                .filter(a -> a.getEstado() == EstadoAsistencia.AUSENTE).count();

        return comuneroMapper.toResponse(comunero, deuda, asistencias, inasistencias);
    }

    @Override
    @Transactional(readOnly = true)
    public ComuneroResponse obtenerPorDni(String dni) {
        Comunero comunero = comuneroRepository.findByDni(dni.trim())
                .orElseThrow(() -> new ResourceNotFoundException("Comunero", "DNI", dni));
        return obtenerPorId(comunero.getId());
    }

    @Override
    @Transactional(readOnly = true)
    public ComuneroResponse obtenerPerfilComuneroActual() {
        String username = getCurrentUsername();
        Usuario usuario = usuarioRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));

        Comunero comunero = comuneroRepository.findByUsuarioId(usuario.getId())
                .orElseThrow(() -> new ResourceNotFoundException("No existe perfil de comunero vinculado al usuario actual"));

        return obtenerPorId(comunero.getId());
    }

    @Override
    @Transactional(readOnly = true)
    public PagedResponse<ComuneroResponse> listarComuneros(String busqueda,
                                                          Long sectorId,
                                                          EstadoComunero estado,
                                                          CondicionHabilitacion condicion,
                                                          Pageable pageable) {
        Page<Comunero> page = comuneroRepository.findWithFilters(busqueda, sectorId, estado, condicion, pageable);

        Page<ComuneroResponse> responsePage = page.map(c -> {
            BigDecimal deuda = multaRepository.sumSaldoPendienteByComuneroId(c.getId());
            return comuneroMapper.toResponse(c, deuda, null, null);
        });

        return PagedResponse.of(responsePage);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ComuneroSummaryDto> listarHabilitados() {
        return comuneroRepository.findAllHabilitados().stream()
                .map(comuneroMapper::toSummaryDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public ComuneroResponse cambiarCondicion(Long id, CambiarCondicionRequest request) {
        Comunero comunero = comuneroRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Comunero", "id", id));

        CondicionHabilitacion anterior = comunero.getCondicionHabilitacion();
        comunero.setCondicionHabilitacion(request.getCondicion());
        comunero.setMotivoInhabilitacion(request.getMotivo());
        Comunero actualizado = comuneroRepository.save(comunero);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.CAMBIAR_CONDICION_COMUNERO,
                "PADRON",
                "Cambio de condición a " + request.getCondicion() + " para comunero " + comunero.getCodigoComunero(),
                "comuneros",
                comunero.getId(),
                "condicion: " + anterior,
                "condicion: " + request.getCondicion() + " | Motivo: " + request.getMotivo(),
                "127.0.0.1"
        );

        return obtenerPorId(actualizado.getId());
    }

    @Override
    @Transactional
    public ComuneroResponse cambiarEstado(Long id, EstadoComunero nuevoEstado) {
        Comunero comunero = comuneroRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Comunero", "id", id));

        EstadoComunero anterior = comunero.getEstado();
        comunero.setEstado(nuevoEstado);
        Comunero actualizado = comuneroRepository.save(comunero);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.CAMBIAR_ESTADO_COMUNERO,
                "PADRON",
                "Cambio de estado a " + nuevoEstado + " para comunero " + comunero.getCodigoComunero(),
                "comuneros",
                comunero.getId(),
                "estado: " + anterior,
                "estado: " + nuevoEstado,
                "127.0.0.1"
        );

        return obtenerPorId(actualizado.getId());
    }

    private String getCurrentUsername() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated() && !"anonymousUser".equals(auth.getName())) {
            return auth.getName();
        }
        return "SISTEMA";
    }
}
