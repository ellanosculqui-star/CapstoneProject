package com.comunidad.gestion.repository;

import com.comunidad.gestion.entity.Acuerdo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AcuerdoRepository extends JpaRepository<Acuerdo, Long> {
    List<Acuerdo> findByActaIdOrderByNumeroAsc(Long actaId);
}
