package com.comunidad.gestion.mapper;

import com.comunidad.gestion.dto.asamblea.AsambleaRequest;
import com.comunidad.gestion.dto.asamblea.AsambleaResponse;
import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Component
public class AsambleaMapper {

    public Asamblea toEntity(AsambleaRequest request) {
        if (request == null) return null;

        return Asamblea.builder()
                .titulo(request.getTitulo().trim())
                .agenda(request.getAgenda().trim())
                .tipo(request.getTipo())
                .fecha(request.getFecha())
                .horaInicio(request.getHoraInicio())
                .horaFin(request.getHoraFin())
                .lugar(request.getLugar().trim())
                .estado(EstadoAsamblea.PROGRAMADA)
                .quorumMinimoPct(request.getQuorumMinimoPct() != null ? request.getQuorumMinimoPct() : new BigDecimal("50.00"))
                .multasGeneradas(false)
                .build();
    }

    public void updateEntity(Asamblea asamblea, AsambleaRequest request) {
        asamblea.setTitulo(request.getTitulo().trim());
        asamblea.setAgenda(request.getAgenda().trim());
        asamblea.setTipo(request.getTipo());
        asamblea.setFecha(request.getFecha());
        asamblea.setHoraInicio(request.getHoraInicio());
        asamblea.setHoraFin(request.getHoraFin());
        asamblea.setLugar(request.getLugar().trim());
        if (request.getQuorumMinimoPct() != null) {
            asamblea.setQuorumMinimoPct(request.getQuorumMinimoPct());
        }
    }

    public AsambleaResponse toResponse(Asamblea asamblea, Long totalAsistentes, Long totalAusentes, Integer habilitadosTotales) {
        if (asamblea == null) return null;

        long presentes = totalAsistentes != null ? totalAsistentes : 0L;
        long ausentes = totalAusentes != null ? totalAusentes : 0L;
        int baseHabilitados = asamblea.getTotalHabilitadosCorte() != null ? asamblea.getTotalHabilitadosCorte() : (habilitadosTotales != null ? habilitadosTotales : 0);

        BigDecimal porcentaje = BigDecimal.ZERO;
        boolean quorumAlcanzado = false;

        if (baseHabilitados > 0) {
            porcentaje = BigDecimal.valueOf(presentes)
                    .multiply(BigDecimal.valueOf(100))
                    .divide(BigDecimal.valueOf(baseHabilitados), 2, RoundingMode.HALF_UP);
            quorumAlcanzado = porcentaje.compareTo(asamblea.getQuorumMinimoPct()) >= 0;
        }

        return AsambleaResponse.builder()
                .id(asamblea.getId())
                .titulo(asamblea.getTitulo())
                .agenda(asamblea.getAgenda())
                .tipo(asamblea.getTipo())
                .fecha(asamblea.getFecha())
                .horaInicio(asamblea.getHoraInicio())
                .horaFin(asamblea.getHoraFin())
                .lugar(asamblea.getLugar())
                .estado(asamblea.getEstado())
                .quorumMinimoPct(asamblea.getQuorumMinimoPct())
                .totalHabilitadosCorte(asamblea.getTotalHabilitadosCorte())
                .multasGeneradas(asamblea.getMultasGeneradas())
                .totalAsistentes(presentes)
                .totalAusentes(ausentes)
                .porcentajeAsistencia(porcentaje)
                .quorumAlcanzado(quorumAlcanzado)
                .fechaCreacion(asamblea.getFechaCreacion())
                .build();
    }
}
