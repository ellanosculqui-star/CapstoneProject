package com.comunidad.gestion.dto.comunero;

import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoCivil;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import com.comunidad.gestion.entity.enums.TipoComunero;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ComuneroRequest {

    private String codigoComunero;

    private String numeroPadron;

    @NotBlank(message = "El DNI es obligatorio")
    @Pattern(regexp = "^[0-9]{8}$", message = "El DNI debe contener exactamente 8 dígitos numéricos")
    private String dni;

    @NotBlank(message = "Los nombres son obligatorios")
    @Size(max = 100, message = "Los nombres no deben superar los 100 caracteres")
    private String nombres;

    @NotBlank(message = "Los apellidos son obligatorios")
    @Size(max = 100, message = "Los apellidos no deben superar los 100 caracteres")
    private String apellidos;

    private LocalDate fechaNacimiento;

    private EstadoCivil estadoCivil;

    private String ocupacion;

    private TipoComunero tipoComunero;

    private Long sectorId;

    private String caserio;

    private LocalDate fechaIncorporacion;

    @Pattern(regexp = "^$|^[0-9+()\\-\\s]{6,20}$", message = "El formato de teléfono no es válido")
    private String telefono;

    private String direccion;

    private String fotoUrl;

    private EstadoComunero estado;

    private CondicionHabilitacion condicionHabilitacion;

    private String motivoInhabilitacion;
}
