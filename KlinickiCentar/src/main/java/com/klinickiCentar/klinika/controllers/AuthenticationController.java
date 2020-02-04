package com.klinickiCentar.klinika.controllers;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.auth.JwtAuthenticationRequest;
import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.models.UserTokenState;
import com.klinickiCentar.klinika.services.UserService;
import com.klinickiCentar.klinika.tokenUtils.TokenUtils;

@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthenticationController {
	
	protected final Log LOGGER = LogFactory.getLog(getClass());

	@Autowired
	TokenUtils tokenUtils;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest,
			HttpServletResponse response) throws AuthenticationException, IOException {
		
		//LOGGER.debug("Username " + authenticationRequest.getUsername() + " Password " + authenticationRequest.getPassword());
		
//		final Authentication authentication = authenticationManager
//				.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
//		
		final Authentication authentication;
		
		try {
			authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
		} catch (BadCredentialsException e) {
			// TODO: handle exception
			return new ResponseEntity<>("Nalog ne postoji", HttpStatus.BAD_REQUEST);
		}
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		
		User user = (User) authentication.getPrincipal();
		String jwt = tokenUtils.generateToken(user.getUsername());
		int expiresIn = tokenUtils.getExpiredIn();
		
		System.out.println("Ime " + user.getUsername() + " Prezime: " + user.getLastname());
		System.out.println("Token:" + jwt);
		return ResponseEntity.ok(new UserTokenState(jwt, expiresIn));
	}
}
