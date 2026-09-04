package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.comunero.CambiarCondicionRequest;
import com.comunidad.gestion.dto.comunero.ComuneroRequest;
import com.comunidad.gestion.dto.comunero.ComuneroResponse;
import com.comunidad.gestion.dto.comunero.ComuneroSummaryDto;
import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import com.comunidad.gestion.service.ComuneroService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/comuneros")
@RequiredArgsConstructor
@Tag(name = "4. Padrón de Comuneros", description = "Operaciones del padrón general de comuneros, habilitación y estados")
public class ComuneroController {

    private final ComuneroService comuneroService;

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'SECRETARIO')")
    @Operation(summary = "Registrar nuevo comunero en el padrón")
    public ResponseEntity<ApiResponse<ComuneroResponse>> crearComunero(@Valid @RequestBody ComuneroRequest request) {
        ComuneroResponse creado = comuneroService.crearComunero(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Comunero registrado exitosamente en el padrón", creado));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'SECRETARIO')")
    @Operation(summary = "Actualizar datos de un comunero")
    public ResponseEntity<ApiResponse<ComuneroResponse>> actualizarComunero(@PathVariable Long id,
                                                                           @Valid @RequestBody ComuneroRequest request) {
        ComuneroResponse actualizado = comuneroService.actualizarComunero(id, request);
        return ResponseEntity.ok(ApiResponse.success("Datos del comunero actualizados", actualizado));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener detalle de comunero por ID")
    public ResponseEntity<ApiResponse<ComuneroResponse>> obtenerPorId(@PathVariable Long id) {
        ComuneroResponse response = comuneroService.obtenerPorId(id);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @GetMapping("/dni/{dni}")
    @Operation(summary = "Buscar comunero por número de DNI")
    public ResponseEntity<ApiResponse<ComuneroResponse>> obtenerPorDni(@PathVariable String dni) {
        ComuneroResponse response = comuneroService.obtenerPorDni(dni);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @GetMapping("/perfil/mi-padron")
    @PreAuthorize("hasRole('COMUNERO')")
    @Operation(summary = "Consultar propio registro en el padrón (para rol Comunero)")
    public ResponseEntity<ApiResponse<ComuneroResponse>> obtenerPerfilComuneroActual() {
        ComuneroResponse response = comuneroService.obtenerPerfilComuneroActual();
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @GetMapping
    @Operation(summary = "Listar padrón con filtros, búsqueda y paginación")
    public ResponseEntity<ApiResponse<PagedResponse<ComuneroResponse>>> listarComuneros(
            @RequestParam(required = false) String busqueda,
            @RequestParam(required = false) Long sectorId,
            @RequestParam(required = false) EstadoComunero estado,
            @RequestParam(required = false) CondicionHabilitacion condicion,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "apellidos") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDir) {

        Sort sort = sortDir.equalsIgnoreCase("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        var pageable = PageRequest.of(page, size, sort);
        PagedResponse<ComuneroResponse> response = comuneroService.listarComuneros(busqueda, sectorId, estado, condicion, pageable);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @GetMapping("/habilitados")
    @Operation(summary = "Listar resumen de todos los comuneros activos y habilitados")
    public ResponseEntity<ApiResponse<List<ComuneroSummaryDto>>> listarHabilitados() {
        List<ComuneroSummaryDto> lista = comuneroService.listarHabilitados();
        return ResponseEntity.ok(ApiResponse.success(lista));
    }

    @PatchMapping("/{id}/condicion")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'SECRETARIO', 'PRESIDENTE')")
    @Operation(summary = "Cambiar condición de habilitación (HABILITADO / INHABILITADO)")
    public ResponseEntity<ApiResponse<ComuneroResponse>> cambiarCondicion(@PathVariable Long id,
                                                                         @Valid @RequestBody CambiarCondicionRequest request) {
        ComuneroResponse response = comuneroService.cambiarCondicion(id, request);
        return ResponseEntity.ok(ApiResponse.success("Condición de habilitación actualizada", response));
    }

    @PatchMapping("/{id}/estado")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'SECRETARIO')")
    @Operation(summary = "Cambiar estado de comunero (ACTIVO / INACTIVO / FALLECIDO)")
    public ResponseEntity<ApiResponse<ComuneroResponse>> cambiarEstado(@PathVariable Long id,
                                                                      @RequestParam EstadoComunero estado) {
        ComuneroResponse response = comuneroService.cambiarEstado(id, estado);
        return ResponseEntity.ok(ApiResponse.success("Estado del comunero actualizado", response));
    }
}
