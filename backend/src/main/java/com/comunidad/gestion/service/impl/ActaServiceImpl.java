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
    private final FirmaActaRepository firmaActaRepository;
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

        // Recalcular porcentaje real de asistencia
        double porcentaje = totalHabilitados > 0 ? (asistentes * 100.0 / totalHabilitados) : 0.0;
        boolean quorumOk = porcentaje >= 50.0;
        String estadoQuorum = quorumOk ? "QUÓRUM ALCANZADO" : "QUÓRUM NO ALCANZADO";

        // Regenerar el resumen con los datos reales actuales de asistencia
        Asamblea asamblea = acta.getAsamblea();
        String resumenActualizado = "En la localidad de " + asamblea.getLugar()
                + ", a las " + asamblea.getHoraInicio()
                + " horas del día " + asamblea.getFecha()
                + ", se reunieron los comuneros calificados en Asamblea " + asamblea.getTipo()
                + " bajo la agenda: " + asamblea.getAgenda() + ". "
                + "Se constató un quórum de " + String.format("%.2f", porcentaje) + "% con "
                + asistentes + " asistentes de un padrón habilitado de "
                + totalHabilitados + " comuneros (" + estadoQuorum + ").";
        acta.setResumen(resumenActualizado);

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
                resVot.append("- ").append(v.getTitulo()).append(" (").append(v.getTipo()).append("): ");
                if (v.getResultado() != null) {
                    if ("ELECCION_REPRESENTANTE".equals(v.getTipo()) && v.getResultado().getVotosPorCandidato() != null) {
                        resVot.append("Escrutinio por Candidato: [");
                        v.getResultado().getVotosPorCandidato().forEach((candidato, votos) -> {
                            java.math.BigDecimal pct = (v.getResultado().getPorcentajePorCandidato() != null && v.getResultado().getPorcentajePorCandidato().containsKey(candidato)) ? 
                                    v.getResultado().getPorcentajePorCandidato().get(candidato) : java.math.BigDecimal.ZERO;
                            resVot.append(candidato).append(": ").append(votos).append(" votos (").append(pct).append("%), ");
                        });
                        resVot.append("]. Candidato Electo / Dictamen: ")
                                .append(v.getResultado().getCandidatoGanador() != null ? v.getResultado().getCandidatoGanador() : v.getResultado().getResultadoDecision())
                                .append(".\n");
                    } else {
                        resVot.append("A favor: ").append(v.getResultado().getVotosAFavor())
                                .append(", En contra: ").append(v.getResultado().getVotosEnContra())
                                .append(", Abstención: ").append(v.getResultado().getVotosAbstencion())
                                .append(". Dictamen: ").append(v.getResultado().getResultadoDecision()).append(".\n");
                    }
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
    public ActaResponse crearOActualizarActaDeAsamblea(Long asambleaId) {
        Asamblea asamblea = asambleaRepository.findById(asambleaId)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", asambleaId));

        ActaResponse borrador = generarBorradorAutomatico(asambleaId);

        Usuario responsable = getUsuarioActual();

        Acta acta = actaRepository.findByAsambleaId(asambleaId).orElse(null);
        if (acta == null) {
            String numActa = borrador.getNumeroActa();
            int sufijo = 1;
            while (actaRepository.existsByNumeroActa(numActa)) {
                numActa = borrador.getNumeroActa() + "-" + sufijo++;
            }
            acta = Acta.builder()
                    .asamblea(asamblea)
                    .numeroActa(numActa)
                    .fecha(asamblea.getFecha())
                    .lugar(asamblea.getLugar())
                    .agenda(asamblea.getAgenda())
                    .resumen(borrador.getResumen())
                    .resultadosVotaciones(borrador.getResultadosVotaciones())
                    .observaciones(borrador.getObservaciones())
                    .estado(EstadoActa.BORRADOR)
                    .responsable(responsable)
                    .build();
        } else {
            acta.setFecha(asamblea.getFecha());
            acta.setLugar(asamblea.getLugar());
            acta.setAgenda(asamblea.getAgenda());
            acta.setResumen(borrador.getResumen());
            acta.setResultadosVotaciones(borrador.getResultadosVotaciones());
            if (responsable != null) {
                acta.setResponsable(responsable);
            }
        }

        Acta guardada = actaRepository.save(acta);
        return obtenerPorId(guardada.getId());
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
    @Transactional
    public ActaResponse agregarAcuerdo(Long actaId, String descripcion) {
        if (descripcion == null || descripcion.trim().isEmpty()) {
            throw new BadRequestException("La descripción del acuerdo no puede estar vacía");
        }

        Acta acta = actaRepository.findById(actaId)
                .orElseThrow(() -> new ResourceNotFoundException("Acta", "id", actaId));

        int proximoNumero = acta.getAcuerdos().size() + 1;
        com.comunidad.gestion.entity.Acuerdo nuevoAcuerdo = com.comunidad.gestion.entity.Acuerdo.builder()
                .acta(acta)
                .numero(proximoNumero)
                .descripcion(descripcion.trim())
                .estado(com.comunidad.gestion.entity.enums.EstadoAcuerdo.PENDIENTE)
                .build();

        acta.getAcuerdos().add(nuevoAcuerdo);
        Acta guardada = actaRepository.save(acta);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.EDITAR_ACTA,
                "ACTAS",
                "Se agregó el acuerdo N° " + proximoNumero + " al acta " + acta.getNumeroActa(),
                "actas",
                acta.getId(),
                null,
                "acuerdo: " + descripcion.trim(),
                "127.0.0.1"
        );

        return obtenerPorId(guardada.getId());
    }

    @Override
    @Transactional
    public void eliminarAcuerdo(Long actaId, Long acuerdoId) {
        Acta acta = actaRepository.findById(actaId)
                .orElseThrow(() -> new ResourceNotFoundException("Acta", "id", actaId));

        boolean removed = acta.getAcuerdos().removeIf(a -> a.getId().equals(acuerdoId));
        if (!removed) {
            throw new ResourceNotFoundException("Acuerdo", "id", acuerdoId);
        }

        // Renumerar acuerdos
        for (int i = 0; i < acta.getAcuerdos().size(); i++) {
            acta.getAcuerdos().get(i).setNumero(i + 1);
        }

        actaRepository.save(acta);
    }

    @Override
    @Transactional
    public com.comunidad.gestion.dto.acta.FirmaActaDto registrarFirmaComunero(Long actaId, String dni, String trazoFirma, String dispositivo, String ip) {
        if (dni == null || dni.trim().isEmpty()) {
            throw new BadRequestException("El DNI es obligatorio para firmar el acta");
        }

        Acta acta = actaRepository.findById(actaId)
                .orElseThrow(() -> new ResourceNotFoundException("Acta", "id", actaId));

        com.comunidad.gestion.entity.Comunero comunero = comuneroRepository.findByDni(dni.trim())
                .orElseThrow(() -> new ResourceNotFoundException("Comunero no encontrado con DNI: " + dni));

        if (comunero.getEstado() != EstadoComunero.ACTIVO) {
            throw new BadRequestException("El comunero no se encuentra activo en el padrón comunal.");
        }

        // REGLA FUNDAMENTAL: Solo los presentes en la asamblea pueden firmar el acta
        boolean estuvoPresente = asistenciaRepository.findByAsambleaIdAndComuneroId(acta.getAsamblea().getId(), comunero.getId())
                .map(asist -> asist.getEstado() == EstadoAsistencia.PRESENTE)
                .orElse(false);

        if (!estuvoPresente) {
            throw new BadRequestException("No registraste asistencia como PRESENTE en esta asamblea. Solo los comuneros que asistieron pueden firmar el acta.");
        }

        // Verificar si ya firmó
        if (firmaActaRepository.existsByActaIdAndComuneroId(actaId, comunero.getId())) {
            throw new BadRequestException("El comunero con DNI " + dni + " ya firmó esta acta.");
        }

        com.comunidad.gestion.entity.FirmaActa firma = com.comunidad.gestion.entity.FirmaActa.builder()
                .acta(acta)
                .comunero(comunero)
                .fechaHoraFirma(java.time.LocalDateTime.now())
                .trazoFirma(trazoFirma)
                .dispositivo(dispositivo)
                .ipAddress(ip)
                .build();

        com.comunidad.gestion.entity.FirmaActa guardada = firmaActaRepository.save(firma);

        return com.comunidad.gestion.dto.acta.FirmaActaDto.builder()
                .id(guardada.getId())
                .comuneroId(comunero.getId())
                .comuneroDni(comunero.getDni())
                .comuneroNombreCompleto(comunero.getNombres() + " " + comunero.getApellidos())
                .comuneroCodigo(comunero.getCodigoComunero())
                .fechaHoraFirma(guardada.getFechaHoraFirma())
                .trazoFirma(guardada.getTrazoFirma())
                .dispositivo(guardada.getDispositivo())
                .build();
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
