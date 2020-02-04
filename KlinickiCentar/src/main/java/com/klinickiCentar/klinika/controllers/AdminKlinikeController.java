package com.klinickiCentar.klinika.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.AdministratorKlinike;
import com.klinickiCentar.klinika.models.Klinika;
import com.klinickiCentar.klinika.models.Pacijent;
import com.klinickiCentar.klinika.services.AdminKlinikeService;
import com.klinickiCentar.klinika.services.KlinikaService;

@RestController
@CrossOrigin(origins = "*")
public class AdminKlinikeController {
	
	@Autowired
	private AdminKlinikeService adminKlinikeService;
	
	@Autowired
	private KlinikaService klinikaService;
	
	@GetMapping(value = "getAdmineKlinike")
	public ResponseEntity<List<AdministratorKlinike>> getKlinike() {
		List<AdministratorKlinike> admini = adminKlinikeService.getAdminiKlinike();
		return new ResponseEntity<List<AdministratorKlinike>>(admini, HttpStatus.OK);
	}
	
	@GetMapping(value = "/getAdminaKlinike/{id}")
	public ResponseEntity<AdministratorKlinike> getKlinike(@PathVariable ("id") Long id) {
		AdministratorKlinike admin = adminKlinikeService.getAdminaKlinike(id);
		return new ResponseEntity<AdministratorKlinike>(admin, HttpStatus.OK);
	}
	
	@GetMapping("/getKlinikaByAdminId/{id}")
	public ResponseEntity<Klinika> dobaviKliniku(@PathVariable ("id") Long id){
		AdministratorKlinike admin= adminKlinikeService.getAdminaKlinike(id);
		Klinika klinika=admin.getKlinika();
		return new ResponseEntity<Klinika>(klinika, HttpStatus.OK);
	}
	
	@PutMapping("/adminKlinike")
	@CrossOrigin
	public ResponseEntity<AdministratorKlinike> updateAdminKlinike(@RequestBody AdministratorKlinike adminKlinike){
		adminKlinikeService.updateUseraAdminKlinike(adminKlinike);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
