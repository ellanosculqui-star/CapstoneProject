package com.comunidad.gestion.dto.multa;

import com.comunidad.gestion.entity.enums.MetodoPago;
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
public class PagoMultaResponse {
    private Long id;
    private Long multaId;
    private String comuneroNombreCompleto;
    private String comuneroDni;
    private BigDecimal montoPagado;
    private LocalDate fechaPago;
    private String numeroRecibo;
    private MetodoPago metodoPago;
    private String observacion;
    private String registradoPorNombre;
    private LocalDateTime fechaRegistro;
}
