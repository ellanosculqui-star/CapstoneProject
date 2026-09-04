package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByUsername(String username);
    Optional<Usuario> findByEmail(String email);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);

    @Query("SELECT u FROM Usuario u WHERE " +
           "(:busqueda IS NULL OR :busqueda = '' OR " +
           "LOWER(u.username) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(u.nombres) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(u.apellidos) LIKE LOWER(CONCAT('%', :busqueda, '%')) OR " +
           "LOWER(u.email) LIKE LOWER(CONCAT('%', :busqueda, '%'))) AND " +
           "(:rolId IS NULL OR u.rol.id = :rolId) AND " +
           "(:activo IS NULL OR u.activo = :activo)")
    Page<Usuario> findWithFilters(@Param("busqueda") String busqueda,
                                  @Param("rolId") Long rolId,
                                  @Param("activo") Boolean activo,
                                  Pageable pageable);
}
