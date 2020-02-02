package com.klinickiCentar.klinika.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klinickiCentar.klinika.models.Klinika;
import com.klinickiCentar.klinika.models.Lekar;
import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.repository.LekarRepository;
import com.klinickiCentar.klinika.repository.UserRepository;

@Service
public class LekarService {
	
	@Autowired
	private LekarRepository lekarRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	public List<Lekar> getLekari() {
		return lekarRepository.findAll();
	}
	
	public Lekar getLekar(Long id) {
		return lekarRepository.getOne(id);
	}
	
	public void addLekar(Lekar lekar) {
		lekarRepository.save(lekar);
	}
	
	public Lekar deleteLekar(Long idl) {
		try {
		Lekar l =lekarRepository.getOne(idl);
		System.out.print(l);
		Klinika k = new Klinika();
		k = l.getKlinika();
		k.removeLekar(l);
		lekarRepository.deleteById(idl);
		userRepository.deleteById(l.getUser().getId());
		return l;
		} catch(Exception e) {
			return null;
		}
	}
}
