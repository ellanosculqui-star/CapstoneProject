package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.acta.ActaRequest;
import com.comunidad.gestion.dto.acta.ActaResponse;
import com.comunidad.gestion.entity.enums.EstadoActa;
import com.comunidad.gestion.service.ActaService;
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

@RestController
@RequestMapping("/api/v1/actas")
@RequiredArgsConstructor
@Tag(name = "9. Actas de Asambleas", description = "Elaboración de actas, acuerdos, resultados y vista imprimible")
public class ActaController {

    private final ActaService actaService;

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'SECRETARIO')")
    @Operation(summary = "Registrar nueva acta comunal")
    public ResponseEntity<ApiResponse<ActaResponse>> crearActa(@Valid @RequestBody ActaRequest request) {
        ActaResponse creado = actaService.crearActa(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Acta registrada exitosamente", creado));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'SECRETARIO')")
    @Operation(summary = "Actualizar contenido y acuerdos de un acta")
    public ResponseEntity<ApiResponse<ActaResponse>> actualizarActa(@PathVariable Long id,
                                                                   @Valid @RequestBody ActaRequest request) {
        ActaResponse actualizado = actaService.actualizarActa(id, request);
        return ResponseEntity.ok(ApiResponse.success("Acta actualizada correctamente", actualizado));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Consultar acta por ID")
    public ResponseEntity<ApiResponse<ActaResponse>> obtenerPorId(@PathVariable Long id) {
        ActaResponse response = actaService.obtenerPorId(id);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @GetMapping("/asamblea/{asambleaId}")
    @Operation(summary = "Obtener acta vinculada a una asamblea")
    public ResponseEntity<ApiResponse<ActaResponse>> obtenerPorAsambleaId(@PathVariable Long asambleaId) {
        ActaResponse response = actaService.obtenerPorAsambleaId(asambleaId);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @GetMapping("/asamblea/{asambleaId}/borrador-automatico")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'SECRETARIO', 'PRESIDENTE')")
    @Operation(summary = "Generar borrador automático de acta recopilando quórum, asistencias y votaciones")
    public ResponseEntity<ApiResponse<ActaResponse>> generarBorradorAutomatico(@PathVariable Long asambleaId) {
        ActaResponse borrador = actaService.generarBorradorAutomatico(asambleaId);
        return ResponseEntity.ok(ApiResponse.success(borrador));
    }

    @PatchMapping("/{id}/aprobar")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'PRESIDENTE')")
    @Operation(summary = "Aprobar formalmente el acta de la asamblea")
    public ResponseEntity<ApiResponse<ActaResponse>> aprobarActa(@PathVariable Long id) {
        ActaResponse response = actaService.aprobarActa(id);
        return ResponseEntity.ok(ApiResponse.success("Acta aprobada formalmente", response));
    }

    @PostMapping("/{id}/acuerdos")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'SECRETARIO')")
    @Operation(summary = "Registrar un acuerdo en tiempo real durante la asamblea")
    public ResponseEntity<ApiResponse<ActaResponse>> agregarAcuerdo(
            @PathVariable Long id,
            @RequestBody java.util.Map<String, String> body) {
        String descripcion = body.get("descripcion");
        ActaResponse response = actaService.agregarAcuerdo(id, descripcion);
        return ResponseEntity.ok(ApiResponse.success("Acuerdo registrado exitosamente", response));
    }

    @DeleteMapping("/{id}/acuerdos/{acuerdoId}")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'SECRETARIO')")
    @Operation(summary = "Eliminar un acuerdo del acta")
    public ResponseEntity<ApiResponse<Void>> eliminarAcuerdo(
            @PathVariable Long id,
            @PathVariable Long acuerdoId) {
        actaService.eliminarAcuerdo(id, acuerdoId);
        return ResponseEntity.ok(ApiResponse.success("Acuerdo eliminado", null));
    }

    @GetMapping
    @Operation(summary = "Listar actas registradas con filtros de estado, fechas y búsqueda")
    public ResponseEntity<ApiResponse<PagedResponse<ActaResponse>>> listarActas(
            @RequestParam(required = false) String busqueda,
            @RequestParam(required = false) EstadoActa estado,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaDesde,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaHasta,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        var pageable = PageRequest.of(page, size, Sort.by("fecha").descending());
        PagedResponse<ActaResponse> response = actaService.listarActas(busqueda, estado, fechaDesde, fechaHasta, pageable);
        return ResponseEntity.ok(ApiResponse.success(response));
    }
}
