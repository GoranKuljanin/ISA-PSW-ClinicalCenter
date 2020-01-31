package com.klinickiCentar.klinika.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.Pacijent;
import com.klinickiCentar.klinika.models.Pregled;
import com.klinickiCentar.klinika.models.Termin;
import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.services.PacijentService;
import com.klinickiCentar.klinika.services.PreglediService;
import com.klinickiCentar.klinika.services.UserService;

@RestController
@CrossOrigin(origins = "*")
public class PreglediController {

	@Autowired
	private PreglediService preglediService;
	
	@Autowired
	private PacijentService pacijentService;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/getAllPregledi")
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
		Set<Pregled> pregledi = termin.getPregled();
		
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
		
		User u = userService.findUserByEmail(email);
		Pacijent p = pacijentService.getPacijentByUser(u.getId());
		Pregled pp = preglediService.getById(id);
		
		//p.getZakazaniPregledi().add(pp);
		pp.setPacijent(p);
		pp = preglediService.save(pp);
		
		
		return new ResponseEntity<Pregled>(pp, HttpStatus.OK);
	}
	@GetMapping("/zakazaniPregledi")
	public ResponseEntity<List<Pregled>> zakazaniPregledi(@RequestParam String email){		//@RequestParam Long id
		User u = userService.findUserByEmail(email);
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
	
	//Kontroler za testiranje
//	@GetMapping("/test")
//	public ResponseEntity<Pacijent> test(){
//		Pacijent p = pacijentService.getPacijentByUser(3L);
//		return new ResponseEntity<Pacijent>(p, HttpStatus.OK);
//	}
}
