package com.klinickiCentar.klinika.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.AdministratorKlinike;
import com.klinickiCentar.klinika.models.Klinika;
import com.klinickiCentar.klinika.models.Lekar;
import com.klinickiCentar.klinika.services.LekarService;

@RestController
@CrossOrigin(origins = "*")
public class LekarController {
	
	@Autowired
	private LekarService lekarService;
	
	@GetMapping(value = "lekari")
	public ResponseEntity<List<Lekar>> getLekari() {
		List<Lekar> listaLekara = lekarService.getLekari();
		return new ResponseEntity<List<Lekar>>(listaLekara, HttpStatus.OK);
	}
	
	@GetMapping("/lekar/{id}")
	public ResponseEntity<Lekar> getLekar(@PathVariable ("id") Long id) {
		Lekar lekar = lekarService.getLekar(id);
		return new ResponseEntity<Lekar>(lekar, HttpStatus.OK);
	}

}
