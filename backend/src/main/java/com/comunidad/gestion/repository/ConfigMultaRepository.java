package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.ConfigMulta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ConfigMultaRepository extends JpaRepository<ConfigMulta, Long> {
    Optional<ConfigMulta> findFirstByActivaTrueOrderByFechaActualizacionDesc();
}
