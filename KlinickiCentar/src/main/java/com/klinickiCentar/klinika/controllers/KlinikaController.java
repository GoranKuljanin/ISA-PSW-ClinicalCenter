package com.klinickiCentar.klinika.controllers;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.Cena;
import com.klinickiCentar.klinika.models.Klinika;
import com.klinickiCentar.klinika.models.Lekar;
import com.klinickiCentar.klinika.models.Sala;
import com.klinickiCentar.klinika.models.Termin;
import com.klinickiCentar.klinika.services.KlinikaService;

@RestController
@CrossOrigin(origins = "*")
public class KlinikaController {
	
	@Autowired
	private KlinikaService klinikaService;
	
	@GetMapping(value = "klinike")
	public ResponseEntity<List<Klinika>> getKlinike() {
		List<Klinika> listaKlinika = klinikaService.getKlinike();
		return new ResponseEntity<List<Klinika>>(listaKlinika, HttpStatus.OK);
	}
	
	@GetMapping(value = "klinika/{id}/cene")
	public Collection<Cena> getCene(@PathVariable ("id") Long id) {
		Collection<Cena> listaCena = klinikaService.getCene(id);
		return listaCena;
	}
	
	@GetMapping(value = "klinika/{id}/lekari")
	public Collection<Lekar> getLekari(@PathVariable ("id") Long id) {
		Collection<Lekar> listaLekara = klinikaService.getLekari(id);
		return listaLekara;
	}
	
	@GetMapping(value = "klinika/{id}/sale")
	public Collection<Sala> getSale(@PathVariable ("id") Long id) {
		Collection<Sala> listaSala = klinikaService.getSale(id);
		return listaSala;
	}
	
	@GetMapping(value = "klinika/{id}/termini")
	public Collection<Termin> getTermini(@PathVariable ("id") Long id) {
		Collection<Termin> listaTermina = klinikaService.getTermini(id);
		return listaTermina;
	}
}
