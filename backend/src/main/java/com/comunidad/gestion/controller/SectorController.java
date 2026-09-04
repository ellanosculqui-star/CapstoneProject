package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.dto.comunero.SectorDto;
import com.comunidad.gestion.service.SectorService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/sectores")
@RequiredArgsConstructor
@Tag(name = "3. Sectores Comunales", description = "Gestión de los sectores territoriales de la comunidad")
public class SectorController {

    private final SectorService sectorService;

    @GetMapping
    @Operation(summary = "Listar todos los sectores activos")
    public ResponseEntity<ApiResponse<List<SectorDto>>> listarSectores() {
        List<SectorDto> sectores = sectorService.listarSectores();
        return ResponseEntity.ok(ApiResponse.success(sectores));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'SECRETARIO', 'PRESIDENTE')")
    @Operation(summary = "Crear nuevo sector comunal")
    public ResponseEntity<ApiResponse<SectorDto>> crearSector(@Valid @RequestBody SectorDto dto) {
        SectorDto creado = sectorService.crearSector(dto);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Sector creado exitosamente", creado));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'SECRETARIO')")
    @Operation(summary = "Actualizar sector")
    public ResponseEntity<ApiResponse<SectorDto>> actualizarSector(@PathVariable Long id, @Valid @RequestBody SectorDto dto) {
        SectorDto actualizado = sectorService.actualizarSector(id, dto);
        return ResponseEntity.ok(ApiResponse.success("Sector actualizado exitosamente", actualizado));
    }
}
