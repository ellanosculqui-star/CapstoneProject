package com.comunidad.gestion.service;

import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.auth.RegisterUserRequest;
import com.comunidad.gestion.dto.auth.UserDto;
import org.springframework.data.domain.Pageable;

public interface UsuarioService {
    UserDto crearUsuario(RegisterUserRequest request);
    UserDto obtenerPorId(Long id);
    PagedResponse<UserDto> listarUsuarios(String busqueda, Long rolId, Boolean activo, Pageable pageable);
    UserDto cambiarEstado(Long id, boolean activo);
}
