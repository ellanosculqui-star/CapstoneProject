package com.comunidad.gestion.dto.multa;

import com.comunidad.gestion.entity.enums.MetodoPago;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegistrarPagoRequest {

    @NotNull(message = "El monto a pagar es obligatorio")
    @DecimalMin(value = "0.01", message = "El monto debe ser mayor a 0")
    private BigDecimal montoPagado;

    @NotNull(message = "El método de pago es obligatorio")
    @Builder.Default
    private MetodoPago metodoPago = MetodoPago.EFECTIVO;

    private String observacion;
}
