package com.comunidad.gestion.dto.multa;

import com.comunidad.gestion.entity.enums.EstadoMulta;
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
public class MultaResponse {
    private Long id;
    private Long comuneroId;
    private String comuneroCodigo;
    private String comuneroDni;
    private String comuneroNombreCompleto;
    private String sectorNombre;
    private Long asambleaId;
    private String asambleaTitulo;
    private String concepto;
    private BigDecimal montoOriginal;
    private BigDecimal saldoPendiente;
    private BigDecimal totalPagado;
    private EstadoMulta estado;
    private LocalDate fechaEmision;
    private LocalDateTime fechaRegistro;
}
