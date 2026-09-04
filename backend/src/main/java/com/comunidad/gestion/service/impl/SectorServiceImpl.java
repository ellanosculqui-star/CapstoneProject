package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.common.exception.ResourceNotFoundException;
import com.comunidad.gestion.dto.comunero.SectorDto;
import com.comunidad.gestion.entity.Sector;
import com.comunidad.gestion.repository.SectorRepository;
import com.comunidad.gestion.service.SectorService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SectorServiceImpl implements SectorService {

    private final SectorRepository sectorRepository;

    @Override
    @Transactional(readOnly = true)
    public List<SectorDto> listarSectores() {
        return sectorRepository.findByActivoTrueOrderByNombreAsc().stream()
                .map(s -> SectorDto.builder()
                        .id(s.getId())
                        .nombre(s.getNombre())
                        .descripcion(s.getDescripcion())
                        .activo(s.getActivo())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public SectorDto crearSector(SectorDto dto) {
        if (sectorRepository.existsByNombre(dto.getNombre().trim())) {
            throw new BadRequestException("El sector con nombre '" + dto.getNombre() + "' ya existe");
        }

        Sector sector = Sector.builder()
                .nombre(dto.getNombre().trim())
                .descripcion(dto.getDescripcion() != null ? dto.getDescripcion().trim() : null)
                .activo(true)
                .build();

        Sector guardado = sectorRepository.save(sector);

        return SectorDto.builder()
                .id(guardado.getId())
                .nombre(guardado.getNombre())
                .descripcion(guardado.getDescripcion())
                .activo(guardado.getActivo())
                .build();
    }

    @Override
    @Transactional
    public SectorDto actualizarSector(Long id, SectorDto dto) {
        Sector sector = sectorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Sector", "id", id));

        if (!sector.getNombre().equalsIgnoreCase(dto.getNombre().trim()) && sectorRepository.existsByNombre(dto.getNombre().trim())) {
            throw new BadRequestException("Ya existe otro sector con el nombre '" + dto.getNombre() + "'");
        }

        sector.setNombre(dto.getNombre().trim());
        sector.setDescripcion(dto.getDescripcion());
        if (dto.getActivo() != null) {
            sector.setActivo(dto.getActivo());
        }

        Sector guardado = sectorRepository.save(sector);

        return SectorDto.builder()
                .id(guardado.getId())
                .nombre(guardado.getNombre())
                .descripcion(guardado.getDescripcion())
                .activo(guardado.getActivo())
                .build();
    }
}
