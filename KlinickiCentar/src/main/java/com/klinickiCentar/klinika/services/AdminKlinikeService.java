package com.klinickiCentar.klinika.services;

import java.util.List;

import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.klinickiCentar.klinika.models.AdministratorKlinike;
import com.klinickiCentar.klinika.models.Authority;
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
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AuthorityService authService;
	
	public List<AdministratorKlinike> getAdminiKlinike() {
		return adminKlinikeRepository.findAll();
	}
	
	public AdministratorKlinike getAdminaKlinike(Long id) {
		return adminKlinikeRepository.getOne(id);
	}
	
	public void updateAdminaKlinike(AdministratorKlinike admin) {
		adminKlinikeRepository.save(admin);
	}
	
	public void updateUseraAdminaKlinike(User u) {
		User stari = userRepository.getOne(u.getId());
		System.out.print("Stara sifra: "+ stari.getPassword() + ", nova sifra: " + u.getPassword());
		System.out.print("Stara data: "+ stari.getLastPasswordResetDate() + ", nova data: " + u.getLastPasswordResetDate());
		if(!stari.getPassword().contains(u.getPassword())) {
			System.out.print("\n menja pw\n");
			u.setPassword(passwordEncoder.encode(u.getPassword()));
			java.sql.Timestamp now = new java.sql.Timestamp(DateTime.now().getMillis());
			u.setLastPasswordResetDate(now);
		} else {System.out.print("\nelseeeeeeeeeeeeeeeeee\n");}
		u.setEnabled(true);
		List<Authority> auth = authService.findByname("ROLE_ADMIN");
		u.setAuthorities(auth);
		userRepository.save(u);
	}
}
