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
	public User findById(Long id) {
		return userRepository.findById(id).orElseGet(null);
	}
	public User updateUser(User user) {
		userRepository.save(user);
		return null;
	}
	
	public User findByEmailAndPassword(String email, String password){
		return userRepository.findByEmailAndPasswordAllIgnoringCase(email, password);
	}
	public User findUserByEmail(String email) {
		return userRepository.findOneByEmail(email);
	}
	public List<User> findOnlyUsers(String uloga){
		return userRepository.findAllByUloga(uloga);
	}
	
	public User saveUser(User user) {
		User u = userRepository.findOneByEmail(user.getEmail());
		if( u == null ) {
			u = userRepository.save(user);
			return u;
		}
		return null;
	}
	public void remove(User user) {
		userRepository.delete(user);
	}
}
