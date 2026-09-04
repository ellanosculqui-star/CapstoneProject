package com.comunidad.gestion.dto.acta;

import com.comunidad.gestion.entity.enums.EstadoActa;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ActaRequest {

    @NotNull(message = "La asamblea es obligatoria")
    private Long asambleaId;

    @NotBlank(message = "El número de acta es obligatorio")
    private String numeroActa;

    @NotNull(message = "La fecha es obligatoria")
    private LocalDate fecha;

    @NotBlank(message = "El lugar es obligatorio")
    private String lugar;

    @NotBlank(message = "La agenda es obligatoria")
    private String agenda;

    private String resumen;
    private String resultadosVotaciones;
    private String observaciones;

    @Builder.Default
    private EstadoActa estado = EstadoActa.BORRADOR;

    @Builder.Default
    private List<AcuerdoDto> acuerdos = new ArrayList<>();
}
