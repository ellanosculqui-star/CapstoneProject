package com.comunidad.gestion.mapper;

import com.comunidad.gestion.dto.acta.ActaRequest;
import com.comunidad.gestion.dto.acta.ActaResponse;
import com.comunidad.gestion.dto.acta.AcuerdoDto;
import com.comunidad.gestion.entity.Acta;
import com.comunidad.gestion.entity.Acuerdo;
import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.Usuario;
import com.comunidad.gestion.entity.enums.EstadoAcuerdo;
import com.comunidad.gestion.entity.enums.EstadoActa;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ActaMapper {

    public Acta toEntity(ActaRequest request, Asamblea asamblea, Usuario responsable) {
        if (request == null) return null;

        Acta acta = Acta.builder()
                .asamblea(asamblea)
                .numeroActa(request.getNumeroActa().trim())
                .fecha(request.getFecha())
                .lugar(request.getLugar().trim())
                .agenda(request.getAgenda().trim())
                .resumen(request.getResumen())
                .resultadosVotaciones(request.getResultadosVotaciones())
                .observaciones(request.getObservaciones())
                .estado(request.getEstado() != null ? request.getEstado() : EstadoActa.BORRADOR)
                .responsable(responsable)
                .acuerdos(new ArrayList<>())
                .build();

        if (request.getAcuerdos() != null) {
            for (AcuerdoDto aDto : request.getAcuerdos()) {
                Acuerdo acuerdo = Acuerdo.builder()
                        .acta(acta)
                        .numero(aDto.getNumero())
                        .descripcion(aDto.getDescripcion())
                        .estado(aDto.getEstado() != null ? aDto.getEstado() : EstadoAcuerdo.PENDIENTE)
                        .build();
                acta.getAcuerdos().add(acuerdo);
            }
        }

        return acta;
    }

    public void updateEntity(Acta acta, ActaRequest request) {
        acta.setNumeroActa(request.getNumeroActa().trim());
        acta.setFecha(request.getFecha());
        acta.setLugar(request.getLugar().trim());
        acta.setAgenda(request.getAgenda().trim());
        acta.setResumen(request.getResumen());
        acta.setResultadosVotaciones(request.getResultadosVotaciones());
        acta.setObservaciones(request.getObservaciones());
        if (request.getEstado() != null) {
            acta.setEstado(request.getEstado());
        }

        acta.getAcuerdos().clear();
        if (request.getAcuerdos() != null) {
            for (AcuerdoDto aDto : request.getAcuerdos()) {
                Acuerdo acuerdo = Acuerdo.builder()
                        .acta(acta)
                        .numero(aDto.getNumero())
                        .descripcion(aDto.getDescripcion())
                        .estado(aDto.getEstado() != null ? aDto.getEstado() : EstadoAcuerdo.PENDIENTE)
                        .build();
                acta.getAcuerdos().add(acuerdo);
            }
        }
    }

    public ActaResponse toResponse(Acta acta, Long totalAsistentes, Long totalAusentes, Integer habilitados) {
        if (acta == null) return null;

        String respNombre = acta.getResponsable() != null ?
                (acta.getResponsable().getNombres() + " " + acta.getResponsable().getApellidos()) : "Secretario General";

        List<AcuerdoDto> acuerdosDto = acta.getAcuerdos().stream()
                .map(a -> AcuerdoDto.builder()
                        .id(a.getId())
                        .numero(a.getNumero())
                        .descripcion(a.getDescripcion())
                        .estado(a.getEstado())
                        .build())
                .collect(Collectors.toList());

        long presentes = totalAsistentes != null ? totalAsistentes : 0L;
        long ausentes = totalAusentes != null ? totalAusentes : 0L;
        int hab = habilitados != null ? habilitados : 0;
        BigDecimal pct = BigDecimal.ZERO;
        boolean quorum = false;

        if (hab > 0) {
            pct = BigDecimal.valueOf(presentes).multiply(BigDecimal.valueOf(100)).divide(BigDecimal.valueOf(hab), 2, RoundingMode.HALF_UP);
            quorum = pct.compareTo(acta.getAsamblea().getQuorumMinimoPct()) >= 0;
        }

        List<com.comunidad.gestion.dto.acta.FirmaActaDto> firmasDto = new ArrayList<>();
        if (acta.getFirmas() != null) {
            firmasDto = acta.getFirmas().stream()
                    .map(f -> com.comunidad.gestion.dto.acta.FirmaActaDto.builder()
                            .id(f.getId())
                            .comuneroId(f.getComunero() != null ? f.getComunero().getId() : null)
                            .comuneroDni(f.getComunero() != null ? f.getComunero().getDni() : "")
                            .comuneroNombreCompleto(f.getComunero() != null ? (f.getComunero().getNombres() + " " + f.getComunero().getApellidos()) : "")
                            .comuneroCodigo(f.getComunero() != null ? f.getComunero().getCodigoComunero() : "")
                            .fechaHoraFirma(f.getFechaHoraFirma())
                            .trazoFirma(f.getTrazoFirma())
                            .dispositivo(f.getDispositivo())
                            .build())
                    .collect(Collectors.toList());
        }

        return ActaResponse.builder()
                .id(acta.getId())
                .asambleaId(acta.getAsamblea() != null ? acta.getAsamblea().getId() : null)
                .asambleaTitulo(acta.getAsamblea() != null ? acta.getAsamblea().getTitulo() : "")
                .asambleaTipo(acta.getAsamblea() != null ? acta.getAsamblea().getTipo() : null)
                .numeroActa(acta.getNumeroActa())
                .fecha(acta.getFecha())
                .lugar(acta.getLugar())
                .agenda(acta.getAgenda())
                .resumen(acta.getResumen())
                .resultadosVotaciones(acta.getResultadosVotaciones())
                .observaciones(acta.getObservaciones())
                .estado(acta.getEstado())
                .responsableNombre(respNombre)
                .totalHabilitados(hab)
                .totalAsistentes(presentes)
                .totalAusentes(ausentes)
                .porcentajeAsistencia(pct)
                .quorumAlcanzado(quorum)
                .acuerdos(acuerdosDto)
                .firmas(firmasDto)
                .totalFirmas(firmasDto.size())
                .fechaCreacion(acta.getFechaCreacion())
                .fechaModificacion(acta.getFechaModificacion())
                .build();
    }
}
