package com.klinickiCentar.klinika.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.Klinika;
import com.klinickiCentar.klinika.services.KlinikaService;

@RestController
@CrossOrigin(origins = "*")
public class KlinikaController {
	
	@Autowired
	private KlinikaService klinikaService;
	
	@GetMapping(value = "/klinike")
	public ResponseEntity<List<Klinika>> cene() {
		List<Klinika> lista = klinikaService.getCene();
		return new ResponseEntity<List<Klinika>>(lista, HttpStatus.OK);
	}
}
