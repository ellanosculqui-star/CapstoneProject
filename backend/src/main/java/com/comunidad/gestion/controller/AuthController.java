package com.comunidad.gestion.controller;

import com.comunidad.gestion.common.response.ApiResponse;
import com.comunidad.gestion.dto.auth.ChangePasswordRequest;
import com.comunidad.gestion.dto.auth.LoginRequest;
import com.comunidad.gestion.dto.auth.LoginResponse;
import com.comunidad.gestion.dto.auth.UserDto;
import com.comunidad.gestion.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Tag(name = "1. Autenticación", description = "Endpoints para inicio de sesión, perfil y cambio de contraseña")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    @Operation(summary = "Iniciar sesión en el sistema", description = "Autentica con usuario y contraseña, retornando token JWT y rol")
    public ResponseEntity<ApiResponse<LoginResponse>> login(@Valid @RequestBody LoginRequest request) {
        LoginResponse response = authService.login(request);
        return ResponseEntity.ok(ApiResponse.success("Inicio de sesión exitoso", response));
    }

    @GetMapping("/me")
    @Operation(summary = "Obtener perfil del usuario autenticado", description = "Retorna los datos del usuario conectado según su token JWT")
    public ResponseEntity<ApiResponse<UserDto>> getUsuarioActual() {
        UserDto userDto = authService.getUsuarioActual();
        return ResponseEntity.ok(ApiResponse.success(userDto));
    }

    @PostMapping("/cambiar-password")
    @Operation(summary = "Cambiar contraseña del usuario actual", description = "Permite actualizar la contraseña verificando la actual")
    public ResponseEntity<ApiResponse<Void>> cambiarPassword(@Valid @RequestBody ChangePasswordRequest request) {
        authService.cambiarPassword(request);
        return ResponseEntity.ok(ApiResponse.success("Contraseña actualizada exitosamente", null));
    }
}
