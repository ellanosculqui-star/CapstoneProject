package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.common.exception.ResourceNotFoundException;
import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.auth.RegisterUserRequest;
import com.comunidad.gestion.dto.auth.UserDto;
import com.comunidad.gestion.entity.Rol;
import com.comunidad.gestion.entity.Usuario;
import com.comunidad.gestion.entity.enums.TipoAccionAuditoria;
import com.comunidad.gestion.mapper.UsuarioMapper;
import com.comunidad.gestion.repository.RolRepository;
import com.comunidad.gestion.repository.UsuarioRepository;
import com.comunidad.gestion.service.AuditoriaService;
import com.comunidad.gestion.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final RolRepository rolRepository;
    private final UsuarioMapper usuarioMapper;
    private final PasswordEncoder passwordEncoder;
    private final AuditoriaService auditoriaService;

    @Override
    @Transactional
    public UserDto crearUsuario(RegisterUserRequest request) {
        if (usuarioRepository.existsByUsername(request.getUsername().trim())) {
            throw new BadRequestException("El nombre de usuario ya está registrado en el sistema");
        }
        if (usuarioRepository.existsByEmail(request.getEmail().trim())) {
            throw new BadRequestException("El email ya está registrado en el sistema");
        }

        Rol rol = rolRepository.findById(request.getRolId())
                .orElseThrow(() -> new ResourceNotFoundException("Rol", "id", request.getRolId()));

        Usuario usuario = Usuario.builder()
                .username(request.getUsername().trim().toLowerCase())
                .password(passwordEncoder.encode(request.getPassword()))
                .email(request.getEmail().trim().toLowerCase())
                .nombres(request.getNombres().trim())
                .apellidos(request.getApellidos().trim())
                .activo(true)
                .rol(rol)
                .build();

        Usuario guardado = usuarioRepository.save(usuario);

        String currentUser = SecurityContextHolder.getContext().getAuthentication() != null ?
                SecurityContextHolder.getContext().getAuthentication().getName() : "SISTEMA";

        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.CREAR_USUARIO,
                "USUARIOS",
                "Creación de usuario " + guardado.getUsername() + " con rol " + rol.getNombre().name(),
                "usuarios",
                guardado.getId(),
                null,
                "Usuario creado",
                "127.0.0.1"
        );

        return usuarioMapper.toDto(guardado);
    }

    @Override
    @Transactional(readOnly = true)
    public UserDto obtenerPorId(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario", "id", id));
        return usuarioMapper.toDto(usuario);
    }

    @Override
    @Transactional(readOnly = true)
    public PagedResponse<UserDto> listarUsuarios(String busqueda, Long rolId, Boolean activo, Pageable pageable) {
        Page<Usuario> page = usuarioRepository.findWithFilters(busqueda, rolId, activo, pageable);
        return PagedResponse.of(page.map(usuarioMapper::toDto));
    }

    @Override
    @Transactional
    public UserDto cambiarEstado(Long id, boolean activo) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario", "id", id));

        boolean anterior = usuario.getActivo();
        usuario.setActivo(activo);
        Usuario actualizado = usuarioRepository.save(usuario);

        String currentUser = SecurityContextHolder.getContext().getAuthentication() != null ?
                SecurityContextHolder.getContext().getAuthentication().getName() : "SISTEMA";

        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.MODIFICAR_USUARIO,
                "USUARIOS",
                "Cambio de estado de usuario " + usuario.getUsername() + " a " + (activo ? "ACTIVO" : "INACTIVO"),
                "usuarios",
                usuario.getId(),
                "activo: " + anterior,
                "activo: " + activo,
                "127.0.0.1"
        );

        return usuarioMapper.toDto(actualizado);
    }
}
