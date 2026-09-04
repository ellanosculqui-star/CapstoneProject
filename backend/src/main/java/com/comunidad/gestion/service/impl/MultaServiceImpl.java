package com.comunidad.gestion.service.impl;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.common.exception.ResourceNotFoundException;
import com.comunidad.gestion.common.response.PagedResponse;
import com.comunidad.gestion.dto.multa.*;
import com.comunidad.gestion.entity.*;
import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import com.comunidad.gestion.entity.enums.EstadoMulta;
import com.comunidad.gestion.entity.enums.TipoAccionAuditoria;
import com.comunidad.gestion.mapper.MultaMapper;
import com.comunidad.gestion.repository.*;
import com.comunidad.gestion.service.AuditoriaService;
import com.comunidad.gestion.service.MultaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MultaServiceImpl implements MultaService {

    private final MultaRepository multaRepository;
    private final PagoMultaRepository pagoMultaRepository;
    private final ConfigMultaRepository configMultaRepository;
    private final AsambleaRepository asambleaRepository;
    private final AsistenciaRepository asistenciaRepository;
    private final ComuneroRepository comuneroRepository;
    private final UsuarioRepository usuarioRepository;
    private final MultaMapper multaMapper;
    private final AuditoriaService auditoriaService;

    @Value("${app.business.default-fine-amount:20.00}")
    private BigDecimal defaultFineAmount;

    @Override
    @Transactional
    public ConfigMultaResponse configurarMontoMulta(ConfigMultaRequest request) {
        configMultaRepository.findFirstByActivaTrueOrderByFechaActualizacionDesc().ifPresent(c -> {
            c.setActiva(false);
            configMultaRepository.save(c);
        });

        ConfigMulta nuevaConfig = ConfigMulta.builder()
                .concepto(request.getConcepto().trim())
                .monto(request.getMonto())
                .activa(true)
                .fechaActualizacion(LocalDateTime.now())
                .build();

        ConfigMulta guardada = configMultaRepository.save(nuevaConfig);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.MODIFICAR_CONFIGURACION,
                "MULTAS",
                "Actualización de monto de multa por inasistencia a S/ " + guardada.getMonto(),
                "config_multas",
                guardada.getId(),
                null,
                "Monto configurado: " + guardada.getMonto(),
                "127.0.0.1"
        );

        return multaMapper.toConfigResponse(guardada);
    }

    @Override
    @Transactional(readOnly = true)
    public ConfigMultaResponse obtenerConfiguracionActual() {
        ConfigMulta config = configMultaRepository.findFirstByActivaTrueOrderByFechaActualizacionDesc()
                .orElseGet(() -> ConfigMulta.builder()
                        .concepto("Multa por inasistencia no justificada a asamblea")
                        .monto(defaultFineAmount)
                        .activa(true)
                        .fechaActualizacion(LocalDateTime.now())
                        .build());

        return multaMapper.toConfigResponse(config);
    }

    @Override
    @Transactional
    public List<MultaResponse> generarMultasPorInasistencia(Long asambleaId) {
        Asamblea asamblea = asambleaRepository.findById(asambleaId)
                .orElseThrow(() -> new ResourceNotFoundException("Asamblea", "id", asambleaId));

        if (asamblea.getEstado() != EstadoAsamblea.FINALIZADA) {
            throw new BadRequestException("Solo se pueden generar multas para asambleas en estado FINALIZADA");
        }

        if (asamblea.getMultasGeneradas()) {
            throw new BadRequestException("Las multas para esta asamblea ya fueron generadas previamente");
        }

        BigDecimal montoMulta = configMultaRepository.findFirstByActivaTrueOrderByFechaActualizacionDesc()
                .map(ConfigMulta::getMonto)
                .orElse(defaultFineAmount);

        List<Asistencia> ausentes = asistenciaRepository.findAusentesByAsambleaId(asambleaId);
        List<Multa> multasCreadas = new ArrayList<>();

        for (Asistencia asis : ausentes) {
            Comunero comunero = asis.getComunero();
            if (!multaRepository.existsByAsambleaIdAndComuneroId(asambleaId, comunero.getId())) {
                Multa multa = Multa.builder()
                        .comunero(comunero)
                        .asamblea(asamblea)
                        .concepto("Inasistencia a " + asamblea.getTitulo() + " (" + asamblea.getFecha() + ")")
                        .montoOriginal(montoMulta)
                        .saldoPendiente(montoMulta)
                        .estado(EstadoMulta.PENDIENTE)
                        .fechaEmision(LocalDate.now())
                        .fechaRegistro(LocalDateTime.now())
                        .build();

                multasCreadas.add(multa);
            }
        }

        List<Multa> guardadas = multaRepository.saveAll(multasCreadas);

        asamblea.setMultasGeneradas(true);
        asambleaRepository.save(asamblea);

        String currentUser = getCurrentUsername();
        auditoriaService.registrarLog(
                currentUser,
                TipoAccionAuditoria.GENERAR_MULTAS_MASIVAS,
                "MULTAS",
                "Generación masiva de " + guardadas.size() + " multas para la asamblea #" + asambleaId + " (" + asamblea.getTitulo() + ")",
                "multas",
                asambleaId,
                null,
                "Total multas generadas: " + guardadas.size(),
                "127.0.0.1"
        );

        return guardadas.stream().map(multaMapper::toResponse).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public PagoMultaResponse registrarPago(Long multaId, RegistrarPagoRequest request) {
        Multa multa = multaRepository.findById(multaId)
                .orElseThrow(() -> new ResourceNotFoundException("Multa", "id", multaId));

        if (multa.getEstado() == EstadoMulta.PAGADA) {
            throw new BadRequestException("La multa ya se encuentra completamente pagada");
        }
        if (multa.getEstado() == EstadoMulta.ANULADA || multa.getEstado() == EstadoMulta.CONDONADA) {
            throw new BadRequestException("No se pueden registrar pagos a una multa en estado " + multa.getEstado());
        }

        BigDecimal montoPago = request.getMontoPagado();
        if (montoPago.compareTo(multa.getSaldoPendiente()) > 0) {
            throw new BadRequestException("El monto a pagar (S/ " + montoPago + ") excede el saldo pendiente (S/ " + multa.getSaldoPendiente() + ")");
        }

        BigDecimal nuevoSaldo = multa.getSaldoPendiente().subtract(montoPago);
        multa.setSaldoPendiente(nuevoSaldo);

        if (nuevoSaldo.compareTo(BigDecimal.ZERO) == 0) {
            multa.setEstado(EstadoMulta.PAGADA);
        }

        Usuario usuarioCobrador = getUsuarioActual();

        String fechaStr = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        String randomSuffix = UUID.randomUUID().toString().substring(0, 4).toUpperCase();
        String numeroRecibo = "REC-" + fechaStr + "-" + multa.getId() + "-" + randomSuffix;

        PagoMulta pago = PagoMulta.builder()
                .multa(multa)
                .montoPagado(montoPago)
                .fechaPago(LocalDate.now())
                .numeroRecibo(numeroRecibo)
                .metodoPago(request.getMetodoPago())
                .observacion(request.getObservacion())
                .registradoPor(usuarioCobrador)
                .fechaRegistro(LocalDateTime.now())
                .build();

        PagoMulta guardado = pagoMultaRepository.save(pago);
        multaRepository.save(multa);

        auditoriaService.registrarLog(
                usuarioCobrador != null ? usuarioCobrador.getUsername() : "SISTEMA",
                TipoAccionAuditoria.REGISTRAR_PAGO,
                "MULTAS",
                "Cobro de multa #" + multaId + " por S/ " + montoPago + " con recibo " + numeroRecibo,
                "pagos_multas",
                guardado.getId(),
                "saldo anterior: S/ " + (nuevoSaldo.add(montoPago)),
                "nuevo saldo: S/ " + nuevoSaldo + " | Estado: " + multa.getEstado(),
                "127.0.0.1"
        );

        return multaMapper.toPagoResponse(guardado);
    }

    @Override
    @Transactional(readOnly = true)
    public MultaResponse obtenerPorId(Long id) {
        Multa multa = multaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Multa", "id", id));
        return multaMapper.toResponse(multa);
    }

    @Override
    @Transactional(readOnly = true)
    public PagedResponse<MultaResponse> listarMultas(String busqueda,
                                                     Long comuneroId,
                                                     Long asambleaId,
                                                     EstadoMulta estado,
                                                     LocalDate fechaDesde,
                                                     LocalDate fechaHasta,
                                                     Pageable pageable) {
        Page<Multa> page = multaRepository.findWithFilters(busqueda, comuneroId, asambleaId, estado, fechaDesde, fechaHasta, pageable);
        return PagedResponse.of(page.map(multaMapper::toResponse));
    }

    @Override
    @Transactional(readOnly = true)
    public EstadoCuentaComuneroDto obtenerEstadoCuentaComunero(Long comuneroId) {
        Comunero comunero = comuneroRepository.findById(comuneroId)
                .orElseThrow(() -> new ResourceNotFoundException("Comunero", "id", comuneroId));

        List<Multa> multas = multaRepository.findByComuneroIdOrderByFechaEmisionDesc(comuneroId);
        List<MultaResponse> multasDto = multas.stream().map(multaMapper::toResponse).collect(Collectors.toList());

        BigDecimal totalOriginal = multas.stream()
                .map(Multa::getMontoOriginal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal totalPendiente = multas.stream()
                .filter(m -> m.getEstado() == EstadoMulta.PENDIENTE)
                .map(Multa::getSaldoPendiente)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal totalPagado = totalOriginal.subtract(totalPendiente);
        long pendientesCount = multas.stream().filter(m -> m.getEstado() == EstadoMulta.PENDIENTE).count();

        return EstadoCuentaComuneroDto.builder()
                .comuneroId(comunero.getId())
                .codigoComunero(comunero.getCodigoComunero())
                .dni(comunero.getDni())
                .nombreCompleto(comunero.getApellidos() + ", " + comunero.getNombres())
                .sectorNombre(comunero.getSector() != null ? comunero.getSector().getNombre() : "")
                .totalMultasEmitidas(totalOriginal)
                .totalPagado(totalPagado)
                .totalDeudaPendiente(totalPendiente)
                .cantidadMultasPendientes((int) pendientesCount)
                .multas(multasDto)
                .build();
    }

    @Override
    @Transactional(readOnly = true)
    public ResumenFinancieroDto obtenerResumenFinanciero() {
        BigDecimal totalOriginal = multaRepository.sumTotalMontoOriginal();
        BigDecimal totalRecaudado = pagoMultaRepository.sumTotalMontoPagado();
        BigDecimal totalPendiente = multaRepository.sumTotalSaldoPendiente();

        long pendientes = multaRepository.countByEstado(EstadoMulta.PENDIENTE);
        long pagadas = multaRepository.countByEstado(EstadoMulta.PAGADA);
        long anuladas = multaRepository.countByEstado(EstadoMulta.ANULADA);

        return ResumenFinancieroDto.builder()
                .totalMultasEmitidas(totalOriginal != null ? totalOriginal : BigDecimal.ZERO)
                .totalRecaudado(totalRecaudado != null ? totalRecaudado : BigDecimal.ZERO)
                .totalDeudaPorCobrar(totalPendiente != null ? totalPendiente : BigDecimal.ZERO)
                .cantidadMultasPendientes(pendientes)
                .cantidadMultasPagadas(pagadas)
                .cantidadMultasAnuladas(anuladas)
                .build();
    }

    @Override
    @Transactional(readOnly = true)
    public PagedResponse<PagoMultaResponse> listarPagos(LocalDate fechaDesde, LocalDate fechaHasta, Pageable pageable) {
        Page<PagoMulta> page = pagoMultaRepository.findWithFilters(fechaDesde, fechaHasta, pageable);
        return PagedResponse.of(page.map(multaMapper::toPagoResponse));
    }

    private Usuario getUsuarioActual() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated() && !"anonymousUser".equals(auth.getName())) {
            return usuarioRepository.findByUsername(auth.getName()).orElse(null);
        }
        return null;
    }

    private String getCurrentUsername() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated() && !"anonymousUser".equals(auth.getName())) {
            return auth.getName();
        }
        return "SISTEMA";
    }
}
