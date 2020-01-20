package com.klinickiCentar.klinika.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klinickiCentar.klinika.models.AdministratorKlinike;
import com.klinickiCentar.klinika.models.Klinika;
import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.models.Pacijent;
import com.klinickiCentar.klinika.repository.AdminKlinikeRepository;
import com.klinickiCentar.klinika.repository.PacijentRepository;
import com.klinickiCentar.klinika.repository.UserRepository;

@Service
public class AdminKlinikeService {
	@Autowired
	private AdminKlinikeRepository adminKlinikeRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	public List<AdministratorKlinike> getAdminiKlinike() {
		return adminKlinikeRepository.findAll();
	}
	
	public AdministratorKlinike getAdminaKlinike(Long id) {
		return adminKlinikeRepository.getOne(id);
	}
	
	public void updateUseraAdminKlinike(AdministratorKlinike admin) {
		adminKlinikeRepository.save(admin);
	}
}
