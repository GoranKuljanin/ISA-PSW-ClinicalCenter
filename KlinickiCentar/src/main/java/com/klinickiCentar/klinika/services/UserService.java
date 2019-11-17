package com.klinickiCentar.klinika.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	
	public List<User> findAll(){
		return userRepository.findAll();
	}
	
	public List<User> findByUsernameAndPassword(String username, String password){
		return userRepository.findByUsernameAndPasswordAllIgnoringCase(username, password);
	}
}
