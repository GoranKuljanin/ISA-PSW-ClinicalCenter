package com.klinickiCentar.klinika.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klinickiCentar.klinika.models.AdministratorKlinike;
import com.klinickiCentar.klinika.models.Klinika;
import com.klinickiCentar.klinika.models.Pacijent;
import com.klinickiCentar.klinika.repository.AdminKlinikeRepository;
import com.klinickiCentar.klinika.repository.PacijentRepository;

@Service
public class AdminKlinikeService {
	@Autowired
	private AdminKlinikeRepository adminKlinikeRepository;
	
	public List<AdministratorKlinike> getAdminiKlinike() {
		return adminKlinikeRepository.findAll();
	}
	
	public AdministratorKlinike getAdminaKlinike(Long id) {
		return adminKlinikeRepository.getOne(id);
	}
}
