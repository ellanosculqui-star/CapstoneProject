package com.comunidad.gestion.dto.multa;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResumenFinancieroDto {
    private BigDecimal totalMultasEmitidas;
    private BigDecimal totalRecaudado;
    private BigDecimal totalDeudaPorCobrar;
    private Long cantidadMultasPendientes;
    private Long cantidadMultasPagadas;
    private Long cantidadMultasAnuladas;
}
