package com.comunidad.gestion.dto.asamblea;

import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CambiarEstadoAsambleaRequest {

    @NotNull(message = "El nuevo estado es obligatorio")
    private EstadoAsamblea estado;
}
