package com.comunidad.gestion.dto.votacion;

import com.comunidad.gestion.entity.enums.TipoVotacion;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CrearVotacionRequest {

    @NotBlank(message = "El título de la votación es obligatorio")
    private String titulo;

    private String descripcion;

    @NotBlank(message = "La propuesta o moción a votar es obligatoria")
    private String propuesta;

    @NotNull(message = "El tipo de votación es obligatorio")
    @Builder.Default
    private TipoVotacion tipo = TipoVotacion.MAYORIA_SIMPLE;

    private java.util.List<String> candidatos;
}
