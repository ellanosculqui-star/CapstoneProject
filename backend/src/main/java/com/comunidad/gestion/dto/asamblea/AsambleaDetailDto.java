package com.comunidad.gestion.dto.asamblea;

import com.comunidad.gestion.dto.asistencia.QuorumResponse;
import com.comunidad.gestion.dto.votacion.VotacionResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AsambleaDetailDto {
    private AsambleaResponse asamblea;
    private QuorumResponse quorum;
    private List<VotacionResponse> votaciones;
    private Boolean tieneActa;
    private Long actaId;
}
