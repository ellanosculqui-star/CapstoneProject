package com.comunidad.gestion.dto.alerta;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AlertaDto {
    private String id;
    private String tipo; // "QUORUM", "MULTAS", "ACUERDOS", "PARTICIPACION"
    private String nivel; // "DANGER", "WARNING", "INFO", "SUCCESS"
    private String titulo;
    private String mensaje;
    private String accionUrl;
    private String accionTexto;
    private String fechaGeneracion;
}
