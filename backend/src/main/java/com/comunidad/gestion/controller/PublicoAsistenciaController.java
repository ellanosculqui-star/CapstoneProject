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

    private final com.comunidad.gestion.service.VotacionService votacionService;
    private final com.comunidad.gestion.repository.ComuneroRepository comuneroRepository;

    /**
     * Retorna datos públicos de una votación abierta para que el comunero vote vía QR.
     */
    @GetMapping("/votaciones/{id}")
    @Operation(summary = "Obtener datos públicos de una votación para sufragio QR")
    public ResponseEntity<ApiResponse<com.comunidad.gestion.dto.votacion.VotacionResponse>> obtenerVotacionPublica(@PathVariable Long id) {
        com.comunidad.gestion.dto.votacion.VotacionResponse votacion = votacionService.obtenerPorId(id);
        return ResponseEntity.ok(ApiResponse.success(votacion));
    }

    /**
     * Permite a un comunero emitir su voto vía QR ingresando su DNI.
     */
    @PostMapping("/votaciones/{id}/votar")
    @Operation(summary = "Emitir voto público con DNI vía QR")
    public ResponseEntity<ApiResponse<com.comunidad.gestion.dto.votacion.VotacionResponse>> emitirVotoPublico(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {

        String dni = body.get("dni");
        if (dni == null || dni.isBlank()) {
            throw new BadRequestException("El DNI es obligatorio");
        }

        String candidato = body.get("candidato");
        String opcionStr = body.get("opcion"); // "A_FAVOR", "EN_CONTRA", "ABSTENCION", "CANDIDATO"

        com.comunidad.gestion.entity.Comunero comunero = comuneroRepository.findByDni(dni.trim())
                .orElseThrow(() -> new ResourceNotFoundException("Comunero no encontrado con DNI: " + dni));

        com.comunidad.gestion.entity.enums.OpcionVoto opcion = com.comunidad.gestion.entity.enums.OpcionVoto.A_FAVOR;
        if (candidato != null && !candidato.isBlank()) {
            opcion = com.comunidad.gestion.entity.enums.OpcionVoto.CANDIDATO;
        } else if (opcionStr != null) {
            try {
                opcion = com.comunidad.gestion.entity.enums.OpcionVoto.valueOf(opcionStr);
            } catch (Exception ignored) {}
        }

        com.comunidad.gestion.dto.votacion.EmitirVotoRequest req = com.comunidad.gestion.dto.votacion.EmitirVotoRequest.builder()
                .comuneroId(comunero.getId())
                .opcion(opcion)
                .candidatoElegido(candidato)
                .build();

        com.comunidad.gestion.dto.votacion.VotacionResponse resp = votacionService.emitirVoto(id, req);
        return ResponseEntity.ok(ApiResponse.success("Voto registrado exitosamente", resp));
    }
}
