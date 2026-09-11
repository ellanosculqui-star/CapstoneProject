package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.FirmaActa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FirmaActaRepository extends JpaRepository<FirmaActa, Long> {

    List<FirmaActa> findByActaIdOrderByFechaHoraFirmaAsc(Long actaId);

    long countByActaId(Long actaId);

    boolean existsByActaIdAndComuneroId(Long actaId, Long comuneroId);
}
