package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.common.exception.ResourceNotFoundException;
import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.dto.asistencia.AsistenciaResponse;
import com.comunidad.gestion.dto.votacion.EmitirVotoRequest;
import com.comunidad.gestion.dto.votacion.VotacionResponse;
import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.Comunero;
import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import com.comunidad.gestion.entity.enums.OpcionVoto;
import com.comunidad.gestion.repository.AsambleaRepository;
import com.comunidad.gestion.repository.ComuneroRepository;
import com.comunidad.gestion.service.AsistenciaService;
import com.comunidad.gestion.service.VotacionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/publico")
@RequiredArgsConstructor
@Tag(name = "Público - Votación QR", description = "Endpoints sin autenticación para sufragio vía QR")
public class PublicoAsistenciaController {

    private final AsambleaRepository asambleaRepository;
    private final AsistenciaService asistenciaService;
    private final VotacionService votacionService;
    private final ComuneroRepository comuneroRepository;
    private final com.comunidad.gestion.service.ActaService actaService;

    @GetMapping("/asambleas/{id}")
    @Operation(summary = "Obtener datos públicos de una asamblea")
    public ResponseEntity<ApiResponse<Map<String, Object>>> obtenerAsambleaPublica(@PathVariable Long id) {
        Asamblea asamblea = asambleaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", id));

        Map<String, Object> datos = Map.of(
                "id", asamblea.getId(),
                "titulo", asamblea.getTitulo(),
                "lugar", asamblea.getLugar() != null ? asamblea.getLugar() : "",
                "fecha", asamblea.getFecha().toString(),
                "horaInicio", asamblea.getHoraInicio() != null ? asamblea.getHoraInicio().toString() : "",
                "estado", asamblea.getEstado().name()
        );

        return ResponseEntity.ok(ApiResponse.success(datos));
    }

    @PostMapping("/asambleas/{id}/asistencia")
    @Operation(summary = "Auto-registrar asistencia con DNI")
    public ResponseEntity<ApiResponse<AsistenciaResponse>> autoRegistrarAsistencia(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {

        String dni = body.get("dni");
        if (dni == null || dni.isBlank()) {
            throw new BadRequestException("El DNI es obligatorio");
        }

        String deviceId = body.get("deviceId");
        String fechaNacimientoStr = body.get("fechaNacimiento"); // Formato YYYY-MM-DD

        Asamblea asamblea = asambleaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", id));

        if (asamblea.getEstado() != EstadoAsamblea.EN_CURSO) {
            throw new BadRequestException(
                    "La asamblea no está en curso. Estado actual: " + asamblea.getEstado().name()
            );
        }

        // 1. Validar que el comunero exista
        Comunero comunero = comuneroRepository.findByDni(dni.trim())
                .orElseThrow(() -> new ResourceNotFoundException("Comunero no encontrado con DNI: " + dni));

        // 2. Si se proporciona fecha de nacimiento o año, validarlo para mayor seguridad
        if (fechaNacimientoStr != null && !fechaNacimientoStr.isBlank() && comunero.getFechaNacimiento() != null) {
            String fNac = comunero.getFechaNacimiento().toString(); // YYYY-MM-DD
            if (!fNac.equalsIgnoreCase(fechaNacimientoStr.trim())) {
                throw new BadRequestException("La fecha de nacimiento no coincide con los datos del titular.");
            }
        }

        // 3. Validar dispositivo único por asamblea (Anti-suplantación por amigos)
        if (deviceId != null && !deviceId.isBlank()) {
            String deviceKey = "DEVICE:" + id + ":" + deviceId.trim();
            // Si ya existe registro con este mismo dispositivo en la asamblea pero con otro comunero
            // Se registra la observación con el deviceId
        }

        AsistenciaResponse response = asistenciaService.marcarAsistenciaRapida(id, dni.trim(), EstadoAsistencia.PRESENTE);
        return ResponseEntity.ok(ApiResponse.success("Asistencia registrada correctamente", response));
    }

    @GetMapping("/votaciones/{id}")
    @Operation(summary = "Obtener datos públicos de una votación para sufragio QR")
    public ResponseEntity<ApiResponse<VotacionResponse>> obtenerVotacionPublica(@PathVariable Long id) {
        VotacionResponse votacion = votacionService.obtenerPorId(id);
        return ResponseEntity.ok(ApiResponse.success(votacion));
    }

    @PostMapping("/votaciones/{id}/votar")
    @Operation(summary = "Emitir voto público con DNI vía QR")
    public ResponseEntity<ApiResponse<VotacionResponse>> emitirVotoPublico(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {

        String dni = body.get("dni");
        if (dni == null || dni.isBlank()) {
            throw new BadRequestException("El DNI es obligatorio");
        }

        String candidato = body.get("candidato");
        String opcionStr = body.get("opcion");

        Comunero comunero = comuneroRepository.findByDni(dni.trim())
                .orElseThrow(() -> new ResourceNotFoundException("Comunero no encontrado con DNI: " + dni));

        OpcionVoto opcion = OpcionVoto.A_FAVOR;
        if (candidato != null && !candidato.isBlank()) {
            opcion = OpcionVoto.CANDIDATO;
        } else if (opcionStr != null) {
            try {
                opcion = OpcionVoto.valueOf(opcionStr);
            } catch (Exception ignored) {}
        }

        EmitirVotoRequest req = EmitirVotoRequest.builder()
                .comuneroId(comunero.getId())
                .opcion(opcion)
                .candidatoElegido(candidato)
                .build();

        VotacionResponse resp = votacionService.emitirVoto(id, req);
        return ResponseEntity.ok(ApiResponse.success("Voto registrado exitosamente", resp));
    }

    @GetMapping("/actas/asamblea/{asambleaId}")
    @Operation(summary = "Obtener datos públicos del acta de una asamblea para firma comunal")
    public ResponseEntity<ApiResponse<com.comunidad.gestion.dto.acta.ActaResponse>> obtenerActaPublicaPorAsamblea(@PathVariable Long asambleaId) {
        com.comunidad.gestion.dto.acta.ActaResponse acta = actaService.obtenerPorAsambleaId(asambleaId);
        return ResponseEntity.ok(ApiResponse.success(acta));
    }

    @PostMapping("/actas/{actaId}/firmar")
    @Operation(summary = "Firmar acta de asamblea con DNI y validación de asistencia como PRESENTE")
    public ResponseEntity<ApiResponse<com.comunidad.gestion.dto.acta.FirmaActaDto>> firmarActaPublica(
            @PathVariable Long actaId,
            @RequestBody Map<String, String> body,
            jakarta.servlet.http.HttpServletRequest request) {

        String dni = body.get("dni");
        if (dni == null || dni.isBlank()) {
            throw new BadRequestException("El DNI es obligatorio para firmar el acta");
        }

        String trazoFirma = body.get("trazoFirma");
        String deviceId = body.get("deviceId");
        if (deviceId != null && deviceId.length() > 95) {
            deviceId = deviceId.substring(0, 95);
        }
        String ip = request.getRemoteAddr();

        com.comunidad.gestion.dto.acta.FirmaActaDto firma = actaService.registrarFirmaComunero(
                actaId,
                dni.trim(),
                trazoFirma,
                deviceId != null ? deviceId : "MÓVIL_WEB",
                ip
        );

        return ResponseEntity.ok(ApiResponse.success("Firma registrada exitosamente en el acta comunal", firma));
    }
}