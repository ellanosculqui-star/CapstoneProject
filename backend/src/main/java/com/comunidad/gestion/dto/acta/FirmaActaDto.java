package com.comunidad.gestion.dto.acta;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FirmaActaDto {
    private Long id;
    private Long comuneroId;
    private String comuneroDni;
    private String comuneroNombreCompleto;
    private String comuneroCodigo;
    private LocalDateTime fechaHoraFirma;
    private String trazoFirma;
    private String dispositivo;
}
