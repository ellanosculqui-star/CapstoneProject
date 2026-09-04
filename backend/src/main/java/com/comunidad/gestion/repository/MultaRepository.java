package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.Multa;
import com.comunidad.gestion.entity.enums.EstadoMulta;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface MultaRepository extends JpaRepository<Multa, Long> {

    boolean existsByAsambleaIdAndComuneroId(Long asambleaId, Long comuneroId);

    List<Multa> findByComuneroIdOrderByFechaEmisionDesc(Long comuneroId);

    List<Multa> findByAsambleaId(Long asambleaId);

    @Query("SELECT m FROM Multa m WHERE " +
           "(:busqueda IS NULL OR :busqueda = '' OR " +
           "LOWER(m.comunero.nombres) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(m.comunero.apellidos) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(m.comunero.dni) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(m.concepto) LIKE LOWER(CONCAT('%', :busqueda, '%'))) AND " +
           "(:comuneroId IS NULL OR m.comunero.id = :comuneroId) AND " +
           "(:asambleaId IS NULL OR m.asamblea.id = :asambleaId) AND " +
           "(:estado IS NULL OR m.estado = :estado) AND " +
           "(:fechaDesde IS NULL OR m.fechaEmision >= :fechaDesde) AND " +
           "(:fechaHasta IS NULL OR m.fechaEmision <= :fechaHasta)")
    Page<Multa> findWithFilters(@Param("busqueda") String busqueda,
                                @Param("comuneroId") Long comuneroId,
                                @Param("asambleaId") Long asambleaId,
                                @Param("estado") EstadoMulta estado,
                                @Param("fechaDesde") LocalDate fechaDesde,
                                @Param("fechaHasta") LocalDate fechaHasta,
                                Pageable pageable);

    @Query("SELECT COALESCE(SUM(m.saldoPendiente), 0) FROM Multa m WHERE m.comunero.id = :comuneroId AND m.estado = 'PENDIENTE'")
    BigDecimal sumSaldoPendienteByComuneroId(@Param("comuneroId") Long comuneroId);

    @Query("SELECT COALESCE(SUM(m.saldoPendiente), 0) FROM Multa m WHERE m.estado = 'PENDIENTE'")
    BigDecimal sumTotalSaldoPendiente();

    @Query("SELECT COALESCE(SUM(m.montoOriginal), 0) FROM Multa m")
    BigDecimal sumTotalMontoOriginal();

    long countByEstado(EstadoMulta estado);
}
