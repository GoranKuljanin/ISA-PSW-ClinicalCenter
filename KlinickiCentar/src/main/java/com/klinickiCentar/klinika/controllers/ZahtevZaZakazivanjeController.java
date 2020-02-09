package com.klinickiCentar.klinika.controllers;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.AdministratorKlinike;
import com.klinickiCentar.klinika.models.Klinika;
import com.klinickiCentar.klinika.models.Pregled;
import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.models.ZahtevZaZakazivanje;
import com.klinickiCentar.klinika.services.ZahtevZaZakazivanjeService;

@RestController
@CrossOrigin(origins = "*")
public class ZahtevZaZakazivanjeController {
	
	@Autowired
	private ZahtevZaZakazivanjeService service;
	
	//GetAll
	@GetMapping("/ZahteviZaZakazivanje/{id}")
	public ResponseEntity<List<ZahtevZaZakazivanje>> sviZahtevi(@PathVariable ("id") Long id){
		List<ZahtevZaZakazivanje> zahtevi = service.getAll();
		List<ZahtevZaZakazivanje> zahteviKlinke = new ArrayList<>();
		for(ZahtevZaZakazivanje z: zahtevi) {
			if(z.getLekar().getKlinika().getId()==id && !z.isPrihvacen())
				zahteviKlinke.add(z);
		}
		return ( new ResponseEntity<List<ZahtevZaZakazivanje>>(zahteviKlinke, HttpStatus.OK) );
	}

	@PutMapping("/ZahteviZaZakazivanje")
	@CrossOrigin
	public ResponseEntity<ZahtevZaZakazivanje> addPregled(@RequestBody ZahtevZaZakazivanje zahtev){
		service.create(zahtev);
		return new ResponseEntity<ZahtevZaZakazivanje>(zahtev,HttpStatus.OK);
	}
	//Remove
	@DeleteMapping("/ZahteviZaZakazivanje/{id}")
	public ResponseEntity<Void> deleteZahtev(@PathVariable ("id") Long id){
		service.remove(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
