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
	public ResponseEntity<List<User>> login(@RequestParam String username, @RequestParam String password){
		List<User> users = userService.findByUsernameAndPassword(username, password);
		
		return new ResponseEntity<>(users, HttpStatus.OK);
	}
	
	@PostMapping(value = "/register")
	public ResponseEntity<User> register(@RequestBody User user){
		User u = userService.saveUser(user);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
