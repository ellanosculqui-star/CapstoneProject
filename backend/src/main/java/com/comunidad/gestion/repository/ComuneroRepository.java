package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.Comunero;
import com.comunidad.gestion.entity.enums.CondicionHabilitacion;
import com.comunidad.gestion.entity.enums.EstadoComunero;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ComuneroRepository extends JpaRepository<Comunero, Long> {

    Optional<Comunero> findByDni(String dni);

    Optional<Comunero> findByCodigoComunero(String codigoComunero);

    Optional<Comunero> findByUsuarioId(Long usuarioId);

    boolean existsByDni(String dni);

    boolean existsByCodigoComunero(String codigoComunero);

    @Query("SELECT c FROM Comunero c WHERE " +
           "(:busqueda IS NULL OR :busqueda = '' OR " +
           "LOWER(c.nombres) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(c.apellidos) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(c.dni) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(c.codigoComunero) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(c.numeroPadron) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(c.caserio) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(c.sector.nombre) LIKE LOWER(CONCAT('%', :busqueda, '%'))) AND " +
           "(:sectorId IS NULL OR c.sector.id = :sectorId) AND " +
           "(:estado IS NULL OR c.estado = :estado) AND " +
           "(:condicion IS NULL OR c.condicionHabilitacion = :condicion)")
    Page<Comunero> findWithFilters(@Param("busqueda") String busqueda,
                                   @Param("sectorId") Long sectorId,
                                   @Param("estado") EstadoComunero estado,
                                   @Param("condicion") CondicionHabilitacion condicion,
                                   Pageable pageable);

    @Query("SELECT c FROM Comunero c WHERE c.estado = 'ACTIVO' AND c.condicionHabilitacion = 'HABILITADO' ORDER BY c.apellidos ASC, c.nombres ASC")
    List<Comunero> findAllHabilitados();

    long countByCondicionHabilitacionAndEstado(CondicionHabilitacion condicion, EstadoComunero estado);

    long countByEstado(EstadoComunero estado);
}
