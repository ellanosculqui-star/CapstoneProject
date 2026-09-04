package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.dto.votacion.CrearVotacionRequest;
import com.comunidad.gestion.dto.votacion.EmitirVotoRequest;
import com.comunidad.gestion.dto.votacion.VotacionResponse;
import com.comunidad.gestion.service.VotacionService;
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
@RequiredArgsConstructor
@Tag(name = "7. Votaciones en Asamblea", description = "Propuestas de votación, apertura/cierre, emisión de votos y escrutinio en vivo")
public class VotacionController {

    private final VotacionService votacionService;

    @PostMapping("/api/v1/asambleas/{asambleaId}/votaciones")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'PRESIDENTE', 'SECRETARIO')")
    @Operation(summary = "Crear propuesta de votación en una asamblea")
    public ResponseEntity<ApiResponse<VotacionResponse>> crearVotacion(
            @PathVariable Long asambleaId,
            @Valid @RequestBody CrearVotacionRequest request) {
        VotacionResponse creado = votacionService.crearVotacion(asambleaId, request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Votación creada exitosamente", creado));
    }

    @GetMapping("/api/v1/asambleas/{asambleaId}/votaciones")
    @Operation(summary = "Listar todas las votaciones de una asamblea con resultados actualizados")
    public ResponseEntity<ApiResponse<List<VotacionResponse>>> listarPorAsamblea(@PathVariable Long asambleaId) {
        List<VotacionResponse> lista = votacionService.listarPorAsamblea(asambleaId);
        return ResponseEntity.ok(ApiResponse.success(lista));
    }

    @GetMapping("/api/v1/votaciones/{id}")
    @Operation(summary = "Obtener detalle y escrutinio de una votación específica")
    public ResponseEntity<ApiResponse<VotacionResponse>> obtenerPorId(@PathVariable Long id) {
        VotacionResponse response = votacionService.obtenerPorId(id);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @PatchMapping("/api/v1/votaciones/{id}/abrir")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'PRESIDENTE')")
    @Operation(summary = "Abrir votación para recibir votos")
    public ResponseEntity<ApiResponse<VotacionResponse>> abrirVotacion(@PathVariable Long id) {
        VotacionResponse response = votacionService.abrirVotacion(id);
        return ResponseEntity.ok(ApiResponse.success("Votación abierta a sufragio", response));
    }

    @PatchMapping("/api/v1/votaciones/{id}/cerrar")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'PRESIDENTE')")
    @Operation(summary = "Cerrar votación y fijar escrutinio")
    public ResponseEntity<ApiResponse<VotacionResponse>> cerrarVotacion(@PathVariable Long id) {
        VotacionResponse response = votacionService.cerrarVotacion(id);
        return ResponseEntity.ok(ApiResponse.success("Votación cerrada formalmente", response));
    }

    @PostMapping("/api/v1/votaciones/{id}/votar")
    @Operation(summary = "Emitir voto individual de comunero habilitado y presente")
    public ResponseEntity<ApiResponse<VotacionResponse>> emitirVoto(
            @PathVariable Long id,
            @Valid @RequestBody EmitirVotoRequest request) {
        VotacionResponse response = votacionService.emitirVoto(id, request);
        return ResponseEntity.ok(ApiResponse.success("Voto emitido y contabilizado correctamente", response));
    }
}
