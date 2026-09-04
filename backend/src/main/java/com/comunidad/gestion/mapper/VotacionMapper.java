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

        String candidatosStr = null;
        if (request.getCandidatos() != null && !request.getCandidatos().isEmpty()) {
            candidatosStr = String.join(";;", request.getCandidatos().stream().map(String::trim).filter(s -> !s.isEmpty()).toList());
        }

        return Votacion.builder()
                .asamblea(asamblea)
                .titulo(request.getTitulo().trim())
                .descripcion(request.getDescripcion() != null ? request.getDescripcion().trim() : null)
                .propuesta(request.getPropuesta().trim())
                .candidatos(candidatosStr)
                .tipo(request.getTipo())
                .estado(EstadoVotacion.BORRADOR)
                .build();
    }

    public VotacionResponse toResponse(Votacion votacion,
                                       long aFavor,
                                       long enContra,
                                       long abstencion,
                                       boolean yaVoto) {
        return toResponse(votacion, aFavor, enContra, abstencion, yaVoto, null);
    }

    public VotacionResponse toResponse(Votacion votacion,
                                       long aFavor,
                                       long enContra,
                                       long abstencion,
                                       boolean yaVoto,
                                       java.util.Map<String, Long> votosPorCandidato) {
        if (votacion == null) return null;

        java.util.List<String> listaCandidatos = null;
        if (votacion.getCandidatos() != null && !votacion.getCandidatos().isBlank()) {
            listaCandidatos = java.util.Arrays.asList(votacion.getCandidatos().split(";;"));
        }

        long total = aFavor + enContra + abstencion;
        if (votosPorCandidato != null && !votosPorCandidato.isEmpty()) {
            total = votosPorCandidato.values().stream().mapToLong(Long::longValue).sum();
        }

        BigDecimal pctFavor = BigDecimal.ZERO;
        BigDecimal pctContra = BigDecimal.ZERO;
        BigDecimal pctAbstencion = BigDecimal.ZERO;
        String decision = "SIN_VOTOS";
        String candidatoGanador = null;
        java.util.Map<String, BigDecimal> pctPorCandidato = new java.util.HashMap<>();

        if (votacion.getTipo() == com.comunidad.gestion.entity.enums.TipoVotacion.ELECCION_REPRESENTANTE && votosPorCandidato != null && !votosPorCandidato.isEmpty()) {
            String mejorCandidato = null;
            long maxVotos = -1;
            boolean empate = false;

            for (java.util.Map.Entry<String, Long> entry : votosPorCandidato.entrySet()) {
                String c = entry.getKey();
                Long v = entry.getValue();
                BigDecimal pct = total > 0 
                        ? BigDecimal.valueOf(v).multiply(BigDecimal.valueOf(100)).divide(BigDecimal.valueOf(total), 2, RoundingMode.HALF_UP)
                        : BigDecimal.ZERO;
                pctPorCandidato.put(c, pct);

                if (v > maxVotos) {
                    maxVotos = v;
                    mejorCandidato = c;
                    empate = false;
                } else if (v == maxVotos && maxVotos > 0) {
                    empate = true;
                }
            }

            if (total > 0) {
                if (empate) {
                    decision = "EMPATE";
                } else if (mejorCandidato != null && maxVotos > 0) {
                    decision = "ELECTO: " + mejorCandidato;
                    candidatoGanador = mejorCandidato;
                }
            }
        } else if (total > 0) {
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
                .votosPorCandidato(votosPorCandidato)
                .porcentajePorCandidato(pctPorCandidato)
                .candidatoGanador(candidatoGanador)
                .build();

        return VotacionResponse.builder()
                .id(votacion.getId())
                .asambleaId(votacion.getAsamblea() != null ? votacion.getAsamblea().getId() : null)
                .asambleaTitulo(votacion.getAsamblea() != null ? votacion.getAsamblea().getTitulo() : null)
                .titulo(votacion.getTitulo())
                .descripcion(votacion.getDescripcion())
                .propuesta(votacion.getPropuesta())
                .candidatos(listaCandidatos)
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
