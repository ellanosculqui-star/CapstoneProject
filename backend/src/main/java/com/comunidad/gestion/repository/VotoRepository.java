package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.Voto;
import com.comunidad.gestion.entity.enums.OpcionVoto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VotoRepository extends JpaRepository<Voto, Long> {

    boolean existsByVotacionIdAndComuneroId(Long votacionId, Long comuneroId);

    Optional<Voto> findByVotacionIdAndComuneroId(Long votacionId, Long comuneroId);

    List<Voto> findByVotacionId(Long votacionId);

    long countByVotacionId(Long votacionId);

    long countByVotacionIdAndOpcion(Long votacionId, OpcionVoto opcion);

    @Query("SELECT v.opcion, COUNT(v) FROM Voto v WHERE v.votacion.id = :votacionId GROUP BY v.opcion")
    List<Object[]> countVotesGroupedByOption(@Param("votacionId") Long votacionId);
}
