package com.comunidad.gestion.dto.comunero;

import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ComuneroSummaryDto {
    private Long id;
    private String codigoComunero;
    private String dni;
    private String nombreCompleto;
    private String sectorNombre;
    private EstadoComunero estado;
    private CondicionHabilitacion condicionHabilitacion;
}
