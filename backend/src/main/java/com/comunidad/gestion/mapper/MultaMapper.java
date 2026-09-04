package com.comunidad.gestion.mapper;

import com.comunidad.gestion.dto.multa.ConfigMultaResponse;
import com.comunidad.gestion.dto.multa.MultaResponse;
import com.comunidad.gestion.dto.multa.PagoMultaResponse;
import com.comunidad.gestion.entity.Comunero;
import com.comunidad.gestion.entity.ConfigMulta;
import com.comunidad.gestion.entity.Multa;
import com.comunidad.gestion.entity.PagoMulta;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class MultaMapper {

    public MultaResponse toResponse(Multa multa) {
        if (multa == null) return null;

        Comunero c = multa.getComunero();
        String comuneroNombre = c != null ? (c.getApellidos() + ", " + c.getNombres()) : "";
        String sectorNombre = (c != null && c.getSector() != null) ? c.getSector().getNombre() : "";
        String asambleaTitulo = multa.getAsamblea() != null ? multa.getAsamblea().getTitulo() : "Sanción Directa";

        BigDecimal pagado = multa.getMontoOriginal().subtract(multa.getSaldoPendiente());

        return MultaResponse.builder()
                .id(multa.getId())
                .comuneroId(c != null ? c.getId() : null)
                .comuneroCodigo(c != null ? c.getCodigoComunero() : null)
                .comuneroDni(c != null ? c.getDni() : null)
                .comuneroNombreCompleto(comuneroNombre)
                .sectorNombre(sectorNombre)
                .asambleaId(multa.getAsamblea() != null ? multa.getAsamblea().getId() : null)
                .asambleaTitulo(asambleaTitulo)
                .concepto(multa.getConcepto())
                .montoOriginal(multa.getMontoOriginal())
                .saldoPendiente(multa.getSaldoPendiente())
                .totalPagado(pagado)
                .estado(multa.getEstado())
                .fechaEmision(multa.getFechaEmision())
                .fechaRegistro(multa.getFechaRegistro())
                .build();
    }

    public PagoMultaResponse toPagoResponse(PagoMulta pago) {
        if (pago == null) return null;

        Comunero c = (pago.getMulta() != null) ? pago.getMulta().getComunero() : null;
        String comuneroNombre = c != null ? (c.getApellidos() + ", " + c.getNombres()) : "";
        String dni = c != null ? c.getDni() : "";
        String registradoPorNombre = pago.getRegistradoPor() != null ?
                (pago.getRegistradoPor().getNombres() + " " + pago.getRegistradoPor().getApellidos()) : "Tesorero";

        return PagoMultaResponse.builder()
                .id(pago.getId())
                .multaId(pago.getMulta() != null ? pago.getMulta().getId() : null)
                .comuneroNombreCompleto(comuneroNombre)
                .comuneroDni(dni)
                .montoPagado(pago.getMontoPagado())
                .fechaPago(pago.getFechaPago())
                .numeroRecibo(pago.getNumeroRecibo())
                .metodoPago(pago.getMetodoPago())
                .observacion(pago.getObservacion())
                .registradoPorNombre(registradoPorNombre)
                .fechaRegistro(pago.getFechaRegistro())
                .build();
    }

    public ConfigMultaResponse toConfigResponse(ConfigMulta config) {
        if (config == null) return null;

        return ConfigMultaResponse.builder()
                .id(config.getId())
                .concepto(config.getConcepto())
                .monto(config.getMonto())
                .activa(config.getActiva())
                .fechaActualizacion(config.getFechaActualizacion())
                .build();
    }
}
