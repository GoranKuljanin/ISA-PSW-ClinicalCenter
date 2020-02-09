package com.klinickiCentar.klinika.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klinickiCentar.klinika.models.Pregled;
import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.models.ZahtevZaZakazivanje;
import com.klinickiCentar.klinika.repository.ZahtevZaZakazivanjeRepository;

@Service
public class ZahtevZaZakazivanjeService {
	
	@Autowired
	private ZahtevZaZakazivanjeRepository repo;
	
	public List<ZahtevZaZakazivanje> getAll() {
		return repo.findAll();
	}
	
	public ZahtevZaZakazivanje create(ZahtevZaZakazivanje zahtev) {
		zahtev.setPrihvacen(true);
		return repo.save(zahtev);
	}
	public void remove(Long id) {
		repo.deleteById(id);
	}
}
