package com.klinickiCentar.klinika.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klinickiCentar.klinika.models.Pacijent;
import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.services.PacijentService;
import com.klinickiCentar.klinika.services.UserService;

@RestController
@CrossOrigin(origins = "*")
public class AdminKlinickogCentraController {
	
	@Autowired
	private PacijentService pacijentService;
	
	@Autowired
	private UserService userService;

	@PostMapping("/dodajPacijentaUBazuPacijenata")
	public ResponseEntity<User> dodajPacijentaUBazu(@RequestBody User u){
		
//		User user = userService.findUserByEmail(u.getEmail());
//		Pacijent p = new Pacijent();
//		p.setZdravstveniKarton("zd1");
//		
//		user.setPacijent(p);
//		p.setUser(user);
//		
//		//if( user != null ) {
//			pacijentService.dodajPacijentaUBazu(p);
			return new ResponseEntity<User>(u, HttpStatus.OK);
		//}else {
		//	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		//}
	}
}
