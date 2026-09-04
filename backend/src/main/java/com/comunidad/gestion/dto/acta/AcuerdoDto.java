package com.comunidad.gestion.dto.acta;

import com.comunidad.gestion.entity.enums.EstadoAcuerdo;
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
public class AcuerdoDto {
    private Long id;

    @NotNull(message = "El número correlativo del acuerdo es obligatorio")
    private Integer numero;

    @NotBlank(message = "La descripción del acuerdo es obligatoria")
    private String descripcion;

    @Builder.Default
    private EstadoAcuerdo estado = EstadoAcuerdo.PENDIENTE;
}
