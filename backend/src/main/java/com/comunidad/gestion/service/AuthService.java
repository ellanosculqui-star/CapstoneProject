package com.comunidad.gestion.service;

import com.comunidad.gestion.dto.auth.ChangePasswordRequest;
import com.comunidad.gestion.dto.auth.LoginRequest;
import com.comunidad.gestion.dto.auth.LoginResponse;
import com.comunidad.gestion.dto.auth.UserDto;

public interface AuthService {
    LoginResponse login(LoginRequest request);
    UserDto getUsuarioActual();
    void cambiarPassword(ChangePasswordRequest request);
}
