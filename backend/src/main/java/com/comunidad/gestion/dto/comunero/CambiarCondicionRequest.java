package com.comunidad.gestion.dto.comunero;

import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CambiarCondicionRequest {

    @NotNull(message = "La condición de habilitación es obligatoria")
    private CondicionHabilitacion condicion;

    private String motivo;
}
