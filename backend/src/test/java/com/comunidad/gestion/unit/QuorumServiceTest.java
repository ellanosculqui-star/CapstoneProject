package com.comunidad.gestion.unit;

import com.comunidad.gestion.dto.asistencia.QuorumResponse;
import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import com.comunidad.gestion.repository.AsambleaRepository;
import com.comunidad.gestion.repository.AsistenciaRepository;
import com.comunidad.gestion.repository.ComuneroRepository;
import com.comunidad.gestion.service.impl.QuorumServiceImpl;
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
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class QuorumServiceTest {

    @Mock
    private AsambleaRepository asambleaRepository;

    @Mock
    private AsistenciaRepository asistenciaRepository;

    @Mock
    private ComuneroRepository comuneroRepository;

    @InjectMocks
    private QuorumServiceImpl quorumService;

    private Asamblea asamblea;

    @BeforeEach
    void setUp() {
        asamblea = Asamblea.builder()
                .id(1L)
                .titulo("Asamblea General de Prueba")
                .quorumMinimoPct(new BigDecimal("50.00"))
                .totalHabilitadosCorte(100)
                .build();
    }

    @Test
    @DisplayName("Debe calcular Quórum Alcanzado cuando los asistentes superan el 50%")
    void testQuorumAlcanzado() {
        when(asambleaRepository.findById(1L)).thenReturn(Optional.of(asamblea));
        when(asistenciaRepository.countByAsambleaIdAndEstado(1L, EstadoAsistencia.PRESENTE)).thenReturn(55L);
        when(asistenciaRepository.countByAsambleaIdAndEstado(1L, EstadoAsistencia.AUSENTE)).thenReturn(45L);
        when(asistenciaRepository.countByAsambleaIdAndEstado(1L, EstadoAsistencia.JUSTIFICADO)).thenReturn(0L);

        QuorumResponse response = quorumService.calcularQuorum(1L);

        assertNotNull(response);
        assertEquals(100, response.getTotalHabilitados());
        assertEquals(55L, response.getAsistentes());
        assertEquals(new BigDecimal("55.00"), response.getPorcentajeAsistencia());
        assertTrue(response.getQuorumAlcanzado());
        assertEquals("QUÓRUM ALCANZADO", response.getEstadoMensaje());
    }

    @Test
    @DisplayName("Debe calcular Quórum No Alcanzado cuando los asistentes son menores al 50%")
    void testQuorumNoAlcanzado() {
        when(asambleaRepository.findById(1L)).thenReturn(Optional.of(asamblea));
        when(asistenciaRepository.countByAsambleaIdAndEstado(1L, EstadoAsistencia.PRESENTE)).thenReturn(40L);
        when(asistenciaRepository.countByAsambleaIdAndEstado(1L, EstadoAsistencia.AUSENTE)).thenReturn(60L);
        when(asistenciaRepository.countByAsambleaIdAndEstado(1L, EstadoAsistencia.JUSTIFICADO)).thenReturn(0L);

        QuorumResponse response = quorumService.calcularQuorum(1L);

        assertNotNull(response);
        assertEquals(100, response.getTotalHabilitados());
        assertEquals(40L, response.getAsistentes());
        assertEquals(new BigDecimal("40.00"), response.getPorcentajeAsistencia());
        assertFalse(response.getQuorumAlcanzado());
        assertEquals("QUÓRUM NO ALCANZADO", response.getEstadoMensaje());
    }

    @Test
    @DisplayName("Debe usar conteo dinámico del padrón si no hay corte congelado")
    void testConteoDinamicoPadron() {
        asamblea.setTotalHabilitadosCorte(null);
        when(asambleaRepository.findById(1L)).thenReturn(Optional.of(asamblea));
        when(comuneroRepository.countByCondicionHabilitacionAndEstado(CondicionHabilitacion.HABILITADO, EstadoComunero.ACTIVO)).thenReturn(80L);
        when(asistenciaRepository.countByAsambleaIdAndEstado(1L, EstadoAsistencia.PRESENTE)).thenReturn(40L);
        when(asistenciaRepository.countByAsambleaIdAndEstado(1L, EstadoAsistencia.AUSENTE)).thenReturn(40L);
        when(asistenciaRepository.countByAsambleaIdAndEstado(1L, EstadoAsistencia.JUSTIFICADO)).thenReturn(0L);

        QuorumResponse response = quorumService.calcularQuorum(1L);

        assertNotNull(response);
        assertEquals(80, response.getTotalHabilitados());
        assertEquals(40L, response.getAsistentes());
        assertEquals(new BigDecimal("50.00"), response.getPorcentajeAsistencia());
        assertTrue(response.getQuorumAlcanzado());
    }
}
