package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.auth.RegisterUserRequest;
import com.comunidad.gestion.dto.auth.UserDto;
import com.comunidad.gestion.service.UsuarioService;
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

@RestController
@RequestMapping("/api/v1/usuarios")
@RequiredArgsConstructor
@Tag(name = "2. Usuarios del Sistema", description = "Administración de usuarios y cuentas de acceso")
public class UsuarioController {

    private final UsuarioService usuarioService;

    @PostMapping
    @PreAuthorize("hasRole('ADMINISTRADOR')")
    @Operation(summary = "Crear nuevo usuario del sistema (Admin)")
    public ResponseEntity<ApiResponse<UserDto>> crearUsuario(@Valid @RequestBody RegisterUserRequest request) {
        UserDto creado = usuarioService.crearUsuario(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Usuario creado exitosamente", creado));
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMINISTRADOR', 'PRESIDENTE')")
    @Operation(summary = "Obtener usuario por ID")
    public ResponseEntity<ApiResponse<UserDto>> obtenerPorId(@PathVariable Long id) {
        UserDto usuario = usuarioService.obtenerPorId(id);
        return ResponseEntity.ok(ApiResponse.success(usuario));
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMINISTRADOR')")
    @Operation(summary = "Listar usuarios con filtros y paginación")
    public ResponseEntity<ApiResponse<PagedResponse<UserDto>>> listarUsuarios(
            @RequestParam(required = false) String busqueda,
            @RequestParam(required = false) Long rolId,
            @RequestParam(required = false) Boolean activo,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        var pageable = PageRequest.of(page, size, Sort.by("id").descending());
        PagedResponse<UserDto> response = usuarioService.listarUsuarios(busqueda, rolId, activo, pageable);
        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @PatchMapping("/{id}/estado")
    @PreAuthorize("hasRole('ADMINISTRADOR')")
    @Operation(summary = "Activar o desactivar usuario")
    public ResponseEntity<ApiResponse<UserDto>> cambiarEstado(@PathVariable Long id, @RequestParam boolean activo) {
        UserDto actualizado = usuarioService.cambiarEstado(id, activo);
        return ResponseEntity.ok(ApiResponse.success("Estado de usuario actualizado", actualizado));
    }
}
