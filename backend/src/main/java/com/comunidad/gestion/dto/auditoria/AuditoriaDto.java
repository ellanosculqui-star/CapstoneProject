package com.comunidad.gestion.dto.auditoria;

import com.comunidad.gestion.entity.enums.TipoAccionAuditoria;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuditoriaDto {
    private Long id;
    private Long usuarioId;
    private String username;
    private TipoAccionAuditoria accion;
    private String modulo;
    private String registroAfectado;
    private String tablaAfectada;
    private Long registroId;
    private String detalleAnterior;
    private String detalleNuevo;
    private String ipAddress;
    private LocalDateTime fechaHora;
}
