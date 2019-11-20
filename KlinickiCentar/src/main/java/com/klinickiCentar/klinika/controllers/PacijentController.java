package com.klinickiCentar.klinika.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.Pacijent;
import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.services.PacijentService;
import com.klinickiCentar.klinika.services.UserService;

@RestController
@CrossOrigin(origins = "*")
public class PacijentController {
	
	@Autowired
	private PacijentService pacijentService;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/getPacijent")
	public ResponseEntity<Pacijent> getPacijenta(@RequestParam String email) {
		List<Pacijent> pacijenti = pacijentService.dobaviSvePacijente();
		
		for(Pacijent p : pacijenti) {
			if( p.getUser().getEmail().equals(email) ) {
				return new ResponseEntity<Pacijent>(p, HttpStatus.OK);
			}
		}
		Pacijent p = null;
		return new ResponseEntity<Pacijent>(p, HttpStatus.OK);
	}
	
	//NAPRAVITI POSEBAN UPIT IZ BAZE KOJI CE AUTOMATSKI SPAJATI TABELU User I Pacijent
	//DA SE NE DOBAVLJAJU PODACI IZ OBE TABELE
	@PostMapping(value = "/updatePacijent")
	public ResponseEntity<User> updatePacijenta(@RequestParam String email, @RequestParam String username){
			User user = userService.findUserByEmail(email);
			
			if( user == null ) {
				return new ResponseEntity<User>(null);
			}
			user.setUsername(username);
			User sacuvano = userService.saveUser(user);
			return new ResponseEntity<User>(sacuvano, HttpStatus.OK);
		
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
