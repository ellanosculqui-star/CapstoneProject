package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.dto.acta.ActaResponse;
import com.comunidad.gestion.dto.asistencia.AsistenciaResponse;
import com.comunidad.gestion.dto.asistencia.QuorumResponse;
import com.comunidad.gestion.dto.comunero.ComuneroResponse;
import com.comunidad.gestion.dto.multa.MultaResponse;
import com.comunidad.gestion.dto.multa.PagoMultaResponse;
import com.comunidad.gestion.dto.reportes.ReporteFilterDto;
import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import com.comunidad.gestion.entity.enums.EstadoMulta;
import com.comunidad.gestion.service.ReporteService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/v1/reportes")
@RequiredArgsConstructor
@Tag(name = "12. Reportes Generales", description = "Generación de reportes tabulares y consolidados para impresión")
public class ReporteController {

    private final ReporteService reporteService;

    @GetMapping("/padron")
    @Operation(summary = "Reporte de padrón de comuneros con filtros")
    public ResponseEntity<ApiResponse<List<ComuneroResponse>>> reportePadron(
            @RequestParam(required = false) Long sectorId,
            @RequestParam(required = false) EstadoComunero estado,
            @RequestParam(required = false) CondicionHabilitacion condicion) {

        ReporteFilterDto filtro = ReporteFilterDto.builder()
                .sectorId(sectorId)
                .estadoComunero(estado)
                .condicionHabilitacion(condicion)
                .build();

        List<ComuneroResponse> list = reporteService.generarReportePadron(filtro);
        return ResponseEntity.ok(ApiResponse.success(list));
    }

    @GetMapping("/asistencias")
    @Operation(summary = "Reporte de asistencias e inasistencias")
    public ResponseEntity<ApiResponse<List<AsistenciaResponse>>> reporteAsistencias(
            @RequestParam(required = false) Long asambleaId,
            @RequestParam(required = false) Long comuneroId) {

        ReporteFilterDto filtro = ReporteFilterDto.builder()
                .asambleaId(asambleaId)
                .comuneroId(comuneroId)
                .build();

        List<AsistenciaResponse> list = reporteService.generarReporteAsistencia(filtro);
        return ResponseEntity.ok(ApiResponse.success(list));
    }

    @GetMapping("/quorum")
    @Operation(summary = "Reporte de quórum de una asamblea")
    public ResponseEntity<ApiResponse<QuorumResponse>> reporteQuorum(@RequestParam Long asambleaId) {
        QuorumResponse response = reporteService.generarReporteQuorum(asambleaId);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @GetMapping("/multas")
    @Operation(summary = "Reporte de multas emitidas")
    public ResponseEntity<ApiResponse<List<MultaResponse>>> reporteMultas(
            @RequestParam(required = false) Long comuneroId,
            @RequestParam(required = false) Long asambleaId,
            @RequestParam(required = false) EstadoMulta estado,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaDesde,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaHasta) {

        ReporteFilterDto filtro = ReporteFilterDto.builder()
                .comuneroId(comuneroId)
                .asambleaId(asambleaId)
                .estadoMulta(estado)
                .fechaDesde(fechaDesde)
                .fechaHasta(fechaHasta)
                .build();

        List<MultaResponse> list = reporteService.generarReporteMultas(filtro);
        return ResponseEntity.ok(ApiResponse.success(list));
    }

    @GetMapping("/pagos")
    @Operation(summary = "Reporte de recaudación y pagos de multas")
    public ResponseEntity<ApiResponse<List<PagoMultaResponse>>> reportePagos(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaDesde,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaHasta) {

        ReporteFilterDto filtro = ReporteFilterDto.builder()
                .fechaDesde(fechaDesde)
                .fechaHasta(fechaHasta)
                .build();

        List<PagoMultaResponse> list = reporteService.generarReportePagos(filtro);
        return ResponseEntity.ok(ApiResponse.success(list));
    }

    @GetMapping("/actas")
    @Operation(summary = "Reporte general de actas y acuerdos")
    public ResponseEntity<ApiResponse<List<ActaResponse>>> reporteActas(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaDesde,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaHasta) {

        ReporteFilterDto filtro = ReporteFilterDto.builder()
                .fechaDesde(fechaDesde)
                .fechaHasta(fechaHasta)
                .build();

        List<ActaResponse> list = reporteService.generarReporteActas(filtro);
        return ResponseEntity.ok(ApiResponse.success(list));
    }
}
