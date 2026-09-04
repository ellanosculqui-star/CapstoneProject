package com.comunidad.gestion.util;

import com.comunidad.gestion.service.AuditoriaService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Slf4j
@Aspect
@Component
@RequiredArgsConstructor
public class AuditoriaAspect {

    private final AuditoriaService auditoriaService;

    @AfterReturning(value = "@annotation(auditable)", returning = "result")
    public void interceptarAuditoria(JoinPoint joinPoint, Auditable auditable, Object result) {
        try {
            String username = "ANONIMO";
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            if (auth != null && auth.isAuthenticated() && !"anonymousUser".equals(auth.getName())) {
                username = auth.getName();
            }

            String ipAddress = "127.0.0.1";
            ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
            if (attributes != null) {
                HttpServletRequest request = attributes.getRequest();
                ipAddress = ClientIpUtil.getClientIp(request);
            }

            String detalle = auditable.descripcion();
            if (detalle == null || detalle.isEmpty()) {
                detalle = "Operación " + auditable.accion().name() + " en " + auditable.modulo();
            }

            auditoriaService.registrarLog(
                    username,
                    auditable.accion(),
                    auditable.modulo(),
                    detalle,
                    auditable.tabla(),
                    null,
                    null,
                    "Ejecución exitosa",
                    ipAddress
            );
        } catch (Exception ex) {
            log.warn("No se pudo auditar la operación mediante AOP: {}", ex.getMessage());
        }
    }
}
