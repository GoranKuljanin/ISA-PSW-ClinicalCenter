package com.klinickiCentar.klinika.controllers;

import java.security.Principal;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.klinickiCentar.klinika.models.Klinika;
import com.klinickiCentar.klinika.models.Pacijent;
import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.services.PacijentService;
import com.klinickiCentar.klinika.services.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/pacijent")
public class PacijentController {
	
	@Autowired
	private PacijentService pacijentService;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/getPacijentInfo")
	@PreAuthorize("hasRole('ROLE_PACIJENT')")
	public Pacijent getPacijenta(Principal principal) {
		
		List<Pacijent> pacijenti = pacijentService.dobaviSvePacijente();
		User u = userService.findByUsername(principal.getName());
		
		for(Pacijent p : pacijenti) {
			if( p.getUser().getUsername().equals(u.getUsername()) ) {
				//return new ResponseEntity<Pacijent>(p, HttpStatus.OK);
				return p;
			}
		}
		Pacijent p = null;
		//return new ResponseEntity<Pacijent>(p, HttpStatus.OK);
		return p;
	}
	
	@GetMapping("/getPacijenti")
	@CrossOrigin
	public ResponseEntity<List<Pacijent>> getPacijente() {
		List<Pacijent> pacijenti = pacijentService.dobaviSvePacijente();
		
		return new ResponseEntity<List<Pacijent>>(pacijenti, HttpStatus.OK);
	}

	@GetMapping("/getPacijenti/{id}")
	@CrossOrigin
	public ResponseEntity<Pacijent> getPacijent(@PathVariable ("id") Long id) {
		System.out.println(id);
		Pacijent pacijent= pacijentService.getPacijent(id);
		return new ResponseEntity<Pacijent>(pacijent, HttpStatus.OK);
	}
	//NAPRAVITI POSEBAN UPIT IZ BAZE KOJI CE AUTOMATSKI SPAJATI TABELU User I Pacijent
	//DA SE NE DOBAVLJAJU PODACI IZ OBE TABELE
	@PostMapping(value = "/updatePacijent")
	public ResponseEntity<User> updatePacijenta(@RequestBody User u){
			User user = userService.findByUsername(u.getUsername());
			//String user = u.getEmail();
//			if( user == null ) {
//				return new ResponseEntity<Pacijent>(null);
//			}
//			user.setUsername(p.getUser().getUsername());
//			User sacuvano = userService.updateUser(user);
//			Pacijent newPacijent = new Pacijent();
//			newPacijent.setId(p.getId());
//			newPacijent.setZakazaniPregledi(p.getZakazaniPregledi());
//			newPacijent.setZdravstveniKarton(p.getZdravstveniKarton());
//			newPacijent.setUser(user);
			u.setPassword(user.getPassword());
			u.setUloga(user.getUloga());
			User newUser = userService.saveUser(u);
			
			return new ResponseEntity<User>(user, HttpStatus.OK);
		
	}
	
	@PutMapping("/pacijent")
	@CrossOrigin
	@PreAuthorize("hasRole('ROLE_PACIJENT')")
	public ResponseEntity<User> updateKredit(@RequestBody User user){
		User u = userService.findByUsername(user.getUsername());
		user.setPassword(u.getPassword());
		user.setUloga(u.getUloga());
		userService.updateUser(user);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	//Greska, ovo treba u ADMIN (za zahteve)
//	@DeleteMapping(value = "/deletePacijent")
//	public ResponseEntity<Void> deletePacijent(@RequestParam String email){
//		User u = userService.findUserByEmail(email);
//		List<Pacijent> pacijenti = pacijentService.dobaviSvePacijente();
//		
//		for(Pacijent p : pacijenti) {
//			if(p.getUser().getEmail().equals(u.getEmail())) {
//				pacijentService.deletePacijent(p);
//				return new ResponseEntity<>(HttpStatus.OK);
//			}
//		}
//		return new ResponseEntity<>(HttpStatus.OK);
//	}

}
