package com.klinickiCentar.klinika.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.Pregled;
import com.klinickiCentar.klinika.services.PreglediService;

@RestController
@CrossOrigin(origins = "*")
public class PreglediController {

	@Autowired
	private PreglediService preglediService;
	
	@GetMapping("/getAllPregledi")
	public ResponseEntity<List<Pregled>> getAllPregledi(){
		List<Pregled> pregledi = preglediService.getAllPregledi();
		return new ResponseEntity<List<Pregled>>(pregledi, HttpStatus.OK);
	}
}
