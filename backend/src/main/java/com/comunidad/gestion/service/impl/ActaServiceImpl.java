package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.common.exception.ResourceNotFoundException;
import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.acta.ActaRequest;
import com.comunidad.gestion.dto.acta.ActaResponse;
import com.comunidad.gestion.dto.acta.AcuerdoDto;
import com.comunidad.gestion.dto.asistencia.QuorumResponse;
import com.comunidad.gestion.dto.votacion.VotacionResponse;
import com.comunidad.gestion.entity.Acta;
import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.Usuario;
import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoActa;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import com.comunidad.gestion.entity.enums.TipoAccionAuditoria;
import com.comunidad.gestion.mapper.ActaMapper;
import com.comunidad.gestion.repository.*;
import com.comunidad.gestion.service.ActaService;
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
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ActaServiceImpl implements ActaService {

    private final ActaRepository actaRepository;
    private final AsambleaRepository asambleaRepository;
    private final AsistenciaRepository asistenciaRepository;
    private final ComuneroRepository comuneroRepository;
    private final UsuarioRepository usuarioRepository;
    private final ActaMapper actaMapper;
    private final QuorumService quorumService;
    private final VotacionService votacionService;
    private final AuditoriaService auditoriaService;

    @Override
    @Transactional
    public ActaResponse crearActa(ActaRequest request) {
        if (actaRepository.existsByAsambleaId(request.getAsambleaId())) {
            throw new BadRequestException("Ya existe un acta registrada para esta asamblea");
        }
        if (actaRepository.existsByNumeroActa(request.getNumeroActa().trim())) {
            throw new BadRequestException("El número de acta '" + request.getNumeroActa() + "' ya está registrado");
        }

        Asamblea asamblea = asambleaRepository.findById(request.getAsambleaId())
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", request.getAsambleaId()));

        Usuario responsable = getUsuarioActual();

        Acta acta = actaMapper.toEntity(request, asamblea, responsable);
        Acta guardada = actaRepository.save(acta);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.CREAR_ACTA,
                "ACTAS",
                "Creación de acta " + guardada.getNumeroActa() + " para asamblea #" + asamblea.getId(),
                "actas",
                guardada.getId(),
                null,
                "Acta registrada",
                "127.0.0.1"
        );

        return obtenerPorId(guardada.getId());
    }

    @Override
    @Transactional
    public ActaResponse actualizarActa(Long id, ActaRequest request) {
        Acta acta = actaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Acta", "id", id));

        if (acta.getEstado() == EstadoActa.APROBADA) {
            throw new BadRequestException("No se puede modificar un acta que ya se encuentra APROBADA");
        }

        String numero = request.getNumeroActa().trim();
        if (!acta.getNumeroActa().equals(numero) && actaRepository.existsByNumeroActa(numero)) {
            throw new BadRequestException("El número de acta '" + numero + "' ya está en uso");
        }

        actaMapper.updateEntity(acta, request);
        Acta actualizada = actaRepository.save(acta);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.EDITAR_ACTA,
                "ACTAS",
                "Actualización de acta " + actualizada.getNumeroActa(),
                "actas",
                actualizada.getId(),
                null,
                "Acta actualizada",
                "127.0.0.1"
        );

        return obtenerPorId(actualizada.getId());
    }

    @Override
    @Transactional(readOnly = true)
    public ActaResponse obtenerPorId(Long id) {
        Acta acta = actaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Acta", "id", id));

        Long asambleaId = acta.getAsamblea().getId();
        long asistentes = asistenciaRepository.countByAsambleaIdAndEstado(asambleaId, EstadoAsistencia.PRESENTE);
        long ausentes = asistenciaRepository.countByAsambleaIdAndEstado(asambleaId, EstadoAsistencia.AUSENTE);
        int totalHabilitados = (int) comuneroRepository.countByCondicionHabilitacionAndEstado(
                CondicionHabilitacion.HABILITADO, EstadoComunero.ACTIVO
        );

        return actaMapper.toResponse(acta, asistentes, ausentes, totalHabilitados);
    }

    @Override
    @Transactional(readOnly = true)
    public ActaResponse obtenerPorAsambleaId(Long asambleaId) {
        Acta acta = actaRepository.findByAsambleaId(asambleaId)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró acta asociada a la asamblea #" + asambleaId));
        return obtenerPorId(acta.getId());
    }

    @Override
    @Transactional(readOnly = true)
    public ActaResponse generarBorradorAutomatico(Long asambleaId) {
        Asamblea asamblea = asambleaRepository.findById(asambleaId)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", asambleaId));

        QuorumResponse quorum = quorumService.calcularQuorum(asambleaId);
        List<VotacionResponse> votaciones = votacionService.listarPorAsamblea(asambleaId);

        StringBuilder resVot = new StringBuilder();
        if (votaciones.isEmpty()) {
            resVot.append("No se realizaron votaciones formales durante la asamblea.");
        } else {
            for (VotacionResponse v : votaciones) {
                resVot.append("- ").append(v.getTitulo()).append(": ");
                if (v.getResultado() != null) {
                    resVot.append("A favor: ").append(v.getResultado().getVotosAFavor())
                            .append(", En contra: ").append(v.getResultado().getVotosEnContra())
                            .append(", Abstención: ").append(v.getResultado().getVotosAbstencion())
                            .append(". Resultado: ").append(v.getResultado().getResultadoDecision()).append(".\n");
                }
            }
        }

        String numeroSugerido = "ACTA-" + asamblea.getFecha().getYear() + "-" + String.format("%03d", asamblea.getId());

        StringBuilder resumen = new StringBuilder();
        resumen.append("En la localidad de ").append(asamblea.getLugar()).append(", a las ")
                .append(asamblea.getHoraInicio()).append(" horas del día ").append(asamblea.getFecha())
                .append(", se reunieron los comuneros calificados en Asamblea ").append(asamblea.getTipo())
                .append(" bajo la agenda: ").append(asamblea.getAgenda()).append(". ")
                .append("Se constató un quórum de ").append(quorum.getPorcentajeAsistencia()).append("% con ")
                .append(quorum.getAsistentes()).append(" asistentes de un padrón habilitado de ")
                .append(quorum.getTotalHabilitados()).append(" comuneros (").append(quorum.getEstadoMensaje()).append(").");

        return ActaResponse.builder()
                .asambleaId(asamblea.getId())
                .asambleaTitulo(asamblea.getTitulo())
                .asambleaTipo(asamblea.getTipo())
                .numeroActa(numeroSugerido)
                .fecha(asamblea.getFecha())
                .lugar(asamblea.getLugar())
                .agenda(asamblea.getAgenda())
                .resumen(resumen.toString())
                .resultadosVotaciones(resVot.toString())
                .observaciones("Acta generada automáticamente en borrador para revisión y firma de la junta directiva.")
                .estado(EstadoActa.BORRADOR)
                .totalHabilitados(quorum.getTotalHabilitados())
                .totalAsistentes(quorum.getAsistentes())
                .totalAusentes(quorum.getAusentes())
                .porcentajeAsistencia(quorum.getPorcentajeAsistencia())
                .quorumAlcanzado(quorum.getQuorumAlcanzado())
                .acuerdos(new ArrayList<>())
                .build();
    }

    @Override
    @Transactional
    public ActaResponse aprobarActa(Long id) {
        Acta acta = actaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Acta", "id", id));

        acta.setEstado(EstadoActa.APROBADA);
        Acta guardada = actaRepository.save(acta);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.APROBAR_ACTA,
                "ACTAS",
                "Aprobación formal del acta " + acta.getNumeroActa(),
                "actas",
                acta.getId(),
                "estado: BORRADOR/FINALIZADA",
                "estado: APROBADA",
                "127.0.0.1"
        );

        return obtenerPorId(guardada.getId());
    }

    @Override
    @Transactional(readOnly = true)
    public PagedResponse<ActaResponse> listarActas(String busqueda,
                                                  EstadoActa estado,
                                                  LocalDate fechaDesde,
                                                  LocalDate fechaHasta,
                                                  Pageable pageable) {
        Page<Acta> page = actaRepository.findWithFilters(busqueda, estado, fechaDesde, fechaHasta, pageable);
        int totalHabilitados = (int) comuneroRepository.countByCondicionHabilitacionAndEstado(
                CondicionHabilitacion.HABILITADO, EstadoComunero.ACTIVO
        );

        Page<ActaResponse> responsePage = page.map(a -> {
            long asistentes = asistenciaRepository.countByAsambleaIdAndEstado(a.getAsamblea().getId(), EstadoAsistencia.PRESENTE);
            long ausentes = asistenciaRepository.countByAsambleaIdAndEstado(a.getAsamblea().getId(), EstadoAsistencia.AUSENTE);
            return actaMapper.toResponse(a, asistentes, ausentes, totalHabilitados);
        });

        return PagedResponse.of(responsePage);
    }

    private Usuario getUsuarioActual() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated() && !"anonymousUser".equals(auth.getName())) {
            return usuarioRepository.findByUsername(auth.getName()).orElse(null);
        }
        return null;
    }

    private String getCurrentUsername() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated() && !"anonymousUser".equals(auth.getName())) {
            return auth.getName();
        }
        return "SISTEMA";
    }
}
