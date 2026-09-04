package com.comunidad.gestion.dto.asistencia;

import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegistrarAsistenciaRequest {

    @NotNull(message = "El comunero es obligatorio")
    private Long comuneroId;

    @NotNull(message = "El estado de asistencia es obligatorio")
    private EstadoAsistencia estado;

    private String observacion;
}
