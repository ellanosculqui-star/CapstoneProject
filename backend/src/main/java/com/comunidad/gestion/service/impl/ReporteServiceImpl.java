package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.dto.acta.ActaResponse;
import com.comunidad.gestion.dto.asistencia.AsistenciaResponse;
import com.comunidad.gestion.dto.asistencia.QuorumResponse;
import com.comunidad.gestion.dto.comunero.ComuneroResponse;
import com.comunidad.gestion.dto.multa.MultaResponse;
import com.comunidad.gestion.dto.multa.PagoMultaResponse;
import com.comunidad.gestion.dto.reportes.ReporteFilterDto;
import com.comunidad.gestion.entity.Comunero;
import com.comunidad.gestion.entity.Multa;
import com.comunidad.gestion.entity.PagoMulta;
import com.comunidad.gestion.mapper.ActaMapper;
import com.comunidad.gestion.mapper.AsistenciaMapper;
import com.comunidad.gestion.mapper.ComuneroMapper;
import com.comunidad.gestion.mapper.MultaMapper;
import com.comunidad.gestion.repository.*;
import com.comunidad.gestion.service.QuorumService;
import com.comunidad.gestion.service.ReporteService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReporteServiceImpl implements ReporteService {

    private final ComuneroRepository comuneroRepository;
    private final AsistenciaRepository asistenciaRepository;
    private final MultaRepository multaRepository;
    private final PagoMultaRepository pagoMultaRepository;
    private final ActaRepository actaRepository;
    private final QuorumService quorumService;
    private final ComuneroMapper comuneroMapper;
    private final AsistenciaMapper asistenciaMapper;
    private final MultaMapper multaMapper;
    private final ActaMapper actaMapper;

    @Override
    @Transactional(readOnly = true)
    public List<ComuneroResponse> generarReportePadron(ReporteFilterDto filtro) {
        return comuneroRepository.findWithFilters(
                null,
                filtro.getSectorId(),
                filtro.getEstadoComunero(),
                filtro.getCondicionHabilitacion(),
                Pageable.unpaged()
        ).getContent().stream()
                .map(c -> {
                    BigDecimal deuda = multaRepository.sumSaldoPendienteByComuneroId(c.getId());
                    return comuneroMapper.toResponse(c, deuda, null, null);
                })
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<AsistenciaResponse> generarReporteAsistencia(ReporteFilterDto filtro) {
        if (filtro.getAsambleaId() != null) {
            return asistenciaRepository.findByAsambleaIdOrderByComuneroApellidosAscComuneroNombresAsc(filtro.getAsambleaId()).stream()
                    .map(asistenciaMapper::toResponse)
                    .collect(Collectors.toList());
        }
        if (filtro.getComuneroId() != null) {
            return asistenciaRepository.findByComuneroIdOrderByFechaHoraRegistroDesc(filtro.getComuneroId()).stream()
                    .map(asistenciaMapper::toResponse)
                    .collect(Collectors.toList());
        }
        return asistenciaRepository.findAll().stream().map(asistenciaMapper::toResponse).collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public QuorumResponse generarReporteQuorum(Long asambleaId) {
        return quorumService.calcularQuorum(asambleaId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<MultaResponse> generarReporteMultas(ReporteFilterDto filtro) {
        return multaRepository.findWithFilters(
                null,
                filtro.getComuneroId(),
                filtro.getAsambleaId(),
                filtro.getEstadoMulta(),
                filtro.getFechaDesde(),
                filtro.getFechaHasta(),
                Pageable.unpaged()
        ).getContent().stream().map(multaMapper::toResponse).collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<PagoMultaResponse> generarReportePagos(ReporteFilterDto filtro) {
        return pagoMultaRepository.findWithFilters(
                filtro.getFechaDesde(),
                filtro.getFechaHasta(),
                Pageable.unpaged()
        ).getContent().stream().map(multaMapper::toPagoResponse).collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<ActaResponse> generarReporteActas(ReporteFilterDto filtro) {
        return actaRepository.findWithFilters(
                null,
                null,
                filtro.getFechaDesde(),
                filtro.getFechaHasta(),
                Pageable.unpaged()
        ).getContent().stream().map(a -> actaMapper.toResponse(a, null, null, null)).collect(Collectors.toList());
    }
}
