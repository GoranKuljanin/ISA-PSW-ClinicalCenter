package com.klinickiCentar.klinika.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klinickiCentar.klinika.models.Pregled;

public interface PreglediRepository extends JpaRepository<Pregled, Long>{

	Pregled findOneById(Long id);
	List<Pregled> findByPacijentId(Long id);
	//List<Pregled> findByDatum(String datum);
}
