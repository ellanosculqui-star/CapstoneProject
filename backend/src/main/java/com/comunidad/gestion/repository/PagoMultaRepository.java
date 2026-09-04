package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.PagoMulta;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface PagoMultaRepository extends JpaRepository<PagoMulta, Long> {

    Optional<PagoMulta> findByNumeroRecibo(String numeroRecibo);

    boolean existsByNumeroRecibo(String numeroRecibo);

    List<PagoMulta> findByMultaIdOrderByFechaPagoDesc(Long multaId);

    @Query("SELECT p FROM PagoMulta p WHERE " +
           "(:fechaDesde IS NULL OR p.fechaPago >= :fechaDesde) AND " +
           "(:fechaHasta IS NULL OR p.fechaPago <= :fechaHasta) " +
           "ORDER BY p.fechaPago DESC, p.fechaRegistro DESC")
    Page<PagoMulta> findWithFilters(@Param("fechaDesde") LocalDate fechaDesde,
                                    @Param("fechaHasta") LocalDate fechaHasta,
                                    Pageable pageable);

    @Query("SELECT COALESCE(SUM(p.montoPagado), 0) FROM PagoMulta p")
    BigDecimal sumTotalMontoPagado();

    @Query("SELECT COALESCE(SUM(p.montoPagado), 0) FROM PagoMulta p WHERE p.fechaPago >= :fechaDesde AND p.fechaPago <= :fechaHasta")
    BigDecimal sumMontoPagadoBetween(@Param("fechaDesde") LocalDate fechaDesde, @Param("fechaHasta") LocalDate fechaHasta);
}
