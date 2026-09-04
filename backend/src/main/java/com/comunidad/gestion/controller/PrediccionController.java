package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.dto.prediccion.PrediccionQuorumDto;
import com.comunidad.gestion.service.PrediccionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/predicciones")
@RequiredArgsConstructor
@Tag(name = "12. Predicción de Quórum e IA", description = "Modelos predictivos de asistencia comunal y probabilidades de quórum")
public class PrediccionController {

    private final PrediccionService prediccionService;

    @GetMapping("/proxima-asamblea")
    @Operation(summary = "Obtener estimación y probabilidad de quórum para la próxima asamblea convocada")
    public ResponseEntity<ApiResponse<PrediccionQuorumDto>> predecirProximaAsamblea() {
        PrediccionQuorumDto prediccion = prediccionService.predecirQuorumProximaAsamblea();
        return ResponseEntity.ok(ApiResponse.success(prediccion));
    }

    @GetMapping("/asamblea/{id}")
    @Operation(summary = "Generar predicción analítica de quórum para una asamblea específica")
    public ResponseEntity<ApiResponse<PrediccionQuorumDto>> predecirPorAsamblea(@PathVariable Long id) {
        PrediccionQuorumDto prediccion = prediccionService.predecirQuorumParaAsamblea(id);
        return ResponseEntity.ok(ApiResponse.success(prediccion));
    }
}
