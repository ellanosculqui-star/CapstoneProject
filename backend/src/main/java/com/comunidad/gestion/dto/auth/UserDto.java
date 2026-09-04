package com.comunidad.gestion.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;
    private String username;
    private String email;
    private String nombres;
    private String apellidos;
    private Boolean activo;
    private Long rolId;
    private String rolNombre;
    private LocalDateTime fechaCreacion;
}
