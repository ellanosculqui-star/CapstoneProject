package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.common.exception.ResourceNotFoundException;
import com.comunidad.gestion.dto.votacion.CrearVotacionRequest;
import com.comunidad.gestion.dto.votacion.EmitirVotoRequest;
import com.comunidad.gestion.dto.votacion.VotacionResponse;
import com.comunidad.gestion.entity.*;
import com.comunidad.gestion.entity.enums.*;
import com.comunidad.gestion.mapper.VotacionMapper;
import com.comunidad.gestion.repository.*;
import com.comunidad.gestion.service.AuditoriaService;
import com.comunidad.gestion.service.VotacionService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class VotacionServiceImpl implements VotacionService {

    private final VotacionRepository votacionRepository;
    private final VotoRepository votoRepository;
    private final AsambleaRepository asambleaRepository;
    private final ComuneroRepository comuneroRepository;
    private final AsistenciaRepository asistenciaRepository;
    private final UsuarioRepository usuarioRepository;
    private final VotacionMapper votacionMapper;
    private final AuditoriaService auditoriaService;

    @Override
    @Transactional
    public VotacionResponse crearVotacion(Long asambleaId, CrearVotacionRequest request) {
        Asamblea asamblea = asambleaRepository.findById(asambleaId)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", asambleaId));

        if (asamblea.getEstado() == EstadoAsamblea.FINALIZADA || asamblea.getEstado() == EstadoAsamblea.CANCELADA) {
            throw new BadRequestException("No se pueden crear votaciones en una asamblea " + asamblea.getEstado());
        }

        Votacion votacion = votacionMapper.toEntity(request, asamblea);
        Votacion guardada = votacionRepository.save(votacion);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.CREAR_VOTACION,
                "VOTACIONES",
                "Creación de votación: " + guardada.getTitulo() + " en asamblea #" + asambleaId,
                "votaciones",
                guardada.getId(),
                null,
                "Votación creada",
                "127.0.0.1"
        );

        return mapToResponseWithResults(guardada);
    }

    @Override
    @Transactional
    public VotacionResponse abrirVotacion(Long id) {
        Votacion votacion = votacionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Votación", "id", id));

        if (votacion.getEstado() != EstadoVotacion.BORRADOR) {
            throw new BadRequestException("Solo se pueden abrir votaciones en estado BORRADOR");
        }

        if (votacion.getAsamblea().getEstado() != EstadoAsamblea.EN_CURSO) {
            throw new BadRequestException("La asamblea debe encontrarse EN CURSO para abrir la votación");
        }

        votacion.setEstado(EstadoVotacion.ABIERTA);
        votacion.setFechaApertura(LocalDateTime.now());
        Votacion actualizada = votacionRepository.save(votacion);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.ABRIR_VOTACION,
                "VOTACIONES",
                "Apertura de votación: " + votacion.getTitulo(),
                "votaciones",
                votacion.getId(),
                "estado: BORRADOR",
                "estado: ABIERTA",
                "127.0.0.1"
        );

        return mapToResponseWithResults(actualizada);
    }

    @Override
    @Transactional
    public VotacionResponse cerrarVotacion(Long id) {
        Votacion votacion = votacionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Votación", "id", id));

        if (votacion.getEstado() != EstadoVotacion.ABIERTA) {
            throw new BadRequestException("Solo se pueden cerrar votaciones que estén ABIERTAS");
        }

        votacion.setEstado(EstadoVotacion.CERRADA);
        votacion.setFechaCierre(LocalDateTime.now());
        Votacion actualizada = votacionRepository.save(votacion);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.CERRAR_VOTACION,
                "VOTACIONES",
                "Cierre de votación: " + votacion.getTitulo(),
                "votaciones",
                votacion.getId(),
                "estado: ABIERTA",
                "estado: CERRADA",
                "127.0.0.1"
        );

        return mapToResponseWithResults(actualizada);
    }

    @Override
    @Transactional
    public VotacionResponse emitirVoto(Long id, EmitirVotoRequest request) {
        Votacion votacion = votacionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Votación", "id", id));

        if (votacion.getEstado() != EstadoVotacion.ABIERTA) {
            throw new BadRequestException("No se pueden recibir votos. La votación se encuentra " + votacion.getEstado());
        }

        Comunero comunero = comuneroRepository.findById(request.getComuneroId())
                .orElseThrow(() -> new ResourceNotFoundException("Comunero", "id", request.getComuneroId()));

        if (comunero.getCondicionHabilitacion() != CondicionHabilitacion.HABILITADO) {
            throw new BadRequestException("El comunero no está habilitado para votar");
        }

        // Check attendance: must be PRESENTE in this assembly
        Asistencia asistencia = asistenciaRepository.findByAsambleaIdAndComuneroId(votacion.getAsamblea().getId(), comunero.getId())
                .orElseThrow(() -> new BadRequestException("El comunero no tiene registro de asistencia en la asamblea"));

        if (asistencia.getEstado() != EstadoAsistencia.PRESENTE) {
            throw new BadRequestException("Solo los comuneros marcados como PRESENTES pueden emitir voto");
        }

        // Prevent double voting
        if (votoRepository.existsByVotacionIdAndComuneroId(id, comunero.getId())) {
            throw new BadRequestException("El comunero ya emitió su voto en esta votación");
        }

        OpcionVoto opcionFinal = request.getOpcion();
        String candElegido = request.getCandidatoElegido() != null ? request.getCandidatoElegido().trim() : null;

        if (votacion.getTipo() == TipoVotacion.ELECCION_REPRESENTANTE) {
            if (candElegido == null || candElegido.isBlank()) {
                throw new BadRequestException("Debe seleccionar un candidato para esta elección");
            }
            opcionFinal = OpcionVoto.CANDIDATO;
        }

        Voto voto = Voto.builder()
                .votacion(votacion)
                .comunero(comunero)
                .opcion(opcionFinal)
                .candidatoElegido(candElegido)
                .fechaHora(LocalDateTime.now())
                .build();

        votoRepository.save(voto);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.REGISTRAR_VOTO,
                "VOTACIONES",
                "Voto emitido para comunero " + comunero.getCodigoComunero() + " en votación #" + id + (candElegido != null ? " (Candidato: " + candElegido + ")" : ""),
                "votos",
                voto.getId(),
                null,
                "Opción emitida",
                "127.0.0.1"
        );

        return mapToResponseWithResults(votacion);
    }

    @Override
    @Transactional(readOnly = true)
    public VotacionResponse obtenerPorId(Long id) {
        Votacion votacion = votacionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Votación", "id", id));
        return mapToResponseWithResults(votacion);
    }

    @Override
    @Transactional(readOnly = true)
    public List<VotacionResponse> listarPorAsamblea(Long asambleaId) {
        return votacionRepository.findByAsambleaIdOrderByFechaCreacionDesc(asambleaId).stream()
                .map(this::mapToResponseWithResults)
                .collect(Collectors.toList());
    }

    private VotacionResponse mapToResponseWithResults(Votacion votacion) {
        long aFavor = votoRepository.countByVotacionIdAndOpcion(votacion.getId(), OpcionVoto.A_FAVOR);
        long enContra = votoRepository.countByVotacionIdAndOpcion(votacion.getId(), OpcionVoto.EN_CONTRA);
        long abstencion = votoRepository.countByVotacionIdAndOpcion(votacion.getId(), OpcionVoto.ABSTENCION);

        java.util.Map<String, Long> votosPorCandidato = new java.util.LinkedHashMap<>();
        if (votacion.getTipo() == TipoVotacion.ELECCION_REPRESENTANTE) {
            if (votacion.getCandidatos() != null && !votacion.getCandidatos().isBlank()) {
                for (String c : votacion.getCandidatos().split(";;")) {
                    votosPorCandidato.put(c.trim(), 0L);
                }
            }
            List<Voto> votos = votoRepository.findByVotacionId(votacion.getId());
            for (Voto v : votos) {
                if (v.getCandidatoElegido() != null && !v.getCandidatoElegido().isBlank()) {
                    String cand = v.getCandidatoElegido().trim();
                    votosPorCandidato.put(cand, votosPorCandidato.getOrDefault(cand, 0L) + 1);
                }
            }
        }

        boolean yaVoto = false;
        String username = getCurrentUsername();
        if (!"SISTEMA".equals(username) && !"ANONIMO".equals(username)) {
            Usuario usuario = usuarioRepository.findByUsername(username).orElse(null);
            if (usuario != null) {
                Comunero comunero = comuneroRepository.findByUsuarioId(usuario.getId()).orElse(null);
                if (comunero != null) {
                    yaVoto = votoRepository.existsByVotacionIdAndComuneroId(votacion.getId(), comunero.getId());
                }
            }
        }

        return votacionMapper.toResponse(votacion, aFavor, enContra, abstencion, yaVoto, votosPorCandidato);
    }

    private String getCurrentUsername() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated() && !"anonymousUser".equals(auth.getName())) {
            return auth.getName();
        }
        return "SISTEMA";
    }
}
