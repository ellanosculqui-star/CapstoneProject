package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.Auditoria;
import com.comunidad.gestion.entity.enums.TipoAccionAuditoria;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface AuditoriaRepository extends JpaRepository<Auditoria, Long> {

    @Query("SELECT a FROM Auditoria a WHERE " +
           "(:busqueda IS NULL OR :busqueda = '' OR " +
           "LOWER(a.username) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(a.registroAfectado) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(a.modulo) LIKE LOWER(CONCAT('%', :busqueda, '%'))) AND " +
           "(:modulo IS NULL OR a.modulo = :modulo) AND " +
           "(:accion IS NULL OR a.accion = :accion) AND " +
           "(:username IS NULL OR a.username = :username) AND " +
           "(:fechaDesde IS NULL OR a.fechaHora >= :fechaDesde) AND " +
           "(:fechaHasta IS NULL OR a.fechaHora <= :fechaHasta) " +
           "ORDER BY a.fechaHora DESC")
    Page<Auditoria> findWithFilters(@Param("busqueda") String busqueda,
                                   @Param("modulo") String modulo,
                                   @Param("accion") TipoAccionAuditoria accion,
                                   @Param("username") String username,
                                   @Param("fechaDesde") LocalDateTime fechaDesde,
                                   @Param("fechaHasta") LocalDateTime fechaHasta,
                                   Pageable pageable);
}
