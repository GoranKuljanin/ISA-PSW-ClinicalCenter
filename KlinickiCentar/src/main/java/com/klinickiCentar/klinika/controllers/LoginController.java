package com.klinickiCentar.klinika.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.services.UserService;

@RestController
@CrossOrigin(origins = "*")
public class LoginController {

	@Autowired
	private UserService userService;
	
	@GetMapping(value = "/login")
	public ResponseEntity<User> login(@RequestParam String email, @RequestParam String password){
		User user = userService.findByEmailAndPassword(email, password);
		
		if( user == null ) {
			return new ResponseEntity<>(user, HttpStatus.OK);		//Vraca user=null
		}															//Proveriti kako da obradjuje neke
																	//Http zahteve, npr Status.Error
		
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
	
	@PostMapping(value = "/register")
	public ResponseEntity<User> register(@RequestBody User user){
		User u = userService.saveUser(user);
		
		if( u == null ) {
			System.out.println(u);
			return new ResponseEntity<>(u, HttpStatus.OK);
		}
		
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
}