package com.comunidad.gestion.unit;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.dto.multa.PagoMultaResponse;
import com.comunidad.gestion.dto.multa.RegistrarPagoRequest;
import com.comunidad.gestion.entity.Comunero;
import com.comunidad.gestion.entity.Multa;
import com.comunidad.gestion.entity.PagoMulta;
import com.comunidad.gestion.entity.enums.EstadoMulta;
import com.comunidad.gestion.entity.enums.MetodoPago;
import com.comunidad.gestion.mapper.MultaMapper;
import com.comunidad.gestion.repository.MultaRepository;
import com.comunidad.gestion.repository.PagoMultaRepository;
import com.comunidad.gestion.repository.UsuarioRepository;
import com.comunidad.gestion.service.AuditoriaService;
import com.comunidad.gestion.service.impl.MultaServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class MultaServiceTest {

    @Mock
    private MultaRepository multaRepository;

    @Mock
    private PagoMultaRepository pagoMultaRepository;

    @Mock
    private UsuarioRepository usuarioRepository;

    @Mock
    private MultaMapper multaMapper;

    @Mock
    private AuditoriaService auditoriaService;

    @InjectMocks
    private MultaServiceImpl multaService;

    private Multa multa;
    private Comunero comunero;

    @BeforeEach
    void setUp() {
        comunero = Comunero.builder().id(10L).nombres("Juan").apellidos("Pérez").dni("12345678").build();
        multa = Multa.builder()
                .id(1L)
                .comunero(comunero)
                .montoOriginal(new BigDecimal("20.00"))
                .saldoPendiente(new BigDecimal("20.00"))
                .estado(EstadoMulta.PENDIENTE)
                .build();
    }

    @Test
    @DisplayName("Debe amortizar saldo y cambiar estado a PAGADA cuando se cancela el monto total")
    void testRegistrarPagoTotal() {
        when(multaRepository.findById(1L)).thenReturn(Optional.of(multa));
        when(pagoMultaRepository.save(any(PagoMulta.class))).thenAnswer(i -> i.getArgument(0));
        when(multaRepository.save(any(Multa.class))).thenAnswer(i -> i.getArgument(0));

        PagoMultaResponse mockResponse = PagoMultaResponse.builder()
                .id(100L)
                .multaId(1L)
                .montoPagado(new BigDecimal("20.00"))
                .numeroRecibo("REC-2026-TEST")
                .build();
        when(multaMapper.toPagoResponse(any())).thenReturn(mockResponse);

        RegistrarPagoRequest request = RegistrarPagoRequest.builder()
                .montoPagado(new BigDecimal("20.00"))
                .metodoPago(MetodoPago.EFECTIVO)
                .build();

        PagoMultaResponse response = multaService.registrarPago(1L, request);

        assertNotNull(response);
        assertEquals(0, BigDecimal.ZERO.compareTo(multa.getSaldoPendiente()));
        assertEquals(EstadoMulta.PAGADA, multa.getEstado());
        verify(pagoMultaRepository, times(1)).save(any());
        verify(multaRepository, times(1)).save(multa);
    }

    @Test
    @DisplayName("Debe lanzar excepción si el pago excede el saldo pendiente")
    void testPagoExcedeSaldo() {
        when(multaRepository.findById(1L)).thenReturn(Optional.of(multa));

        RegistrarPagoRequest request = RegistrarPagoRequest.builder()
                .montoPagado(new BigDecimal("25.00"))
                .metodoPago(MetodoPago.EFECTIVO)
                .build();

        assertThrows(BadRequestException.class, () -> multaService.registrarPago(1L, request));
    }
}
