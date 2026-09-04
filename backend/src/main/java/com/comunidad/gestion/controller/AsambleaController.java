package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.asamblea.AsambleaDetailDto;
import com.comunidad.gestion.dto.asamblea.AsambleaRequest;
import com.comunidad.gestion.dto.asamblea.AsambleaResponse;
import com.comunidad.gestion.dto.asamblea.CambiarEstadoAsambleaRequest;
import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import com.comunidad.gestion.entity.enums.TipoAsamblea;
import com.comunidad.gestion.service.AsambleaService;
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
@RequestMapping("/api/v1/asambleas")
@RequiredArgsConstructor
@Tag(name = "5. Asambleas Comunales", description = "Convocatorias, gestión de estados y detalle general de asambleas")
public class AsambleaController {

    private final AsambleaService asambleaService;

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'PRESIDENTE', 'SECRETARIO')")
    @Operation(summary = "Crear o convocar nueva asamblea")
    public ResponseEntity<ApiResponse<AsambleaResponse>> crearAsamblea(@Valid @RequestBody AsambleaRequest request) {
        AsambleaResponse creado = asambleaService.crearAsamblea(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Asamblea convocada exitosamente", creado));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'PRESIDENTE', 'SECRETARIO')")
    @Operation(summary = "Actualizar datos de la convocatoria de asamblea")
    public ResponseEntity<ApiResponse<AsambleaResponse>> actualizarAsamblea(@PathVariable Long id,
                                                                           @Valid @RequestBody AsambleaRequest request) {
        AsambleaResponse actualizado = asambleaService.actualizarAsamblea(id, request);
        return ResponseEntity.ok(ApiResponse.success("Asamblea actualizada exitosamente", actualizado));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener asamblea por ID con métricas básicas")
    public ResponseEntity<ApiResponse<AsambleaResponse>> obtenerPorId(@PathVariable Long id) {
        AsambleaResponse response = asambleaService.obtenerPorId(id);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @GetMapping("/{id}/detalle")
    @Operation(summary = "Obtener detalle completo de la asamblea (Quórum en vivo, Votaciones y Estado de Acta)")
    public ResponseEntity<ApiResponse<AsambleaDetailDto>> obtenerDetalleAsamblea(@PathVariable Long id) {
        AsambleaDetailDto response = asambleaService.obtenerDetalleAsamblea(id);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @GetMapping
    @Operation(summary = "Listar asambleas con filtros de tipo, estado, fechas y paginación")
    public ResponseEntity<ApiResponse<PagedResponse<AsambleaResponse>>> listarAsambleas(
            @RequestParam(required = false) String busqueda,
            @RequestParam(required = false) TipoAsamblea tipo,
            @RequestParam(required = false) EstadoAsamblea estado,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaDesde,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaHasta,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "fecha") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDir) {

        Sort sort = sortDir.equalsIgnoreCase("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        var pageable = PageRequest.of(page, size, sort);
        PagedResponse<AsambleaResponse> response = asambleaService.listarAsambleas(busqueda, tipo, estado, fechaDesde, fechaHasta, pageable);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @PatchMapping("/{id}/estado")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'PRESIDENTE', 'SECRETARIO')")
    @Operation(summary = "Cambiar estado de la asamblea (PROGRAMADA, EN_CURSO, FINALIZADA, CANCELADA)")
    public ResponseEntity<ApiResponse<AsambleaResponse>> cambiarEstado(@PathVariable Long id,
                                                                      @Valid @RequestBody CambiarEstadoAsambleaRequest request) {
        AsambleaResponse response = asambleaService.cambiarEstado(id, request);
        return ResponseEntity.ok(ApiResponse.success("Estado de la asamblea actualizado", response));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'PRESIDENTE')")
    @Operation(summary = "Eliminar asamblea (solo si está programada)")
    public ResponseEntity<ApiResponse<Void>> eliminarAsamblea(@PathVariable Long id) {
        asambleaService.eliminarAsamblea(id);
        return ResponseEntity.ok(ApiResponse.success("Asamblea eliminada correctamente", null));
    }
}
