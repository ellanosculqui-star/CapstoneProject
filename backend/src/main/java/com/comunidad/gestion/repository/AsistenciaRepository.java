package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.Asistencia;
import com.comunidad.gestion.entity.enums.EstadoAsistencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AsistenciaRepository extends JpaRepository<Asistencia, Long> {

    Optional<Asistencia> findByAsambleaIdAndComuneroId(Long asambleaId, Long comuneroId);

    boolean existsByAsambleaIdAndComuneroId(Long asambleaId, Long comuneroId);

    List<Asistencia> findByAsambleaIdOrderByComuneroApellidosAscComuneroNombresAsc(Long asambleaId);

    List<Asistencia> findByComuneroIdOrderByFechaHoraRegistroDesc(Long comuneroId);

    long countByAsambleaIdAndEstado(Long asambleaId, EstadoAsistencia estado);

    long countByAsambleaId(Long asambleaId);

    @Query("SELECT a FROM Asistencia a WHERE a.asamblea.id = :asambleaId AND a.estado = 'AUSENTE'")
    List<Asistencia> findAusentesByAsambleaId(@Param("asambleaId") Long asambleaId);
}
