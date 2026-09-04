package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.common.exception.ResourceNotFoundException;
import com.comunidad.gestion.dto.asistencia.AsistenciaPadronDto;
import com.comunidad.gestion.dto.asistencia.AsistenciaResponse;
import com.comunidad.gestion.dto.asistencia.RegistrarAsistenciaRequest;
import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.Asistencia;
import com.comunidad.gestion.entity.Comunero;
import com.comunidad.gestion.entity.Usuario;
import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import com.comunidad.gestion.entity.enums.TipoAccionAuditoria;
import com.comunidad.gestion.mapper.AsistenciaMapper;
import com.comunidad.gestion.repository.AsambleaRepository;
import com.comunidad.gestion.repository.AsistenciaRepository;
import com.comunidad.gestion.repository.ComuneroRepository;
import com.comunidad.gestion.repository.UsuarioRepository;
import com.comunidad.gestion.service.AsistenciaService;
import com.comunidad.gestion.service.AuditoriaService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AsistenciaServiceImpl implements AsistenciaService {

    private final AsistenciaRepository asistenciaRepository;
    private final AsambleaRepository asambleaRepository;
    private final ComuneroRepository comuneroRepository;
    private final UsuarioRepository usuarioRepository;
    private final AsistenciaMapper asistenciaMapper;
    private final AuditoriaService auditoriaService;

    @Override
    @Transactional(readOnly = true)
    public List<AsistenciaPadronDto> obtenerPadronAsamblea(Long asambleaId) {
        if (!asambleaRepository.existsById(asambleaId)) {
            throw new ResourceNotFoundException("Asamblea", "id", asambleaId);
        }

        List<Comunero> comuneros = comuneroRepository.findAllHabilitados();
        List<Asistencia> asistencias = asistenciaRepository.findByAsambleaIdOrderByComuneroApellidosAscComuneroNombresAsc(asambleaId);

        Map<Long, Asistencia> asistenciaMap = asistencias.stream()
                .collect(Collectors.toMap(a -> a.getComunero().getId(), a -> a, (existente, reemplazo) -> existente));

        List<AsistenciaPadronDto> lista = new ArrayList<>();
        for (Comunero c : comuneros) {
            Asistencia asis = asistenciaMap.get(c.getId());
            lista.add(asistenciaMapper.toPadronDto(c, asis));
        }

        return lista;
    }

    @Override
    @Transactional
    public AsistenciaResponse registrarAsistencia(Long asambleaId, RegistrarAsistenciaRequest request) {
        Asamblea asamblea = asambleaRepository.findById(asambleaId)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", asambleaId));

        if (asamblea.getEstado() == EstadoAsamblea.FINALIZADA || asamblea.getEstado() == EstadoAsamblea.CANCELADA) {
            throw new BadRequestException("No se puede registrar asistencia en una asamblea " + asamblea.getEstado());
        }

        Comunero comunero = comuneroRepository.findById(request.getComuneroId())
                .orElseThrow(() -> new ResourceNotFoundException("Comunero", "id", request.getComuneroId()));

        if (comunero.getCondicionHabilitacion() != CondicionHabilitacion.HABILITADO) {
            throw new BadRequestException("El comunero " + comunero.getCodigoComunero() + " no se encuentra habilitado para la asamblea");
        }

        Usuario currentUser = getUsuarioActual();

        Optional<Asistencia> optAsistencia = asistenciaRepository.findByAsambleaIdAndComuneroId(asambleaId, request.getComuneroId());
        Asistencia asistencia;

        if (optAsistencia.isPresent()) {
            asistencia = optAsistencia.get();
            asistencia.setEstado(request.getEstado());
            asistencia.setObservacion(request.getObservacion());
            asistencia.setFechaHoraRegistro(LocalDateTime.now());
            asistencia.setRegistradoPor(currentUser);
        } else {
            asistencia = Asistencia.builder()
                    .asamblea(asamblea)
                    .comunero(comunero)
                    .estado(request.getEstado())
                    .observacion(request.getObservacion())
                    .fechaHoraRegistro(LocalDateTime.now())
                    .registradoPor(currentUser)
                    .build();
        }

        Asistencia guardada = asistenciaRepository.save(asistencia);

        auditoriaService.registrarLog(
                currentUser != null ? currentUser.getUsername() : "SISTEMA",
                TipoAccionAuditoria.REGISTRAR_ASISTENCIA,
                "ASISTENCIA",
                "Asistencia marcada como " + request.getEstado() + " para comunero " + comunero.getCodigoComunero() + " en asamblea #" + asambleaId,
                "asistencias",
                guardada.getId(),
                null,
                "Estado: " + request.getEstado(),
                "127.0.0.1"
        );

        return asistenciaMapper.toResponse(guardada);
    }

    @Override
    @Transactional
    public AsistenciaResponse marcarAsistenciaRapida(Long asambleaId, String dniOrCodigo, EstadoAsistencia estado) {
        Comunero comunero = comuneroRepository.findByDni(dniOrCodigo.trim())
                .or(() -> comuneroRepository.findByCodigoComunero(dniOrCodigo.trim()))
                .orElseThrow(() -> new ResourceNotFoundException("Comunero no encontrado con DNI o código: " + dniOrCodigo));

        RegistrarAsistenciaRequest request = RegistrarAsistenciaRequest.builder()
                .comuneroId(comunero.getId())
                .estado(estado != null ? estado : EstadoAsistencia.PRESENTE)
                .observacion("Registro rápido por código/DNI")
                .build();

        return registrarAsistencia(asambleaId, request);
    }

    @Override
    @Transactional(readOnly = true)
    public List<AsistenciaResponse> listarAsistenciasPorAsamblea(Long asambleaId) {
        return asistenciaRepository.findByAsambleaIdOrderByComuneroApellidosAscComuneroNombresAsc(asambleaId).stream()
                .map(asistenciaMapper::toResponse)
                .collect(Collectors.toList());
    }

    private Usuario getUsuarioActual() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated() && !"anonymousUser".equals(auth.getName())) {
            return usuarioRepository.findByUsername(auth.getName()).orElse(null);
        }
        return null;
    }
}
