package com.comunidad.gestion.mapper;

import com.comunidad.gestion.dto.votacion.CrearVotacionRequest;
import com.comunidad.gestion.dto.votacion.ResultadoVotacionDto;
import com.comunidad.gestion.dto.votacion.VotacionResponse;
import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.Votacion;
import com.comunidad.gestion.entity.enums.EstadoVotacion;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Component
public class VotacionMapper {

    public Votacion toEntity(CrearVotacionRequest request, Asamblea asamblea) {
        if (request == null) return null;

        return Votacion.builder()
                .asamblea(asamblea)
                .titulo(request.getTitulo().trim())
                .descripcion(request.getDescripcion() != null ? request.getDescripcion().trim() : null)
                .propuesta(request.getPropuesta().trim())
                .tipo(request.getTipo())
                .estado(EstadoVotacion.BORRADOR)
                .build();
    }

    public VotacionResponse toResponse(Votacion votacion,
                                       long aFavor,
                                       long enContra,
                                       long abstencion,
                                       boolean yaVoto) {
        if (votacion == null) return null;

        long total = aFavor + enContra + abstencion;
        BigDecimal pctFavor = BigDecimal.ZERO;
        BigDecimal pctContra = BigDecimal.ZERO;
        BigDecimal pctAbstencion = BigDecimal.ZERO;
        String decision = "SIN_VOTOS";

        if (total > 0) {
            pctFavor = BigDecimal.valueOf(aFavor).multiply(BigDecimal.valueOf(100)).divide(BigDecimal.valueOf(total), 2, RoundingMode.HALF_UP);
            pctContra = BigDecimal.valueOf(enContra).multiply(BigDecimal.valueOf(100)).divide(BigDecimal.valueOf(total), 2, RoundingMode.HALF_UP);
            pctAbstencion = BigDecimal.valueOf(abstencion).multiply(BigDecimal.valueOf(100)).divide(BigDecimal.valueOf(total), 2, RoundingMode.HALF_UP);

            if (aFavor > enContra) {
                decision = "APROBADA";
            } else if (enContra > aFavor) {
                decision = "RECHAZADA";
            } else {
                decision = "EMPATE";
            }
        }

        ResultadoVotacionDto resultado = ResultadoVotacionDto.builder()
                .votosAFavor(aFavor)
                .votosEnContra(enContra)
                .votosAbstencion(abstencion)
                .totalVotosEmitidos(total)
                .porcentajeAFavor(pctFavor)
                .porcentajeEnContra(pctContra)
                .porcentajeAbstencion(pctAbstencion)
                .resultadoDecision(decision)
                .build();

        return VotacionResponse.builder()
                .id(votacion.getId())
                .asambleaId(votacion.getAsamblea() != null ? votacion.getAsamblea().getId() : null)
                .asambleaTitulo(votacion.getAsamblea() != null ? votacion.getAsamblea().getTitulo() : null)
                .titulo(votacion.getTitulo())
                .descripcion(votacion.getDescripcion())
                .propuesta(votacion.getPropuesta())
                .tipo(votacion.getTipo())
                .estado(votacion.getEstado())
                .fechaApertura(votacion.getFechaApertura())
                .fechaCierre(votacion.getFechaCierre())
                .fechaCreacion(votacion.getFechaCreacion())
                .resultado(resultado)
                .yaVotoUsuarioActual(yaVoto)
                .build();
    }
}
