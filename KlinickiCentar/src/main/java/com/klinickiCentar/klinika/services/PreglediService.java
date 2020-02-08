package com.klinickiCentar.klinika.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klinickiCentar.klinika.models.Pregled;
import com.klinickiCentar.klinika.models.Termin;
import com.klinickiCentar.klinika.repository.PreglediRepository;
import com.klinickiCentar.klinika.repository.TerminRepository;

@Service
public class PreglediService {

	@Autowired
	private PreglediRepository preglediRepository;
	
	@Autowired
	private TerminRepository terminRepository;
	
	public Pregled save(Pregled p) {
		return preglediRepository.save(p);
	}
	
	public List<Pregled> getAllPregledi(){
		return preglediRepository.findAll();
	}
	
//	public List<Pregled> getPreglediByDatum(String datum){
//		return preglediRepository.findByDatum(datum);
//	}
	
	public Pregled getById(Long id) {
		return preglediRepository.findOneById(id);
	}
	
	public List<Pregled> getByPacijentId(Long id){
		return preglediRepository.findByPacijentId(id);
	}
	
	public Termin findTerminByDatum(String date) {
		Termin t = terminRepository.findByDatum(date);
		if( t == null ) {
			return null;
		}else {
			return t;
		}
	}
	
	public Termin saveTermin(Termin termin) {
		Termin t = terminRepository.saveAndFlush(termin);
		return t;
	}
	
	public void savePregled(Pregled pregled) {
		Pregled p = new Pregled();
		p.setKlinika(pregled.getKlinika());
		p.setCena(pregled.getCena());
		p.setSala(pregled.getSala());
		p.setLekar(pregled.getLekar());
		p.setTermin(pregled.getTermin());
		p.setTrajanje(pregled.getTrajanje());
		p.setTippregleda(pregled.getTippregleda());
		preglediRepository.save(p);
	}
	
}
