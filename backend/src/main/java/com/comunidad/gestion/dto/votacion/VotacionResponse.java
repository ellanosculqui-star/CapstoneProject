package com.comunidad.gestion.dto.votacion;

import com.comunidad.gestion.entity.enums.EstadoVotacion;
import com.comunidad.gestion.entity.enums.TipoVotacion;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VotacionResponse {
    private Long id;
    private Long asambleaId;
    private String asambleaTitulo;
    private String titulo;
    private String descripcion;
    private String propuesta;
    private TipoVotacion tipo;
    private EstadoVotacion estado;
    private LocalDateTime fechaApertura;
    private LocalDateTime fechaCierre;
    private LocalDateTime fechaCreacion;
    private ResultadoVotacionDto resultado;
    private Boolean yaVotoUsuarioActual;
}
