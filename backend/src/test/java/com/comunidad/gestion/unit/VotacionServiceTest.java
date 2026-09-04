package com.comunidad.gestion.unit;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.dto.votacion.EmitirVotoRequest;
import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.Asistencia;
import com.comunidad.gestion.entity.Comunero;
import com.comunidad.gestion.entity.Votacion;
import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import com.comunidad.gestion.entity.enums.EstadoVotacion;
import com.comunidad.gestion.entity.enums.OpcionVoto;
import com.comunidad.gestion.mapper.VotacionMapper;
import com.comunidad.gestion.repository.*;
import com.comunidad.gestion.service.AuditoriaService;
import com.comunidad.gestion.service.impl.VotacionServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class VotacionServiceTest {

    @Mock
    private VotacionRepository votacionRepository;

    @Mock
    private VotoRepository votoRepository;

    @Mock
    private ComuneroRepository comuneroRepository;

    @Mock
    private AsistenciaRepository asistenciaRepository;

    @Mock
    private UsuarioRepository usuarioRepository;

    @Mock
    private VotacionMapper votacionMapper;

    @Mock
    private AuditoriaService auditoriaService;

    @InjectMocks
    private VotacionServiceImpl votacionService;

    private Votacion votacion;
    private Comunero comunero;
    private Asamblea asamblea;

    @BeforeEach
    void setUp() {
        asamblea = Asamblea.builder().id(1L).build();
        votacion = Votacion.builder().id(5L).asamblea(asamblea).estado(EstadoVotacion.ABIERTA).build();
        comunero = Comunero.builder().id(10L).codigoComunero("COM-010").condicionHabilitacion(CondicionHabilitacion.HABILITADO).build();
    }

    @Test
    @DisplayName("Debe lanzar excepción si el comunero intenta votar por segunda vez")
    void testEvitarVotoDuplicado() {
        when(votacionRepository.findById(5L)).thenReturn(Optional.of(votacion));
        when(comuneroRepository.findById(10L)).thenReturn(Optional.of(comunero));
        when(asistenciaRepository.findByAsambleaIdAndComuneroId(1L, 10L)).thenReturn(Optional.of(
                Asistencia.builder().estado(EstadoAsistencia.PRESENTE).build()
        ));
        when(votoRepository.existsByVotacionIdAndComuneroId(5L, 10L)).thenReturn(true);

        EmitirVotoRequest request = EmitirVotoRequest.builder()
                .comuneroId(10L)
                .opcion(OpcionVoto.A_FAVOR)
                .build();

        assertThrows(BadRequestException.class, () -> votacionService.emitirVoto(5L, request));
    }

    @Test
    @DisplayName("Debe lanzar excepción si el comunero no estuvo PRESENTE en la asamblea")
    void testVotoDebeEstarPresente() {
        when(votacionRepository.findById(5L)).thenReturn(Optional.of(votacion));
        when(comuneroRepository.findById(10L)).thenReturn(Optional.of(comunero));
        when(asistenciaRepository.findByAsambleaIdAndComuneroId(1L, 10L)).thenReturn(Optional.of(
                Asistencia.builder().estado(EstadoAsistencia.AUSENTE).build()
        ));

        EmitirVotoRequest request = EmitirVotoRequest.builder()
                .comuneroId(10L)
                .opcion(OpcionVoto.A_FAVOR)
                .build();

        assertThrows(BadRequestException.class, () -> votacionService.emitirVoto(5L, request));
    }
}
