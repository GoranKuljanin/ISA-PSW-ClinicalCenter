package com.klinickiCentar.klinika.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klinickiCentar.klinika.models.Pacijent;
import com.klinickiCentar.klinika.repository.PacijentRepository;

@Service
public class PacijentService {

	@Autowired
	private PacijentRepository pacijentRepository;
	
	public Pacijent dodajPacijentaUBazu(Pacijent pa) {
		//Pacijent pa = pacijentRepository.findOneByEmail(email);
		//if( pa == null ) {
			pa = pacijentRepository.save(pa);
			return pa;
		//}
		//return null;
	}
	
}
