package com.comunidad.gestion.dto.comunero;

import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoCivil;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import com.comunidad.gestion.entity.enums.TipoComunero;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ComuneroResponse {
    private Long id;
    private String codigoComunero;
    private String numeroPadron;
    private String dni;
    private String nombres;
    private String apellidos;
    private String nombreCompleto;
    private LocalDate fechaNacimiento;
    private EstadoCivil estadoCivil;
    private String ocupacion;
    private TipoComunero tipoComunero;
    private Long sectorId;
    private String sectorNombre;
    private String caserio;
    private LocalDate fechaIncorporacion;
    private String telefono;
    private String direccion;
    private String fotoUrl;
    private EstadoComunero estado;
    private CondicionHabilitacion condicionHabilitacion;
    private String motivoInhabilitacion;
    private Long usuarioId;
    private String username;
    private BigDecimal totalDeudaPendiente;
    private Long totalAsistencias;
    private Long totalInasistencias;
    private LocalDateTime fechaRegistro;
    private LocalDateTime fechaModificacion;
}
