package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.auditoria.AuditoriaDto;
import com.comunidad.gestion.entity.enums.TipoAccionAuditoria;
import com.comunidad.gestion.service.AuditoriaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/v1/auditoria")
@RequiredArgsConstructor
@Tag(name = "10. Auditoría y Trazabilidad", description = "Consultas del registro de logs inmutables de operaciones del sistema")
public class AuditoriaController {

    private final AuditoriaService auditoriaService;

    @GetMapping
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'PRESIDENTE')")
    @Operation(summary = "Consultar bitácora de auditoría con filtros por módulo, acción, usuario y fecha")
    public ResponseEntity<ApiResponse<PagedResponse<AuditoriaDto>>> listarAuditoria(
            @RequestParam(required = false) String busqueda,
            @RequestParam(required = false) String modulo,
            @RequestParam(required = false) TipoAccionAuditoria accion,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime fechaDesde,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime fechaHasta,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "15") int size) {

        var pageable = PageRequest.of(page, size, Sort.by("fechaHora").descending());
        PagedResponse<AuditoriaDto> response = auditoriaService.listarAuditoria(busqueda, modulo, accion, username, fechaDesde, fechaHasta, pageable);
        return ResponseEntity.ok(ApiResponse.success(response));
    }
}
