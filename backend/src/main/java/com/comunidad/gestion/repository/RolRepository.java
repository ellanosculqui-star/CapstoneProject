package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.Rol;
import com.comunidad.gestion.entity.enums.RolEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RolRepository extends JpaRepository<Rol, Long> {
    Optional<Rol> findByNombre(RolEnum nombre);
    boolean existsByNombre(RolEnum nombre);
}
