package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.dto.dashboard.DashboardStatsDto;
import com.comunidad.gestion.service.DashboardService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/dashboard")
@RequiredArgsConstructor
@Tag(name = "11. Dashboard Ejecutivo", description = "Métricas clave, KPIs y gráficos estadísticos de la comunidad")
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping({"/resumen", "/stats"})
    @Operation(summary = "Obtener todas las estadísticas del panel principal")
    public ResponseEntity<ApiResponse<DashboardStatsDto>> obtenerResumenDashboard() {
        DashboardStatsDto stats = dashboardService.obtenerEstadisticasDashboard();
        return ResponseEntity.ok(ApiResponse.success(stats));
    }
}
