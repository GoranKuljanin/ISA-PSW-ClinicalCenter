package com.klinickiCentar.klinika.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klinickiCentar.klinika.models.Pacijent;

public interface PacijentRepository extends JpaRepository<Pacijent, Long> {

	//Pacijent findOneByEmail(String email);
	
}
