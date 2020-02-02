package com.klinickiCentar.klinika.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klinickiCentar.klinika.models.Pregled;
import com.klinickiCentar.klinika.repository.PreglediRepository;

@Service
public class PreglediService {

	@Autowired
	private PreglediRepository preglediRepository;
	
	public Pregled save(Pregled p) {
		return preglediRepository.save(p);
	}
	
	public List<Pregled> getAllPregledi(){
		return preglediRepository.findAll();
	}
	
	public List<Pregled> getPreglediByDatum(String datum){
		return preglediRepository.findByDatum(datum);
	}
	
	public Pregled getById(Long id) {
		return preglediRepository.findOneById(id);
	}
	
	public List<Pregled> getByPacijentId(Long id){
		return preglediRepository.findByPacijentId(id);
	}
	
}
