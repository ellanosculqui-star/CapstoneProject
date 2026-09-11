package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.common.exception.ResourceNotFoundException;
import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.asamblea.AsambleaDetailDto;
import com.comunidad.gestion.dto.asamblea.AsambleaRequest;
import com.comunidad.gestion.dto.asamblea.AsambleaResponse;
import com.comunidad.gestion.dto.asamblea.CambiarEstadoAsambleaRequest;
import com.comunidad.gestion.dto.asistencia.QuorumResponse;
import com.comunidad.gestion.dto.votacion.VotacionResponse;
import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.enums.*;
import com.comunidad.gestion.mapper.AsambleaMapper;
import com.comunidad.gestion.repository.*;
import com.comunidad.gestion.service.ActaService;
import com.comunidad.gestion.service.AsambleaService;
import com.comunidad.gestion.service.AsistenciaService;
import com.comunidad.gestion.service.AuditoriaService;
import com.comunidad.gestion.service.QuorumService;
import com.comunidad.gestion.service.VotacionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AsambleaServiceImpl implements AsambleaService {

    private final AsambleaRepository asambleaRepository;
    private final AsistenciaRepository asistenciaRepository;
    private final ComuneroRepository comuneroRepository;
    private final ActaRepository actaRepository;
    private final AsambleaMapper asambleaMapper;
    private final QuorumService quorumService;
    private final AsistenciaService asistenciaService;
    private final AuditoriaService auditoriaService;
    private final VotacionService votacionService;
    private final ActaService actaService;

    @Override
    @Transactional
    public AsambleaResponse crearAsamblea(AsambleaRequest request) {
        if (request.getFecha() != null && request.getFecha().isBefore(LocalDate.now())) {
            throw new BadRequestException("No se puede programar una asamblea para una fecha anterior a la actual (" + LocalDate.now() + ").");
        }

        Asamblea asamblea = asambleaMapper.toEntity(request);
        Asamblea guardada = asambleaRepository.save(asamblea);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.CREAR_ASAMBLEA,
                "ASAMBLEAS",
                "Convocatoria de asamblea: " + guardada.getTitulo() + " para fecha " + guardada.getFecha(),
                "asambleas",
                guardada.getId(),
                null,
                "Asamblea programada",
                "127.0.0.1"
        );

        // Regla: Toda asamblea debe tener un acta asociada automáticamente
        try {
            actaService.crearOActualizarActaDeAsamblea(guardada.getId());
        } catch (Exception ignored) {
            // Se sincroniza o genera posteriormente si los datos se actualizan
        }

        return obtenerPorId(guardada.getId());
    }

    @Override
    @Transactional
    public AsambleaResponse actualizarAsamblea(Long id, AsambleaRequest request) {
        if (request.getFecha() != null && request.getFecha().isBefore(LocalDate.now())) {
            throw new BadRequestException("No se puede reprogramar una asamblea para una fecha anterior a la actual (" + LocalDate.now() + ").");
        }

        Asamblea asamblea = asambleaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", id));

        if (asamblea.getEstado() == EstadoAsamblea.FINALIZADA || asamblea.getEstado() == EstadoAsamblea.CANCELADA) {
            throw new BadRequestException("No se puede editar una asamblea en estado " + asamblea.getEstado());
        }

        asambleaMapper.updateEntity(asamblea, request);
        Asamblea actualizada = asambleaRepository.save(asamblea);

        // Actualizar datos del acta asociada
        try {
            actaService.crearOActualizarActaDeAsamblea(actualizada.getId());
        } catch (Exception ignored) {
        }

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.EDITAR_ASAMBLEA,
                "ASAMBLEAS",
                "Actualización de asamblea: " + actualizada.getTitulo(),
                "asambleas",
                actualizada.getId(),
                null,
                "Datos actualizados",
                "127.0.0.1"
        );

        return obtenerPorId(actualizada.getId());
    }

    @Override
    @Transactional(readOnly = true)
    public AsambleaResponse obtenerPorId(Long id) {
        Asamblea asamblea = asambleaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", id));

        long asistentes = asistenciaRepository.countByAsambleaIdAndEstado(id, EstadoAsistencia.PRESENTE);
        long ausentes = asistenciaRepository.countByAsambleaIdAndEstado(id, EstadoAsistencia.AUSENTE);
        int totalHabilitados = (int) comuneroRepository.countByCondicionHabilitacionAndEstado(
                CondicionHabilitacion.HABILITADO, EstadoComunero.ACTIVO
        );

        return asambleaMapper.toResponse(asamblea, asistentes, ausentes, totalHabilitados);
    }

    @Override
    @Transactional(readOnly = true)
    public AsambleaDetailDto obtenerDetalleAsamblea(Long id) {
        AsambleaResponse asamblea = obtenerPorId(id);
        QuorumResponse quorum = quorumService.calcularQuorum(id);
        List<VotacionResponse> votaciones = votacionService.listarPorAsamblea(id);
        var optActa = actaRepository.findByAsambleaId(id);

        return AsambleaDetailDto.builder()
                .asamblea(asamblea)
                .quorum(quorum)
                .votaciones(votaciones)
                .tieneActa(optActa.isPresent())
                .actaId(optActa.map(a -> a.getId()).orElse(null))
                .build();
    }

    @Override
    @Transactional(readOnly = true)
    public PagedResponse<AsambleaResponse> listarAsambleas(String busqueda,
                                                          TipoAsamblea tipo,
                                                          EstadoAsamblea estado,
                                                          LocalDate fechaDesde,
                                                          LocalDate fechaHasta,
                                                          Pageable pageable) {
        Page<Asamblea> page = asambleaRepository.findWithFilters(busqueda, tipo, estado, fechaDesde, fechaHasta, pageable);
        int totalHabilitados = (int) comuneroRepository.countByCondicionHabilitacionAndEstado(
                CondicionHabilitacion.HABILITADO, EstadoComunero.ACTIVO
        );

        Page<AsambleaResponse> responsePage = page.map(a -> {
            long asistentes = asistenciaRepository.countByAsambleaIdAndEstado(a.getId(), EstadoAsistencia.PRESENTE);
            long ausentes = asistenciaRepository.countByAsambleaIdAndEstado(a.getId(), EstadoAsistencia.AUSENTE);
            return asambleaMapper.toResponse(a, asistentes, ausentes, totalHabilitados);
        });

        return PagedResponse.of(responsePage);
    }

    @Override
    @Transactional
    public AsambleaResponse cambiarEstado(Long id, CambiarEstadoAsambleaRequest request) {
        Asamblea asamblea = asambleaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", id));

        EstadoAsamblea estadoAnterior = asamblea.getEstado();
        EstadoAsamblea nuevoEstado = request.getEstado();

        // Validations on state transitions
        if (estadoAnterior == EstadoAsamblea.FINALIZADA || estadoAnterior == EstadoAsamblea.CANCELADA) {
            throw new BadRequestException("No se puede cambiar el estado de una asamblea ya " + estadoAnterior);
        }

        if (nuevoEstado == EstadoAsamblea.EN_CURSO) {
            int habilitados = (int) comuneroRepository.countByCondicionHabilitacionAndEstado(
                    CondicionHabilitacion.HABILITADO, EstadoComunero.ACTIVO
            );
            asamblea.setTotalHabilitadosCorte(habilitados);
            if (asamblea.getHoraInicio() == null) {
                asamblea.setHoraInicio(LocalTime.now());
            }
            // Regla comunal: Aperturar de inmediato el Acta oficial con datos preestablecidos
            try {
                actaService.crearOActualizarActaDeAsamblea(id);
            } catch (Exception ignored) {
            }
        } else if (nuevoEstado == EstadoAsamblea.FINALIZADA) {
            if (asamblea.getHoraFin() == null) {
                asamblea.setHoraFin(LocalTime.now());
            }
            // Regla comunal: Quienes no hayan marcado asistencia al finalizar la asamblea quedan AUSENTES por defecto
            asistenciaService.marcarAusentesRestantes(id);
            // Regla: Integrar todo lo desarrollado en la asamblea (asistencia, quorum, votaciones y acuerdos) en el Acta
            try {
                actaService.crearOActualizarActaDeAsamblea(id);
            } catch (Exception ignored) {
            }
        }

        asamblea.setEstado(nuevoEstado);
        Asamblea actualizada = asambleaRepository.save(asamblea);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.CAMBIAR_ESTADO_ASAMBLEA,
                "ASAMBLEAS",
                "Cambio de estado a " + nuevoEstado + " para asamblea #" + id + " (" + asamblea.getTitulo() + ")",
                "asambleas",
                asamblea.getId(),
                "estado: " + estadoAnterior,
                "estado: " + nuevoEstado,
                "127.0.0.1"
        );

        return obtenerPorId(actualizada.getId());
    }

    @Override
    @Transactional
    public void eliminarAsamblea(Long id) {
        Asamblea asamblea = asambleaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", id));

        if (asamblea.getEstado() == EstadoAsamblea.EN_CURSO || asamblea.getEstado() == EstadoAsamblea.FINALIZADA) {
            throw new BadRequestException("No se puede eliminar una asamblea que esté en curso o finalizada");
        }

        asambleaRepository.delete(asamblea);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.CAMBIAR_ESTADO_ASAMBLEA,
                "ASAMBLEAS",
                "Eliminación de asamblea programada #" + id + ": " + asamblea.getTitulo(),
                "asambleas",
                id,
                null,
                "Asamblea eliminada",
                "127.0.0.1"
        );
    }

    private String getCurrentUsername() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated() && !"anonymousUser".equals(auth.getName())) {
            return auth.getName();
        }
        return "SISTEMA";
    }
}
