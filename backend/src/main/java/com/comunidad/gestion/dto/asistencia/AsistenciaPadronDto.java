package com.comunidad.gestion.dto.asistencia;

import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AsistenciaPadronDto {
    private Long comuneroId;
    private String codigoComunero;
    private String dni;
    private String nombreCompleto;
    private String sectorNombre;
    private CondicionHabilitacion condicionHabilitacion;
    private Long asistenciaId;
    private EstadoAsistencia estadoAsistencia; // PRESENTE, AUSENTE, JUSTIFICADO or null if not yet marked
    private LocalDateTime fechaHoraRegistro;
    private String observacion;
}
