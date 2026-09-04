package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.dto.asamblea.AsambleaResponse;
import com.comunidad.gestion.dto.asistencia.QuorumResponse;
import com.comunidad.gestion.dto.dashboard.AsistenciaHistoricaDto;
import com.comunidad.gestion.dto.dashboard.DashboardStatsDto;
import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import com.comunidad.gestion.entity.enums.EstadoMulta;
import com.comunidad.gestion.repository.*;
import com.comunidad.gestion.service.AsambleaService;
import com.comunidad.gestion.service.DashboardService;
import com.comunidad.gestion.service.PrediccionService;
import com.comunidad.gestion.service.QuorumService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {

    private final ComuneroRepository comuneroRepository;
    private final AsambleaRepository asambleaRepository;
    private final AsistenciaRepository asistenciaRepository;
    private final MultaRepository multaRepository;
    private final PagoMultaRepository pagoMultaRepository;
    private final ActaRepository actaRepository;
    private final AsambleaService asambleaService;
    private final QuorumService quorumService;
    private final PrediccionService prediccionService;

    @Override
    @Transactional(readOnly = true)
    public DashboardStatsDto obtenerEstadisticasDashboard() {
        long totalComuneros = comuneroRepository.count();
        long habilitados = comuneroRepository.countByCondicionHabilitacionAndEstado(CondicionHabilitacion.HABILITADO, EstadoComunero.ACTIVO);
        long inhabilitados = comuneroRepository.countByCondicionHabilitacionAndEstado(CondicionHabilitacion.INHABILITADO, EstadoComunero.ACTIVO);
        long inactivos = comuneroRepository.countByEstado(EstadoComunero.INACTIVO) + comuneroRepository.countByEstado(EstadoComunero.FALLECIDO);

        long totalAsambleas = asambleaRepository.count();
        long finalizadas = asambleaRepository.countByEstado(EstadoAsamblea.FINALIZADA);
        long programadas = asambleaRepository.countByEstado(EstadoAsamblea.PROGRAMADA) + asambleaRepository.countByEstado(EstadoAsamblea.EN_CURSO);

        // Next upcoming asamblea
        AsambleaResponse proxima = asambleaRepository
                .findTopByFechaGreaterThanEqualAndEstadoNotOrderByFechaAscHoraInicioAsc(LocalDate.now(), EstadoAsamblea.CANCELADA)
                .map(a -> asambleaService.obtenerPorId(a.getId()))
                .orElse(null);

        // Last finalized asamblea
        var optUltima = asambleaRepository.findTopByEstadoOrderByFechaDescHoraInicioDesc(EstadoAsamblea.FINALIZADA);
        AsambleaResponse ultima = optUltima.map(a -> asambleaService.obtenerPorId(a.getId())).orElse(null);
        QuorumResponse quorumUltima = optUltima.map(a -> quorumService.calcularQuorum(a.getId())).orElse(null);

        BigDecimal multasPendientes = multaRepository.sumTotalSaldoPendiente();
        BigDecimal multasRecaudadas = pagoMultaRepository.sumTotalMontoPagado();
        long countMultasPendientes = multaRepository.countByEstado(EstadoMulta.PENDIENTE);
        long totalActas = actaRepository.count();

        // Historical attendance
        List<Asamblea> ultimas5 = asambleaRepository.findTop5ByEstadoOrderByFechaDesc(EstadoAsamblea.FINALIZADA);
        List<AsistenciaHistoricaDto> historial = new ArrayList<>();

        for (Asamblea a : ultimas5) {
            long asistentes = asistenciaRepository.countByAsambleaIdAndEstado(a.getId(), EstadoAsistencia.PRESENTE);
            long ausentes = asistenciaRepository.countByAsambleaIdAndEstado(a.getId(), EstadoAsistencia.AUSENTE);
            int hab = a.getTotalHabilitadosCorte() != null && a.getTotalHabilitadosCorte() > 0 ? a.getTotalHabilitadosCorte() : (int) habilitados;

            BigDecimal pct = BigDecimal.ZERO;
            if (hab > 0) {
                pct = BigDecimal.valueOf(asistentes).multiply(BigDecimal.valueOf(100)).divide(BigDecimal.valueOf(hab), 2, RoundingMode.HALF_UP);
            }

            historial.add(AsistenciaHistoricaDto.builder()
                    .asambleaId(a.getId())
                    .asambleaTitulo(a.getTitulo())
                    .fecha(a.getFecha())
                    .asistentes(asistentes)
                    .ausentes(ausentes)
                    .habilitados(hab)
                    .porcentajeAsistencia(pct)
                    .quorumAlcanzado(pct.compareTo(a.getQuorumMinimoPct()) >= 0)
                    .build());
        }

        // Predicción analítica e IA
        com.comunidad.gestion.dto.prediccion.PrediccionQuorumDto prediccion = prediccionService.predecirQuorumProximaAsamblea();

        // Alertas inteligentes
        List<com.comunidad.gestion.dto.alerta.AlertaDto> alertas = new ArrayList<>();
        if (prediccion != null) {
            if ("ALTO".equalsIgnoreCase(prediccion.getNivelRiesgo())) {
                alertas.add(com.comunidad.gestion.dto.alerta.AlertaDto.builder()
                        .id("ALT-QUORUM")
                        .tipo("QUORUM")
                        .nivel("DANGER")
                        .titulo("⚠️ Alerta Crítica de Quórum")
                        .mensaje("La estimación proyecta solo un " + prediccion.getProbabilidadQuorumPct() + "% de probabilidad de quórum (" + prediccion.getAsistenciaEstimada() + " de " + prediccion.getQuorumRequeridoVotos() + " requeridos).")
                        .accionUrl("/asambleas")
                        .accionTexto("Ver Convocatoria")
                        .build());
            } else if ("MEDIO".equalsIgnoreCase(prediccion.getNivelRiesgo())) {
                alertas.add(com.comunidad.gestion.dto.alerta.AlertaDto.builder()
                        .id("ALT-QUORUM")
                        .tipo("QUORUM")
                        .nivel("WARNING")
                        .titulo("⚠️ Margen Ajustado de Quórum")
                        .mensaje("Asistencia proyectada en " + prediccion.getPorcentajeEstimado() + "%. Se aconseja reforzar citaciones en caseríos.")
                        .accionUrl("/asambleas")
                        .accionTexto("Ver Convocatoria")
                        .build());
            }
        }

        if (countMultasPendientes > 0) {
            alertas.add(com.comunidad.gestion.dto.alerta.AlertaDto.builder()
                    .id("ALT-MULTAS")
                    .tipo("MULTAS")
                    .nivel("WARNING")
                    .titulo("⚠️ Multas Pendientes de Cobro")
                    .mensaje("Existen " + countMultasPendientes + " multas pendientes registradas con un saldo acumulado de S/ " + (multasPendientes != null ? multasPendientes : BigDecimal.ZERO) + ".")
                    .accionUrl("/multas")
                    .accionTexto("Gestionar Multas")
                    .build());
        }

        alertas.add(com.comunidad.gestion.dto.alerta.AlertaDto.builder()
                .id("ALT-OFFLINE")
                .tipo("PARTICIPACION")
                .nivel("INFO")
                .titulo("ℹ️ Modo Offline Habilitado")
                .mensaje("El módulo de asistencia opera sin conexión en zonas rurales y sincroniza automáticamente al restablecerse internet.")
                .accionUrl("/asistencia")
                .accionTexto("Ir a Asistencia")
                .build());

        return DashboardStatsDto.builder()
                .totalComuneros(totalComuneros)
                .comunerosHabilitados(habilitados)
                .comunerosInhabilitados(inhabilitados)
                .comunerosInactivos(inactivos)
                .totalAsambleas(totalAsambleas)
                .asambleasFinalizadas(finalizadas)
                .asambleasProgramadas(programadas)
                .proximaAsamblea(proxima)
                .ultimaAsamblea(ultima)
                .quorumUltimaAsamblea(quorumUltima)
                .totalMultasPendientes(multasPendientes != null ? multasPendientes : BigDecimal.ZERO)
                .totalMultasRecaudadas(multasRecaudadas != null ? multasRecaudadas : BigDecimal.ZERO)
                .cantidadMultasPendientes(countMultasPendientes)
                .totalActasRegistradas(totalActas)
                .historialAsistencias(historial)
                .prediccionProxima(prediccion)
                .alertas(alertas)
                .build();
    }
}
