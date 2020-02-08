package com.klinickiCentar.klinika.controllers;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.AdministratorKlinike;
import com.klinickiCentar.klinika.models.Cena;
import com.klinickiCentar.klinika.models.Klinika;
import com.klinickiCentar.klinika.models.Pacijent;
import com.klinickiCentar.klinika.models.Pregled;
import com.klinickiCentar.klinika.models.Termin;
import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.services.AdminKlinikeService;
import com.klinickiCentar.klinika.services.PacijentService;
import com.klinickiCentar.klinika.services.PreglediService;
import com.klinickiCentar.klinika.services.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/pregledi")
public class PreglediController {

	@Autowired
	private PreglediService preglediService;
	
	@Autowired
	private PacijentService pacijentService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AdminKlinikeService adminKlinikeService;
	
	@GetMapping("/getAllPregledi")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<Pregled>> getAllPregledi(){
		List<Pregled> pregledi = preglediService.getAllPregledi();
		
		List<Pregled> slobodniPregledni = new ArrayList<>();
		for(Pregled p : pregledi) {
			if(p.getPacijent() == null) {
				slobodniPregledni.add(p);
			}
		}
		
		return new ResponseEntity<List<Pregled>>(slobodniPregledni, HttpStatus.OK);

	}
	
	@GetMapping("/getPreglediByDatum/{id}")						
	public ResponseEntity<List<Pregled>> getAllPreglediByDatum(@RequestParam String datum, @PathVariable ("id") Long id){
		Termin termin = preglediService.findTerminByDatum(datum);
		
		if( termin == null ) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		//List<Pregled> pregledi = preglediService.getAllPregledi();
		Set<Pregled> pregledi = (Set<Pregled>) termin.getPregledi();
		
		List<Pregled> slobodniPregledni = new ArrayList<>();
		for(Pregled p : pregledi) {
			if(p.getKlinika().getId().equals(id)) {
				if(p.getPacijent() == null) {
					//if(p.getTermin().getId().equals(termin.getId())) {
						slobodniPregledni.add(p);
					//}	
				}
			}
		}
		
		return new ResponseEntity<List<Pregled>>(slobodniPregledni, HttpStatus.OK);
    
	}
	
	@PostMapping("/zakaziPregled")
	public ResponseEntity<Pregled> zakaziPregled(@RequestParam String email, @RequestBody Long id){
		
		User u = userService.findByUsername(email);
		Pacijent p = pacijentService.getPacijentByUser(u.getId());
		Pregled pp = preglediService.getById(id);
		
		//p.getZakazaniPregledi().add(pp);
		pp.setPacijent(p);
		pp = preglediService.save(pp);
		
		
		return new ResponseEntity<Pregled>(pp, HttpStatus.OK);
	}
	@GetMapping("/zakazaniPregledi")
	@PreAuthorize("hasRole('ROLE_PACIJENT')")			//@RequestParam String email,
	public ResponseEntity<List<Pregled>> zakazaniPregledi(Principal currUser){		//@RequestParam Long id
		System.out.println("Za preglede: " + currUser.getName());
		User u = userService.findByUsername(currUser.getName());
		Pacijent p = pacijentService.getPacijentByUser(u.getId());
		List<Pregled> set = preglediService.getByPacijentId(p.getId());
		return new ResponseEntity<List<Pregled>>(set, HttpStatus.OK);
	}
	
	@PostMapping("/odjaviPregled")
	public ResponseEntity<Pregled> odjaviPregled(@RequestBody Long id){
		Pregled zakazani = preglediService.getById(id);
		zakazani.setPacijent(null);
		zakazani = preglediService.save(zakazani);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/addTermin")
	public ResponseEntity<Termin> addTermin(@RequestBody Termin termin){
		Termin t = preglediService.saveTermin(termin);
		
		return new ResponseEntity<Termin>(t,HttpStatus.OK);
	}
	
	@PostMapping("/addPregled")
	public ResponseEntity<Pregled> addPregled(@RequestBody Pregled pregled, Principal user){
		User u = userService.findByUsername(user.getName());
		Collection<AdministratorKlinike> adminikllinike = adminKlinikeService.getAdminiKlinike();
		Klinika klinika = new Klinika();
		for(AdministratorKlinike a : adminikllinike) {
			if(a.getUser().getId() == u.getId()) {
				klinika = a.getKlinika();
			}
		}
		pregled.setKlinika(klinika);
		preglediService.savePregled(pregled);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/getAllSlobodniTerminiPregleda")
	@CrossOrigin
	public ResponseEntity<Collection<Pregled>> getAllSlobodniTerminiPregleda(Principal currUser){
		User u = userService.findByUsername(currUser.getName());
		Collection<AdministratorKlinike> adminikllinike = adminKlinikeService.getAdminiKlinike();
		Klinika klinika = new Klinika();
		for(AdministratorKlinike a : adminikllinike) {
			if(a.getUser().getId() == u.getId()) {
				klinika = a.getKlinika();
			}
		}
		Collection<Pregled> pregledi = preglediService.getAllPregledi();
		Collection<Pregled> slobodniTermini = new ArrayList<Pregled>();
		for(Pregled p : pregledi) {
			if (p.getPacijent()==null) {
				slobodniTermini.add(p);
			}
		}
		
		return new ResponseEntity<Collection<Pregled>>(slobodniTermini, HttpStatus.OK);
	}
	
	//Kontroler za testiranje
//	@GetMapping("/test")
//	public ResponseEntity<Pacijent> test(){
//		Pacijent p = pacijentService.getPacijentByUser(3L);
//		return new ResponseEntity<Pacijent>(p, HttpStatus.OK);
//	}
}
