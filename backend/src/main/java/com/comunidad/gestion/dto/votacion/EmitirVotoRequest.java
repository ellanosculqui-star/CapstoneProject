package com.comunidad.gestion.dto.votacion;

import com.comunidad.gestion.entity.enums.OpcionVoto;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmitirVotoRequest {

    @NotNull(message = "El comunero votante es obligatorio")
    private Long comuneroId;

    @NotNull(message = "La opción de voto es obligatoria")
    private OpcionVoto opcion;

    private String candidatoElegido;
}
