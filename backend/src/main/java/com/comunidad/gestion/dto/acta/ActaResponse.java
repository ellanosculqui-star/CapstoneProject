package com.comunidad.gestion.dto.acta;

import com.comunidad.gestion.entity.enums.EstadoActa;
import com.comunidad.gestion.entity.enums.TipoAsamblea;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ActaResponse {
    private Long id;
    private Long asambleaId;
    private String asambleaTitulo;
    private TipoAsamblea asambleaTipo;
    private String numeroActa;
    private LocalDate fecha;
    private String lugar;
    private String agenda;
    private String resumen;
    private String resultadosVotaciones;
    private String observaciones;
    private EstadoActa estado;
    private String responsableNombre;
    private Integer totalHabilitados;
    private Long totalAsistentes;
    private Long totalAusentes;
    private BigDecimal porcentajeAsistencia;
    private Boolean quorumAlcanzado;
    @Builder.Default
    private List<AcuerdoDto> acuerdos = new ArrayList<>();
    @Builder.Default
    private List<FirmaActaDto> firmas = new ArrayList<>();
    private Integer totalFirmas;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaModificacion;
}
