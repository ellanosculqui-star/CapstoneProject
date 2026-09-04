package com.comunidad.gestion.service;

import com.comunidad.gestion.dto.prediccion.PrediccionQuorumDto;

public interface PrediccionService {
    PrediccionQuorumDto predecirQuorumProximaAsamblea();
    PrediccionQuorumDto predecirQuorumParaAsamblea(Long asambleaId);
}
