package com.klinickiCentar.klinika.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klinickiCentar.klinika.models.Lekar;
import com.klinickiCentar.klinika.repository.LekarRepository;

@Service
public class LekarService {
	
	@Autowired
	private LekarRepository lekarRepository;
	
	public List<Lekar> getLekari() {
		return lekarRepository.findAll();
	}
	
	public Lekar getLekar(Long id) {
		return lekarRepository.getOne(id);
	}
}
