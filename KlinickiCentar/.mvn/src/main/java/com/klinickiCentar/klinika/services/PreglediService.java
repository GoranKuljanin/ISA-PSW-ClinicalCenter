package com.klinickiCentar.klinika.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klinickiCentar.klinika.models.Pregled;
import com.klinickiCentar.klinika.repository.PreglediRepository;

@Service
public class PreglediService {

	@Autowired
	private PreglediRepository preglediRepository;
	
	public List<Pregled> getAllPregledi(){
		return preglediRepository.findAll();
	}
	
}
