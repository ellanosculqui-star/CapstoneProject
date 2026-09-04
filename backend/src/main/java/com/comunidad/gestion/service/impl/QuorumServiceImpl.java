package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.common.exception.ResourceNotFoundException;
import com.comunidad.gestion.dto.asistencia.QuorumResponse;
import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import com.comunidad.gestion.repository.AsambleaRepository;
import com.comunidad.gestion.repository.AsistenciaRepository;
import com.comunidad.gestion.repository.ComuneroRepository;
import com.comunidad.gestion.service.QuorumService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
@RequiredArgsConstructor
public class QuorumServiceImpl implements QuorumService {

    private final AsambleaRepository asambleaRepository;
    private final AsistenciaRepository asistenciaRepository;
    private final ComuneroRepository comuneroRepository;

    @Override
    @Transactional(readOnly = true)
    public QuorumResponse calcularQuorum(Long asambleaId) {
        Asamblea asamblea = asambleaRepository.findById(asambleaId)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", asambleaId));

        int totalHabilitados;
        if (asamblea.getTotalHabilitadosCorte() != null && asamblea.getTotalHabilitadosCorte() > 0) {
            totalHabilitados = asamblea.getTotalHabilitadosCorte();
        } else {
            totalHabilitados = (int) comuneroRepository.countByCondicionHabilitacionAndEstado(
                    CondicionHabilitacion.HABILITADO, EstadoComunero.ACTIVO
            );
        }

        long asistentes = asistenciaRepository.countByAsambleaIdAndEstado(asambleaId, EstadoAsistencia.PRESENTE);
        long ausentes = asistenciaRepository.countByAsambleaIdAndEstado(asambleaId, EstadoAsistencia.AUSENTE);
        long justificados = asistenciaRepository.countByAsambleaIdAndEstado(asambleaId, EstadoAsistencia.JUSTIFICADO);

        BigDecimal porcentaje = BigDecimal.ZERO;
        boolean quorumAlcanzado = false;

        if (totalHabilitados > 0) {
            porcentaje = BigDecimal.valueOf(asistentes)
                    .multiply(BigDecimal.valueOf(100))
                    .divide(BigDecimal.valueOf(totalHabilitados), 2, RoundingMode.HALF_UP);
            quorumAlcanzado = porcentaje.compareTo(asamblea.getQuorumMinimoPct()) >= 0;
        }

        String estadoMensaje = quorumAlcanzado ? "QUÓRUM ALCANZADO" : "QUÓRUM NO ALCANZADO";

        return QuorumResponse.builder()
                .asambleaId(asamblea.getId())
                .asambleaTitulo(asamblea.getTitulo())
                .totalHabilitados(totalHabilitados)
                .asistentes(asistentes)
                .ausentes(ausentes)
                .justificados(justificados)
                .porcentajeAsistencia(porcentaje)
                .quorumRequeridoPct(asamblea.getQuorumMinimoPct())
                .quorumAlcanzado(quorumAlcanzado)
                .estadoMensaje(estadoMensaje)
                .build();
    }
}
