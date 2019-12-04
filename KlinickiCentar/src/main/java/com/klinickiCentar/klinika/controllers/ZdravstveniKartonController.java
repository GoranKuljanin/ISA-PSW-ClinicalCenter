package com.klinickiCentar.klinika.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.ZdravstveniKarton;
import com.klinickiCentar.klinika.services.ZdravstveniKartonService;

@RestController
@CrossOrigin(origins = "*")
public class ZdravstveniKartonController {
	
	@Autowired
	private ZdravstveniKartonService zdravstveniKartonService;
	
	@GetMapping("/getZdravstveniKartoni")
	public ResponseEntity<List<ZdravstveniKarton>> getAllZdravstveniKarton(){
		List<ZdravstveniKarton> kartoni = zdravstveniKartonService.getAllZdravstveniKarton();
		return new ResponseEntity<List<ZdravstveniKarton>>(kartoni, HttpStatus.OK);
	}
	
	//Ovo radi!
//	@GetMapping("/getZdravstveniKarton/{id}")
//	public ResponseEntity<List<ZdravstveniKarton>> getPacijentZdravstveniKarton(@PathVariable Long id){
//		List<ZdravstveniKarton> kartoni = zdravstveniKartonService.getPacijentZdravstveniKarton(id);
//		return new ResponseEntity<List<ZdravstveniKarton>>(kartoni, HttpStatus.OK);
//	}
	
//	@GetMapping("/getZdravstveniKartonPacijenta")
//	public ResponseEntity<List<ZdravstveniKarton>> getPacijentZdravstveniKarton(@PathVariable Long id){
//		List<ZdravstveniKarton> kartoni = zdravstveniKartonService.getPacijentZdravstveniKarton(id);
//		return new ResponseEntity<List<ZdravstveniKarton>>(kartoni, HttpStatus.OK);
//	}

}
