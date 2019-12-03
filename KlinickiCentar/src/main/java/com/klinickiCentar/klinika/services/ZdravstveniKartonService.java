package com.klinickiCentar.klinika.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klinickiCentar.klinika.models.ZdravstveniKarton;
import com.klinickiCentar.klinika.repository.ZdravstveniKartonRepository;

@Service
public class ZdravstveniKartonService {
	
	@Autowired
	private ZdravstveniKartonRepository zdravstveniKartonRepository;
	
	public List<ZdravstveniKarton> getAllZdravstveniKarton(){
		return zdravstveniKartonRepository.findAll();
	}
	
	//Proba za dobavljanje kartona po nekim referencama koje se nalaze u modelu (radi!)
	public List<ZdravstveniKarton> getPacijentZdravstveniKarton(Long id){
		return zdravstveniKartonRepository.findByPregledId(id);
	}
}
