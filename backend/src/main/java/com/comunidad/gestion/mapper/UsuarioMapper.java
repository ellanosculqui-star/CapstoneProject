package com.comunidad.gestion.mapper;

import com.comunidad.gestion.dto.auth.UserDto;
import com.comunidad.gestion.entity.Usuario;
import org.springframework.stereotype.Component;

@Component
public class UsuarioMapper {

    public UserDto toDto(Usuario usuario) {
        if (usuario == null) return null;

        return UserDto.builder()
                .id(usuario.getId())
                .username(usuario.getUsername())
                .email(usuario.getEmail())
                .nombres(usuario.getNombres())
                .apellidos(usuario.getApellidos())
                .activo(usuario.getActivo())
                .rolId(usuario.getRol() != null ? usuario.getRol().getId() : null)
                .rolNombre(usuario.getRol() != null ? usuario.getRol().getNombre().name() : null)
                .fechaCreacion(usuario.getFechaCreacion())
                .build();
    }
}
