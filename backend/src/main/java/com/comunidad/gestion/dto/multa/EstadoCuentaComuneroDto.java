package com.comunidad.gestion.dto.multa;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EstadoCuentaComuneroDto {
    private Long comuneroId;
    private String codigoComunero;
    private String dni;
    private String nombreCompleto;
    private String sectorNombre;
    private BigDecimal totalMultasEmitidas;
    private BigDecimal totalPagado;
    private BigDecimal totalDeudaPendiente;
    private Integer cantidadMultasPendientes;
    private List<MultaResponse> multas;
}
