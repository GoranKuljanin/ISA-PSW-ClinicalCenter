package com.klinickiCentar.klinika.controllers;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.Lekar;
import com.klinickiCentar.klinika.models.OcenaLekar;
import com.klinickiCentar.klinika.models.Pacijent;
import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.services.LekarService;
import com.klinickiCentar.klinika.services.OcenaLekarService;
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
	
	@Autowired
	private OcenaLekarService ocenaLekarService;
	
	@Autowired
	private LekarService lekarService;
	
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
	
	//Menjanje podataka pacijenta
	@PostMapping(value = "/updatePacijent")
	@PreAuthorize("hasRole('ROLE_PACIJENT')")
	public ResponseEntity<?> updatePacijenta(@RequestBody User u){
			User user = userService.findByUsername(u.getUsername());
			
			if(user == null) {
				return new ResponseEntity<>("Error", HttpStatus.NOT_FOUND);
			}
			
			user = userService.updateUser(u);
			
			return new ResponseEntity<>(user, HttpStatus.OK);
		
	}
	//Menjanje sifre
	@PostMapping(value = "/updateSifraPacijent")
	@PreAuthorize("hasRole('ROLE_PACIJENT')")
	public ResponseEntity<?> updateSifruPacijenta(@RequestBody User u){
			User user = userService.findByUsername(u.getUsername());
			
			if(user == null) {
				return new ResponseEntity<>("Error", HttpStatus.NOT_FOUND);
			}
			
			user = userService.promeniSifru(u);
			
			return new ResponseEntity<>(user, HttpStatus.OK);
		
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
	
	@GetMapping("/oceniLekare")
	@PreAuthorize("hasRole('ROLE_PACIJENT')")
	public ResponseEntity<List<Lekar>> getLekarForOcena(Principal currUser){
		User u = userService.findByUsername(currUser.getName());
		Pacijent p = pacijentService.getPacijentByUser(u.getId());
		List<OcenaLekar> oceneLekara = ocenaLekarService.getAllOcenaLekarForPacijent(p.getId());
	
		List<Lekar> lekari = new ArrayList<>();
		
		for(OcenaLekar ol : oceneLekara) {
			if(ol.getPacijent() != null) {
				if(ol.getPacijent().getId() != p.getId()) {
					lekari.add(ol.getLekar());
				}
			}else {
				lekari.add(ol.getLekar());
			}
		}
		
		return new ResponseEntity<List<Lekar>>(lekari, HttpStatus.OK);
	}
	
	@PostMapping(value = "/unesiOcenuLekara/{id}")
	@PreAuthorize("hasRole('ROLE_PACIJENT')")
	public ResponseEntity<?> unesiOcenuLekara(@RequestBody int ocenaLekara, @PathVariable ("id") Long id, Principal currUser){
		User user = userService.findByUsername(currUser.getName());
		Pacijent p = pacijentService.getPacijentByUser(user.getId());
		Lekar l = lekarService.getLekar(id);
		
		OcenaLekar ocenaLekar = new OcenaLekar();
		ocenaLekar.setLekar(l);
		ocenaLekar.setPacijent(p);
		ocenaLekar.setOcena(ocenaLekara);
		ocenaLekarService.saveOcenaLekar(ocenaLekar);
		
		List<OcenaLekar> oceneLekara = ocenaLekarService.findOceneByLekar(id);
		int prosek = 0;
		for(OcenaLekar o : oceneLekara) {
			prosek += o.getOcena();
		}
		prosek = (prosek / (oceneLekara.size()));
		l.setProsecnaocena(prosek);
		lekarService.updateLekar(l);
		
		return new ResponseEntity<Lekar>(l, HttpStatus.OK);
		
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
