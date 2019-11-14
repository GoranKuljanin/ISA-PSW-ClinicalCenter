package com.klinickiCentar.controllers;
import java.util.ArrayList;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class HelloREST {
	
	private ArrayList<User> users = new ArrayList<>();
	
	@GetMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
	public User helloWorld() {
		User u = new User();
		u.setUsername("Goran");
		u.setPassword("pas");
		return u;
	}
	
	@PostMapping("/register")
	public String registration(@RequestBody User u) {
		for(User us : users) {
			if(u.getUsername().equals(us.getUsername()) && u.getEmail().equals(us.getEmail())) {
				return "Postoji";
			}
		}
		users.add(u);
		return "Registrovani";
		
	}
	@PostMapping("/login")
	public String login(@RequestBody User u) {
		if(u.getUsername().equals("admin") ) {
			//System.out.println(u.getUsername());
			if(u.getPassword().equals("admin") ) {
				return "admin";
			}
		}
		return "korisnik!";
	}
	@GetMapping(value = "/getAllData", produces = MediaType.APPLICATION_JSON_VALUE)
	public ArrayList<User> getAllData(){
		return users;
	}
	
}
