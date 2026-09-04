package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.dto.asistencia.AsistenciaPadronDto;
import com.comunidad.gestion.dto.asistencia.AsistenciaResponse;
import com.comunidad.gestion.dto.asistencia.QuorumResponse;
import com.comunidad.gestion.dto.asistencia.RegistrarAsistenciaRequest;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import com.comunidad.gestion.service.AsistenciaService;
import com.comunidad.gestion.service.QuorumService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/asambleas/{asambleaId}/asistencia")
@RequiredArgsConstructor
@Tag(name = "6. Control de Asistencia y Quórum", description = "Toma de asistencia en tiempo real y cálculo automatizado de quórum")
public class AsistenciaController {

    private final AsistenciaService asistenciaService;
    private final QuorumService quorumService;

    @GetMapping("/padron")
    @Operation(summary = "Obtener el padrón de comuneros habilitados para la toma de asistencia")
    public ResponseEntity<ApiResponse<List<AsistenciaPadronDto>>> obtenerPadronAsamblea(@PathVariable Long asambleaId) {
        List<AsistenciaPadronDto> padron = asistenciaService.obtenerPadronAsamblea(asambleaId);
        return ResponseEntity.ok(ApiResponse.success(padron));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'SECRETARIO', 'PRESIDENTE')")
    @Operation(summary = "Registrar o modificar asistencia individual de un comunero")
    public ResponseEntity<ApiResponse<AsistenciaResponse>> registrarAsistencia(
            @PathVariable Long asambleaId,
            @Valid @RequestBody RegistrarAsistenciaRequest request) {
        AsistenciaResponse response = asistenciaService.registrarAsistencia(asambleaId, request);
        return ResponseEntity.ok(ApiResponse.success("Asistencia registrada exitosamente", response));
    }

    @PostMapping("/rapida")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'SECRETARIO', 'PRESIDENTE')")
    @Operation(summary = "Marcar asistencia rápida ingresando DNI o código de comunero")
    public ResponseEntity<ApiResponse<AsistenciaResponse>> marcarAsistenciaRapida(
            @PathVariable Long asambleaId,
            @RequestParam String identificador,
            @RequestParam(defaultValue = "PRESENTE") EstadoAsistencia estado) {
        AsistenciaResponse response = asistenciaService.marcarAsistenciaRapida(asambleaId, identificador, estado);
        return ResponseEntity.ok(ApiResponse.success("Asistencia rápida registrada", response));
    }

    @GetMapping("/quorum")
    @Operation(summary = "Calcular quórum en tiempo real de la asamblea")
    public ResponseEntity<ApiResponse<QuorumResponse>> obtenerQuorum(@PathVariable Long asambleaId) {
        QuorumResponse quorum = quorumService.calcularQuorum(asambleaId);
        return ResponseEntity.ok(ApiResponse.success(quorum));
    }

    @GetMapping("/lista")
    @Operation(summary = "Listar registros de asistencia marcados en la asamblea")
    public ResponseEntity<ApiResponse<List<AsistenciaResponse>>> listarAsistencias(@PathVariable Long asambleaId) {
        List<AsistenciaResponse> lista = asistenciaService.listarAsistenciasPorAsamblea(asambleaId);
        return ResponseEntity.ok(ApiResponse.success(lista));
    }
}
