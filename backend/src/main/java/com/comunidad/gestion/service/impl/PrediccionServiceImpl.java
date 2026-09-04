package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.common.exception.ResourceNotFoundException;
import com.comunidad.gestion.dto.prediccion.PrediccionQuorumDto;
import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import com.comunidad.gestion.entity.enums.TipoAsamblea;
import com.comunidad.gestion.repository.AsambleaRepository;
import com.comunidad.gestion.repository.AsistenciaRepository;
import com.comunidad.gestion.repository.ComuneroRepository;
import com.comunidad.gestion.service.PrediccionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PrediccionServiceImpl implements PrediccionService {

    private final AsambleaRepository asambleaRepository;
    private final AsistenciaRepository asistenciaRepository;
    private final ComuneroRepository comuneroRepository;

    @Override
    @Transactional(readOnly = true)
    public PrediccionQuorumDto predecirQuorumProximaAsamblea() {
        // Buscar asamblea en curso o programada próxima
        Asamblea asamblea = asambleaRepository
                .findTopByFechaGreaterThanEqualAndEstadoNotOrderByFechaAscHoraInicioAsc(LocalDate.now(), EstadoAsamblea.CANCELADA)
                .orElseGet(() -> asambleaRepository.findTopByEstadoOrderByFechaDescHoraInicioDesc(EstadoAsamblea.FINALIZADA)
                        .orElse(null));

        if (asamblea == null) {
            return generarPrediccionPorDefecto();
        }

        return calcularPrediccionParaAsamblea(asamblea);
    }

    @Override
    @Transactional(readOnly = true)
    public PrediccionQuorumDto predecirQuorumParaAsamblea(Long asambleaId) {
        Asamblea asamblea = asambleaRepository.findById(asambleaId)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", asambleaId));
        return calcularPrediccionParaAsamblea(asamblea);
    }

    private PrediccionQuorumDto calcularPrediccionParaAsamblea(Asamblea asamblea) {
        List<String> factores = new ArrayList<>();

        // 1. Comuneros habilitados
        int totalHabilitados;
        if (asamblea.getTotalHabilitadosCorte() != null && asamblea.getTotalHabilitadosCorte() > 0) {
            totalHabilitados = asamblea.getTotalHabilitadosCorte();
        } else {
            totalHabilitados = (int) comuneroRepository.countByCondicionHabilitacionAndEstado(
                    CondicionHabilitacion.HABILITADO, EstadoComunero.ACTIVO
            );
        }
        factores.add("Padrón habilitado activo: " + totalHabilitados + " comuneros");

        // 2. Historial de asambleas finalizadas (hasta 10)
        List<Asamblea> historicas = asambleaRepository.findTop10ByEstadoOrderByFechaDesc(EstadoAsamblea.FINALIZADA);

        double basePct = 65.0; // Valor base comunitario por defecto
        if (!historicas.isEmpty()) {
            double sumaPonderada = 0;
            double pesoTotal = 0;
            double peso = 1.0;

            for (Asamblea a : historicas) {
                // No incluir la misma asamblea si ya estuviera finalizada
                if (a.getId().equals(asamblea.getId()) && a.getEstado() == EstadoAsamblea.EN_CURSO) continue;

                long pres = asistenciaRepository.countByAsambleaIdAndEstado(a.getId(), EstadoAsistencia.PRESENTE);
                int hab = a.getTotalHabilitadosCorte() != null && a.getTotalHabilitadosCorte() > 0 ? a.getTotalHabilitadosCorte() : totalHabilitados;
                if (hab > 0) {
                    double pct = (double) pres * 100.0 / hab;
                    sumaPonderada += pct * peso;
                    pesoTotal += peso;
                    peso = Math.max(0.3, peso - 0.1); // Las más recientes tienen mayor peso predictivo
                }
            }

            if (pesoTotal > 0) {
                basePct = sumaPonderada / pesoTotal;
                factores.add(String.format("Media ponderada histórica de %d asambleas previas: %.1f%%", historicas.size(), basePct));
            }
        } else {
            factores.add("Sin suficientes asambleas previas: se aplica modelo con priors del reglamento comunal");
        }

        // 3. Ajuste por Tipo de Asamblea
        double ajusteTipo = 0.0;
        if (asamblea.getTipo() == TipoAsamblea.EXTRAORDINARIA) {
            ajusteTipo = +6.5;
            factores.add("Asamblea Extraordinaria (+6.5% por mayor urgencia de agenda comunal)");
        } else if (asamblea.getTipo() == TipoAsamblea.ORDINARIA) {
            ajusteTipo = -1.5;
            factores.add("Asamblea Ordinaria periódica (-1.5% comportamiento de rutina)");
        }
        basePct += ajusteTipo;

        // 4. Ajuste por Día de la Semana
        if (asamblea.getFecha() != null) {
            DayOfWeek dia = asamblea.getFecha().getDayOfWeek();
            if (dia == DayOfWeek.SUNDAY || dia == DayOfWeek.SATURDAY) {
                basePct += 4.0;
                factores.add("Convocatoria en fin de semana (+4.0% mayor disponibilidad comunal)");
            } else {
                basePct -= 3.0;
                factores.add("Convocatoria en día laborable de faena/campo (-3.0%)");
            }
        }

        // Delimitar porcentaje entre 20% y 98%
        basePct = Math.max(20.0, Math.min(98.0, basePct));

        // 5. Cálculos derivados
        BigDecimal quorumRequeridoPct = asamblea.getQuorumMinimoPct() != null ? asamblea.getQuorumMinimoPct() : BigDecimal.valueOf(50);
        int quorumVotos = (int) Math.ceil(totalHabilitados * (quorumRequeridoPct.doubleValue() / 100.0));
        int asistenciaEstimada = (int) Math.round(totalHabilitados * (basePct / 100.0));

        // 6. Probabilidad de Quórum
        double diff = basePct - quorumRequeridoPct.doubleValue();
        // Función sigmoide para modelar la probabilidad acumulada
        double probabilidad = 1.0 / (1.0 + Math.exp(-0.25 * diff)) * 100.0;
        probabilidad = Math.max(5.0, Math.min(99.0, probabilidad));

        // 7. Nivel de Riesgo
        String nivelRiesgo;
        String mensaje;
        if (probabilidad >= 70.0) {
            nivelRiesgo = "BAJO";
            mensaje = "Se proyecta una sólida participación comunal. Alta certidumbre de instalar la asamblea en primera convocatoria.";
        } else if (probabilidad >= 45.0) {
            nivelRiesgo = "MEDIO";
            mensaje = "Margen de quórum ajustado. Se sugiere perifoneo y aviso previo mediante los delegados de sectores/caseríos.";
        } else {
            nivelRiesgo = "ALTO";
            mensaje = "ALERTA PREDICTIVA: Alto riesgo de no alcanzar el quórum reglamentario en primera convocatoria. Recomendado convocar a segunda citación o reforzar movilización.";
        }

        return PrediccionQuorumDto.builder()
                .asambleaId(asamblea.getId())
                .asambleaTitulo(asamblea.getTitulo())
                .fecha(asamblea.getFecha() != null ? asamblea.getFecha().toString() : "")
                .totalHabilitados(totalHabilitados)
                .asistenciaEstimada(asistenciaEstimada)
                .porcentajeEstimado(BigDecimal.valueOf(basePct).setScale(1, RoundingMode.HALF_UP))
                .quorumRequeridoPct(quorumRequeridoPct)
                .quorumRequeridoVotos(quorumVotos)
                .probabilidadQuorumPct(BigDecimal.valueOf(probabilidad).setScale(1, RoundingMode.HALF_UP))
                .nivelRiesgo(nivelRiesgo)
                .mensajeRecomendacion(mensaje)
                .versionModelo("v1.4-Ensamble-Analitica-Comunal-2026")
                .factoresAnalisis(factores)
                .build();
    }

    private PrediccionQuorumDto generarPrediccionPorDefecto() {
        int totalHabilitados = (int) comuneroRepository.countByCondicionHabilitacionAndEstado(
                CondicionHabilitacion.HABILITADO, EstadoComunero.ACTIVO
        );
        return PrediccionQuorumDto.builder()
                .asambleaTitulo("Sin asambleas registradas")
                .totalHabilitados(totalHabilitados)
                .asistenciaEstimada((int) (totalHabilitados * 0.65))
                .porcentajeEstimado(BigDecimal.valueOf(65.0))
                .quorumRequeridoPct(BigDecimal.valueOf(50.0))
                .quorumRequeridoVotos((int) (totalHabilitados * 0.50))
                .probabilidadQuorumPct(BigDecimal.valueOf(80.0))
                .nivelRiesgo("BAJO")
                .mensajeRecomendacion("Configure una asamblea para obtener la predicción personalizada en tiempo real.")
                .versionModelo("v1.4-Ensamble-Analitica-Comunal-2026")
                .factoresAnalisis(List.of("Modelo en espera de nueva convocatoria de asamblea"))
                .build();
    }
}
