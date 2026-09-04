package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.Sector;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SectorRepository extends JpaRepository<Sector, Long> {
    Optional<Sector> findByNombre(String nombre);
    boolean existsByNombre(String nombre);
    List<Sector> findByActivoTrueOrderByNombreAsc();
}
