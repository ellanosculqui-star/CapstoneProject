package com.comunidad.gestion.service;

import com.comunidad.gestion.dto.votacion.CrearVotacionRequest;
import com.comunidad.gestion.dto.votacion.EmitirVotoRequest;
import com.comunidad.gestion.dto.votacion.VotacionResponse;

import java.util.List;

public interface VotacionService {

    VotacionResponse crearVotacion(Long asambleaId, CrearVotacionRequest request);

    VotacionResponse abrirVotacion(Long id);

    VotacionResponse cerrarVotacion(Long id);

    VotacionResponse emitirVoto(Long id, EmitirVotoRequest request);

    VotacionResponse obtenerPorId(Long id);

    List<VotacionResponse> listarPorAsamblea(Long asambleaId);
}
