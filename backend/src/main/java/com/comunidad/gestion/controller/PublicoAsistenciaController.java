package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.common.exception.ResourceNotFoundException;
import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.dto.asistencia.AsistenciaResponse;
import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import com.comunidad.gestion.repository.AsambleaRepository;
import com.comunidad.gestion.service.AsistenciaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Map;

/**
 * Endpoints PÚBLICOS (sin JWT) para la página de auto-registro de asistencia vía QR.
 * El comunero escanea el código QR, ingresa su DNI y marca su propia asistencia.
 */
@RestController
@RequestMapping("/api/v1/publico")
@RequiredArgsConstructor
@Tag(name = "Público - Auto-registro Asistencia QR", description = "Endpoints sin autenticación para la página de registro de asistencia vía QR")
public class PublicoAsistenciaController {

    private final AsambleaRepository asambleaRepository;
    private final AsistenciaService asistenciaService;

    /**
     * Retorna datos básicos de la asamblea para mostrar en la pantalla pública de QR.
     * Solo si está EN_CURSO.
     */
    @GetMapping("/asambleas/{id}")
    @Operation(summary = "Obtener datos públicos de una asamblea (sin autenticación)")
    public ResponseEntity<ApiResponse<Map<String, Object>>> obtenerAsambleaPublica(@PathVariable Long id) {
        Asamblea asamblea = asambleaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", id));

        Map<String, Object> datos = Map.of(
                "id",         asamblea.getId(),
                "titulo",     asamblea.getTitulo(),
                "lugar",      asamblea.getLugar() != null ? asamblea.getLugar() : "",
                "fecha",      asamblea.getFecha().toString(),
                "horaInicio", asamblea.getHoraInicio() != null ? asamblea.getHoraInicio().toString() : "",
                "estado",     asamblea.getEstado().name()
        );

        return ResponseEntity.ok(ApiResponse.success(datos));
    }

    /**
     * Marca la asistencia de un comunero identificado por su DNI.
     * Solo funciona si la asamblea está EN_CURSO.
     */
    @PostMapping("/asambleas/{id}/asistencia")
    @Operation(summary = "Auto-registrar asistencia con DNI (sin autenticación)")
    public ResponseEntity<ApiResponse<AsistenciaResponse>> autoRegistrarAsistencia(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {

        String dni = body.get("dni");
        if (dni == null || dni.isBlank()) {
            throw new BadRequestException("El DNI es obligatorio");
        }

        // Verificar estado de asamblea
        Asamblea asamblea = asambleaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", id));

        if (asamblea.getEstado() != EstadoAsamblea.EN_CURSO) {
            throw new BadRequestException(
                    "La asamblea no está en curso. Estado actual: " + asamblea.getEstado().name()
            );
        }

        AsistenciaResponse response = asistenciaService.marcarAsistenciaRapida(id, dni.trim(), EstadoAsistencia.PRESENTE);
        return ResponseEntity.ok(ApiResponse.success("Asistencia registrada correctamente", response));
    }
}
