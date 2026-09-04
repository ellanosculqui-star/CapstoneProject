package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.multa.*;
import com.comunidad.gestion.entity.enums.EstadoMulta;
import com.comunidad.gestion.service.MultaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/v1/multas")
@RequiredArgsConstructor
@Tag(name = "8. Multas y Recaudación", description = "Configuración tarifaria, generación masiva por inasistencia, cobros y amortizaciones")
public class MultaController {

    private final MultaService multaService;

    @PostMapping("/configuracion")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'TESORERO')")
    @Operation(summary = "Configurar monto arancelario de multa por inasistencia")
    public ResponseEntity<ApiResponse<ConfigMultaResponse>> configurarMontoMulta(@Valid @RequestBody ConfigMultaRequest request) {
        ConfigMultaResponse response = multaService.configurarMontoMulta(request);
        return ResponseEntity.ok(ApiResponse.success("Configuración de multa actualizada exitosamente", response));
    }

    @GetMapping("/configuracion/actual")
    @Operation(summary = "Obtener el monto vigente configurado para multas")
    public ResponseEntity<ApiResponse<ConfigMultaResponse>> obtenerConfiguracionActual() {
        ConfigMultaResponse response = multaService.obtenerConfiguracionActual();
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @PostMapping("/asamblea/{asambleaId}/generar")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'TESORERO', 'PRESIDENTE')")
    @Operation(summary = "Generar multas automáticas a todos los comuneros ausentes de una asamblea finalizada")
    public ResponseEntity<ApiResponse<List<MultaResponse>>> generarMultasPorInasistencia(@PathVariable Long asambleaId) {
        List<MultaResponse> multas = multaService.generarMultasPorInasistencia(asambleaId);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Se generaron " + multas.size() + " multas automáticas por inasistencia", multas));
    }

    @PostMapping("/{id}/pagos")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'TESORERO')")
    @Operation(summary = "Registrar abono o pago total de una multa")
    public ResponseEntity<ApiResponse<PagoMultaResponse>> registrarPago(
            @PathVariable Long id,
            @Valid @RequestBody RegistrarPagoRequest request) {
        PagoMultaResponse response = multaService.registrarPago(id, request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Pago registrado exitosamente con recibo #" + response.getNumeroRecibo(), response));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Consultar detalle de una multa por ID")
    public ResponseEntity<ApiResponse<MultaResponse>> obtenerPorId(@PathVariable Long id) {
        MultaResponse response = multaService.obtenerPorId(id);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @GetMapping
    @Operation(summary = "Listar multas con filtros de comunero, asamblea, estado y fechas")
    public ResponseEntity<ApiResponse<PagedResponse<MultaResponse>>> listarMultas(
            @RequestParam(required = false) String busqueda,
            @RequestParam(required = false) Long comuneroId,
            @RequestParam(required = false) Long asambleaId,
            @RequestParam(required = false) EstadoMulta estado,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaDesde,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaHasta,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        var pageable = PageRequest.of(page, size, Sort.by("fechaEmision").descending());
        PagedResponse<MultaResponse> response = multaService.listarMultas(busqueda, comuneroId, asambleaId, estado, fechaDesde, fechaHasta, pageable);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @GetMapping("/comunero/{comuneroId}/estado-cuenta")
    @Operation(summary = "Obtener estado de cuenta integral de un comunero (deuda, multas, pagos)")
    public ResponseEntity<ApiResponse<EstadoCuentaComuneroDto>> obtenerEstadoCuentaComunero(@PathVariable Long comuneroId) {
        EstadoCuentaComuneroDto response = multaService.obtenerEstadoCuentaComunero(comuneroId);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @GetMapping("/resumen-financiero")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'PRESIDENTE', 'TESORERO')")
    @Operation(summary = "Resumen global de multas emitidas, recaudación y saldos pendientes")
    public ResponseEntity<ApiResponse<ResumenFinancieroDto>> obtenerResumenFinanciero() {
        ResumenFinancieroDto response = multaService.obtenerResumenFinanciero();
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @GetMapping("/pagos")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'TESORERO', 'PRESIDENTE')")
    @Operation(summary = "Listar historial de recibos de pagos")
    public ResponseEntity<ApiResponse<PagedResponse<PagoMultaResponse>>> listarPagos(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaDesde,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaHasta,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        var pageable = PageRequest.of(page, size, Sort.by("fechaPago").descending());
        PagedResponse<PagoMultaResponse> response = multaService.listarPagos(fechaDesde, fechaHasta, pageable);
        return ResponseEntity.ok(ApiResponse.success(response));
    }
}
