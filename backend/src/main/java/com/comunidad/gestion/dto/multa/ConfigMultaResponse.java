package com.comunidad.gestion.dto.multa;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConfigMultaResponse {
    private Long id;
    private String concepto;
    private BigDecimal monto;
    private Boolean activa;
    private LocalDateTime fechaActualizacion;
}
