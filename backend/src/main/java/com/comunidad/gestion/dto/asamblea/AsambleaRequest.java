package com.comunidad.gestion.dto.asamblea;

import com.comunidad.gestion.entity.enums.TipoAsamblea;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AsambleaRequest {

    @NotBlank(message = "El título de la asamblea es obligatorio")
    private String titulo;

    @NotBlank(message = "La agenda de la asamblea es obligatoria")
    private String agenda;

    @NotNull(message = "El tipo de asamblea es obligatorio")
    private TipoAsamblea tipo;

    @NotNull(message = "La fecha es obligatoria")
    private LocalDate fecha;

    @NotNull(message = "La hora de inicio es obligatoria")
    private LocalTime horaInicio;

    private LocalTime horaFin;

    @NotBlank(message = "El lugar es obligatorio")
    private String lugar;

    @DecimalMin(value = "1.00", message = "El quórum mínimo debe ser al menos 1%")
    @DecimalMax(value = "100.00", message = "El quórum mínimo no puede exceder 100%")
    @Builder.Default
    private BigDecimal quorumMinimoPct = new BigDecimal("50.00");
}
