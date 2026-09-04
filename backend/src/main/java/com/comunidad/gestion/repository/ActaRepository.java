package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.Acta;
import com.comunidad.gestion.entity.enums.EstadoActa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface ActaRepository extends JpaRepository<Acta, Long> {

    Optional<Acta> findByAsambleaId(Long asambleaId);

    boolean existsByAsambleaId(Long asambleaId);

    Optional<Acta> findByNumeroActa(String numeroActa);

    boolean existsByNumeroActa(String numeroActa);

    @Query("SELECT a FROM Acta a WHERE " +
           "(:busqueda IS NULL OR :busqueda = '' OR " +
           "LOWER(a.numeroActa) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(a.asamblea.titulo) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(a.agenda) LIKE LOWER(CONCAT('%', :busqueda, '%'))) AND " +
           "(:estado IS NULL OR a.estado = :estado) AND " +
           "(:fechaDesde IS NULL OR a.fecha >= :fechaDesde) AND " +
           "(:fechaHasta IS NULL OR a.fecha <= :fechaHasta)")
    Page<Acta> findWithFilters(@Param("busqueda") String busqueda,
                               @Param("estado") EstadoActa estado,
                               @Param("fechaDesde") LocalDate fechaDesde,
                               @Param("fechaHasta") LocalDate fechaHasta,
                               Pageable pageable);

    long countByEstado(EstadoActa estado);
}
