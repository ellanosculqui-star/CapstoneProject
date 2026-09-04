package com.comunidad.gestion.service;

import com.comunidad.gestion.dto.comunero.SectorDto;

import java.util.List;

public interface SectorService {
    List<SectorDto> listarSectores();
    SectorDto crearSector(SectorDto dto);
    SectorDto actualizarSector(Long id, SectorDto dto);
}
