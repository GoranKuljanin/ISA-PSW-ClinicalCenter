package com.klinickiCentar.klinika.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.services.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	private UserService userService;
	
	
	//@GetMapping(value = "/allUsers", produces = MediaType.APPLICATION_JSON_VALUE)
	@GetMapping("/getAllUsers")
	public ResponseEntity<List<User>> getAll(){
		List<User> users = userService.findOnlyUsers("User");
		
		return ( new ResponseEntity<>(users, HttpStatus.OK) );
	}
	
	
}
