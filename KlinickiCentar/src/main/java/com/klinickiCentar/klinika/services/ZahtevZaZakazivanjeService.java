package com.klinickiCentar.klinika.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		System.out.println("Zahtev: ");
		System.out.println(zahtev.getId());
		System.out.println(zahtev.getDatum());
		System.out.println(zahtev.getVreme());
		System.out.println(zahtev.getLekar());
		System.out.println(zahtev.getPacijent());
		List<ZahtevZaZakazivanje> poslednji = repo.findAll();
		long idP=poslednji.get((int) (repo.count()-1)).getId();
		zahtev.setId(idP+1);
		
		return repo.save(zahtev);
	}
	public void remove(ZahtevZaZakazivanje zahtev) {
		repo.delete(zahtev);
	}
}
