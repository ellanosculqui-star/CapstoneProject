package com.comunidad.gestion.unit;

import com.comunidad.gestion.common.exception.BadRequestException;
import com.comunidad.gestion.dto.comunero.ComuneroRequest;
import com.comunidad.gestion.repository.*;
import com.comunidad.gestion.service.AuditoriaService;
import com.comunidad.gestion.service.impl.ComuneroServiceImpl;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ComuneroServiceTest {

    @Mock
    private ComuneroRepository comuneroRepository;

    @Mock
    private SectorRepository sectorRepository;

    @Mock
    private UsuarioRepository usuarioRepository;

    @Mock
    private MultaRepository multaRepository;

    @Mock
    private AsistenciaRepository asistenciaRepository;

    @Mock
    private AuditoriaService auditoriaService;

    @InjectMocks
    private ComuneroServiceImpl comuneroService;

    @Test
    @DisplayName("Debe lanzar excepción si el DNI del comunero ya existe")
    void testValidarDniDuplicado() {
        when(comuneroRepository.existsByDni("45678901")).thenReturn(true);

        ComuneroRequest request = ComuneroRequest.builder()
                .dni("45678901")
                .codigoComunero("COM-100")
                .nombres("Pedro")
                .apellidos("Quispe")
                .build();

        assertThrows(BadRequestException.class, () -> comuneroService.crearComunero(request));
    }
}
