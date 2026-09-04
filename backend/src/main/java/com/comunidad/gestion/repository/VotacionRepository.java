package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.Votacion;
import com.comunidad.gestion.entity.enums.EstadoVotacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VotacionRepository extends JpaRepository<Votacion, Long> {

    List<Votacion> findByAsambleaIdOrderByFechaCreacionDesc(Long asambleaId);

    Optional<Votacion> findByIdAndAsambleaId(Long id, Long asambleaId);

    long countByEstado(EstadoVotacion estado);
}
