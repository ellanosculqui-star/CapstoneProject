package com.comunidad.gestion.mapper;

import com.comunidad.gestion.dto.comunero.ComuneroRequest;
import com.comunidad.gestion.dto.comunero.ComuneroResponse;
import com.comunidad.gestion.dto.comunero.ComuneroSummaryDto;
import com.comunidad.gestion.entity.Comunero;
import com.comunidad.gestion.entity.Sector;
import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoCivil;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import com.comunidad.gestion.entity.enums.TipoComunero;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class ComuneroMapper {

    public Comunero toEntity(ComuneroRequest request, Sector sector) {
        if (request == null) return null;

        String codigo = (request.getCodigoComunero() != null && !request.getCodigoComunero().isBlank())
                ? request.getCodigoComunero().trim()
                : (request.getNumeroPadron() != null ? request.getNumeroPadron().trim() : "PAD-" + request.getDni());

        String padron = (request.getNumeroPadron() != null && !request.getNumeroPadron().isBlank())
                ? request.getNumeroPadron().trim()
                : codigo;

        String caserioNombre = request.getCaserio();
        if ((caserioNombre == null || caserioNombre.isBlank()) && sector != null) {
            caserioNombre = sector.getNombre();
        }

        return Comunero.builder()
                .codigoComunero(codigo)
                .numeroPadron(padron)
                .dni(request.getDni().trim())
                .nombres(request.getNombres().trim())
                .apellidos(request.getApellidos().trim())
                .fechaNacimiento(request.getFechaNacimiento())
                .estadoCivil(request.getEstadoCivil() != null ? request.getEstadoCivil() : EstadoCivil.SOLTERO)
                .ocupacion(request.getOcupacion())
                .tipoComunero(request.getTipoComunero() != null ? request.getTipoComunero() : TipoComunero.CALIFICADO)
                .sector(sector)
                .caserio(caserioNombre)
                .fechaIncorporacion(request.getFechaIncorporacion())
                .telefono(request.getTelefono())
                .direccion(request.getDireccion())
                .fotoUrl(request.getFotoUrl())
                .estado(request.getEstado() != null ? request.getEstado() : EstadoComunero.ACTIVO)
                .condicionHabilitacion(request.getCondicionHabilitacion() != null ? request.getCondicionHabilitacion() : CondicionHabilitacion.HABILITADO)
                .motivoInhabilitacion(request.getMotivoInhabilitacion())
                .build();
    }

    public void updateEntity(Comunero comunero, ComuneroRequest request, Sector sector) {
        if (request.getCodigoComunero() != null && !request.getCodigoComunero().isBlank()) {
            comunero.setCodigoComunero(request.getCodigoComunero().trim());
        }
        if (request.getNumeroPadron() != null && !request.getNumeroPadron().isBlank()) {
            comunero.setNumeroPadron(request.getNumeroPadron().trim());
        }
        comunero.setDni(request.getDni().trim());
        comunero.setNombres(request.getNombres().trim());
        comunero.setApellidos(request.getApellidos().trim());
        comunero.setFechaNacimiento(request.getFechaNacimiento());

        if (request.getEstadoCivil() != null) {
            comunero.setEstadoCivil(request.getEstadoCivil());
        }
        comunero.setOcupacion(request.getOcupacion());
        if (request.getTipoComunero() != null) {
            comunero.setTipoComunero(request.getTipoComunero());
        }

        if (sector != null) {
            comunero.setSector(sector);
            if (request.getCaserio() == null || request.getCaserio().isBlank()) {
                comunero.setCaserio(sector.getNombre());
            }
        }
        if (request.getCaserio() != null && !request.getCaserio().isBlank()) {
            comunero.setCaserio(request.getCaserio());
        }

        if (request.getFechaIncorporacion() != null) {
            comunero.setFechaIncorporacion(request.getFechaIncorporacion());
        }
        comunero.setTelefono(request.getTelefono());
        comunero.setDireccion(request.getDireccion());
        if (request.getFotoUrl() != null) {
            comunero.setFotoUrl(request.getFotoUrl());
        }
        if (request.getEstado() != null) {
            comunero.setEstado(request.getEstado());
        }
        if (request.getCondicionHabilitacion() != null) {
            comunero.setCondicionHabilitacion(request.getCondicionHabilitacion());
        }
        comunero.setMotivoInhabilitacion(request.getMotivoInhabilitacion());
    }

    public ComuneroResponse toResponse(Comunero comunero, BigDecimal totalDeuda, Long asistencias, Long inasistencias) {
        if (comunero == null) return null;

        String nombreCompleto = comunero.getApellidos() + ", " + comunero.getNombres();
        String padron = comunero.getNumeroPadron() != null ? comunero.getNumeroPadron() : comunero.getCodigoComunero();

        return ComuneroResponse.builder()
                .id(comunero.getId())
                .codigoComunero(comunero.getCodigoComunero())
                .numeroPadron(padron)
                .dni(comunero.getDni())
                .nombres(comunero.getNombres())
                .apellidos(comunero.getApellidos())
                .nombreCompleto(nombreCompleto)
                .fechaNacimiento(comunero.getFechaNacimiento())
                .estadoCivil(comunero.getEstadoCivil())
                .ocupacion(comunero.getOcupacion())
                .tipoComunero(comunero.getTipoComunero())
                .sectorId(comunero.getSector() != null ? comunero.getSector().getId() : null)
                .sectorNombre(comunero.getSector() != null ? comunero.getSector().getNombre() : comunero.getCaserio())
                .caserio(comunero.getCaserio() != null ? comunero.getCaserio() : (comunero.getSector() != null ? comunero.getSector().getNombre() : null))
                .fechaIncorporacion(comunero.getFechaIncorporacion())
                .telefono(comunero.getTelefono())
                .direccion(comunero.getDireccion())
                .fotoUrl(comunero.getFotoUrl())
                .estado(comunero.getEstado())
                .condicionHabilitacion(comunero.getCondicionHabilitacion())
                .motivoInhabilitacion(comunero.getMotivoInhabilitacion())
                .usuarioId(comunero.getUsuario() != null ? comunero.getUsuario().getId() : null)
                .username(comunero.getUsuario() != null ? comunero.getUsuario().getUsername() : null)
                .totalDeudaPendiente(totalDeuda != null ? totalDeuda : BigDecimal.ZERO)
                .totalAsistencias(asistencias != null ? asistencias : 0L)
                .totalInasistencias(inasistencias != null ? inasistencias : 0L)
                .fechaRegistro(comunero.getFechaRegistro())
                .fechaModificacion(comunero.getFechaModificacion())
                .build();
    }

    public ComuneroSummaryDto toSummaryDto(Comunero comunero) {
        if (comunero == null) return null;

        return ComuneroSummaryDto.builder()
                .id(comunero.getId())
                .codigoComunero(comunero.getCodigoComunero())
                .dni(comunero.getDni())
                .nombreCompleto(comunero.getApellidos() + ", " + comunero.getNombres())
                .sectorNombre(comunero.getSector() != null ? comunero.getSector().getNombre() : comunero.getCaserio())
                .estado(comunero.getEstado())
                .condicionHabilitacion(comunero.getCondicionHabilitacion())
                .build();
    }
}
