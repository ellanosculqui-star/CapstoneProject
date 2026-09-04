package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.common.exception.ResourceNotFoundException;
import com.comunidad.gestion.dto.auth.ChangePasswordRequest;
import com.comunidad.gestion.dto.auth.LoginRequest;
import com.comunidad.gestion.dto.auth.LoginResponse;
import com.comunidad.gestion.dto.auth.UserDto;
import com.comunidad.gestion.entity.Usuario;
import com.comunidad.gestion.entity.enums.TipoAccionAuditoria;
import com.comunidad.gestion.mapper.UsuarioMapper;
import com.comunidad.gestion.repository.UsuarioRepository;
import com.comunidad.gestion.security.jwt.JwtTokenProvider;
import com.comunidad.gestion.security.services.UserPrincipal;
import com.comunidad.gestion.service.AuditoriaService;
import com.comunidad.gestion.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;
    private final UsuarioRepository usuarioRepository;
    private final UsuarioMapper usuarioMapper;
    private final PasswordEncoder passwordEncoder;
    private final AuditoriaService auditoriaService;

    @Override
    @Transactional
    public LoginResponse login(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateToken(authentication);
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        auditoriaService.registrarLog(
                userPrincipal.getUsername(),
                TipoAccionAuditoria.LOGIN,
                "SEGURIDAD",
                "Inicio de sesión de " + userPrincipal.getUsername(),
                "usuarios",
                userPrincipal.getId(),
                null,
                "Inicio de sesión exitoso",
                "127.0.0.1"
        );

        return LoginResponse.builder()
                .token(jwt)
                .type("Bearer")
                .id(userPrincipal.getId())
                .username(userPrincipal.getUsername())
                .email(userPrincipal.getEmail())
                .nombres(userPrincipal.getNombres())
                .apellidos(userPrincipal.getApellidos())
                .rol(userPrincipal.getRolNombre())
                .build();
    }

    @Override
    @Transactional(readOnly = true)
    public UserDto getUsuarioActual() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated() || "anonymousUser".equals(auth.getName())) {
            throw new BadRequestException("No hay un usuario autenticado en la sesión");
        }

        Usuario usuario = usuarioRepository.findByUsername(auth.getName())
                .orElseThrow(() -> new ResourceNotFoundException("Usuario actual no encontrado"));

        return usuarioMapper.toDto(usuario);
    }

    @Override
    @Transactional
    public void cambiarPassword(ChangePasswordRequest request) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Usuario usuario = usuarioRepository.findByUsername(auth.getName())
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));

        if (!passwordEncoder.matches(request.getPasswordActual(), usuario.getPassword())) {
            throw new BadRequestException("La contraseña actual no es correcta");
        }

        usuario.setPassword(passwordEncoder.encode(request.getPasswordNueva()));
        usuarioRepository.save(usuario);

        auditoriaService.registrarLog(
                usuario.getUsername(),
                TipoAccionAuditoria.MODIFICAR_USUARIO,
                "SEGURIDAD",
                "Cambio de contraseña por el propio usuario",
                "usuarios",
                usuario.getId(),
                null,
                "Contraseña actualizada con éxito",
                "127.0.0.1"
        );
    }
}
