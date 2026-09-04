package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.Asamblea;
import com.comunidad.gestion.entity.enums.EstadoAsamblea;
import com.comunidad.gestion.entity.enums.TipoAsamblea;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface AsambleaRepository extends JpaRepository<Asamblea, Long> {

    @Query("SELECT a FROM Asamblea a WHERE " +
           "(:busqueda IS NULL OR :busqueda = '' OR " +
           "LOWER(a.titulo) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(a.lugar) LIKE LOWER(CONCAT('%', :busqueda, '%'))) AND " +
           "(:tipo IS NULL OR a.tipo = :tipo) AND " +
           "(:estado IS NULL OR a.estado = :estado) AND " +
           "(:fechaDesde IS NULL OR a.fecha >= :fechaDesde) AND " +
           "(:fechaHasta IS NULL OR a.fecha <= :fechaHasta)")
    Page<Asamblea> findWithFilters(@Param("busqueda") String busqueda,
                                   @Param("tipo") TipoAsamblea tipo,
                                   @Param("estado") EstadoAsamblea estado,
                                   @Param("fechaDesde") LocalDate fechaDesde,
                                   @Param("fechaHasta") LocalDate fechaHasta,
                                   Pageable pageable);

    Optional<Asamblea> findTopByEstadoOrderByFechaDescHoraInicioDesc(EstadoAsamblea estado);

    Optional<Asamblea> findTopByFechaGreaterThanEqualAndEstadoNotOrderByFechaAscHoraInicioAsc(LocalDate fecha, EstadoAsamblea estado);

    List<Asamblea> findTop5ByEstadoOrderByFechaDesc(EstadoAsamblea estado);

    List<Asamblea> findTop10ByEstadoOrderByFechaDesc(EstadoAsamblea estado);

    long countByEstado(EstadoAsamblea estado);
}
