package com.comunidad.gestion.mapper;

import com.comunidad.gestion.dto.asistencia.AsistenciaPadronDto;
import com.comunidad.gestion.dto.asistencia.AsistenciaResponse;
import com.comunidad.gestion.entity.Asistencia;
import com.comunidad.gestion.entity.Comunero;
import org.springframework.stereotype.Component;

@Component
public class AsistenciaMapper {

    public AsistenciaResponse toResponse(Asistencia asistencia) {
        if (asistencia == null) return null;

        Comunero c = asistencia.getComunero();
        String comuneroNombreCompleto = c != null ? (c.getApellidos() + ", " + c.getNombres()) : "";
        String sectorNombre = (c != null && c.getSector() != null) ? c.getSector().getNombre() : "";
        String registradoPorNombre = asistencia.getRegistradoPor() != null ?
                (asistencia.getRegistradoPor().getNombres() + " " + asistencia.getRegistradoPor().getApellidos()) : "Sistema";

        return AsistenciaResponse.builder()
                .id(asistencia.getId())
                .asambleaId(asistencia.getAsamblea() != null ? asistencia.getAsamblea().getId() : null)
                .comuneroId(c != null ? c.getId() : null)
                .comuneroCodigo(c != null ? c.getCodigoComunero() : null)
                .comuneroDni(c != null ? c.getDni() : null)
                .comuneroNombreCompleto(comuneroNombreCompleto)
                .sectorNombre(sectorNombre)
                .estado(asistencia.getEstado())
                .fechaHoraRegistro(asistencia.getFechaHoraRegistro())
                .observacion(asistencia.getObservacion())
                .registradoPorNombre(registradoPorNombre)
                .build();
    }

    public AsistenciaPadronDto toPadronDto(Comunero comunero, Asistencia asistencia) {
        if (comunero == null) return null;

        return AsistenciaPadronDto.builder()
                .comuneroId(comunero.getId())
                .codigoComunero(comunero.getCodigoComunero())
                .dni(comunero.getDni())
                .nombreCompleto(comunero.getApellidos() + ", " + comunero.getNombres())
                .sectorNombre(comunero.getSector() != null ? comunero.getSector().getNombre() : "")
                .condicionHabilitacion(comunero.getCondicionHabilitacion())
                .asistenciaId(asistencia != null ? asistencia.getId() : null)
                .estadoAsistencia(asistencia != null ? asistencia.getEstado() : null)
                .fechaHoraRegistro(asistencia != null ? asistencia.getFechaHoraRegistro() : null)
                .observacion(asistencia != null ? asistencia.getObservacion() : null)
                .build();
    }
}
