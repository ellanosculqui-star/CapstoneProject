package com.comunidad.gestion.dto.comunero;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SectorDto {
    private Long id;

    @NotBlank(message = "El nombre del sector es obligatorio")
    private String nombre;

    private String descripcion;
    private Boolean activo;
}
