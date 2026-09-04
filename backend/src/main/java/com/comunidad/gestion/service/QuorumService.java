package com.comunidad.gestion.service;

import com.comunidad.gestion.dto.asistencia.QuorumResponse;

public interface QuorumService {
    QuorumResponse calcularQuorum(Long asambleaId);
}
