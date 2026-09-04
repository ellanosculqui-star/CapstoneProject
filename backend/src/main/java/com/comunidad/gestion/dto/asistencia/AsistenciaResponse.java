package com.comunidad.gestion.dto.asistencia;

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
public class AsistenciaResponse {
    private Long id;
    private Long asambleaId;
    private Long comuneroId;
    private String comuneroCodigo;
    private String comuneroDni;
    private String comuneroNombreCompleto;
    private String sectorNombre;
    private EstadoAsistencia estado;
    private LocalDateTime fechaHoraRegistro;
    private String observacion;
    private String registradoPorNombre;
}
