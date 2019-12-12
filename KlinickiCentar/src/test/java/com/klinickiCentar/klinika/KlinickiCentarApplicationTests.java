package com.klinickiCentar.klinika;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.klinickiCentar.klinika.models.User;
import com.klinickiCentar.klinika.repository.UserRepository;
import com.klinickiCentar.klinika.services.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
class KlinickiCentarApplicationTests {

	@Autowired
	private UserService userService;
	
	@Before(value = "")
	public void setup() throws Exception{
		User u = new User();
		u.setUsername("Goranr");
		u.setPassword("123");
		u.setLastname("Kuljanin");
		u.setEmail("goku@gmail.com");
		u.setAdress("DJ");
		u.setCity("Novi Sad");
		u.setCity("RS");
		u.setPhoneNumber("064");
		u.setUloga("ADMIN_K_C");
		
		userService.saveUser(u);
	}
	
	@Test
	void contextLoads() {
		String email = "goku@gmail.com";
		User user = userService.findUserByEmail(email);
		
		assertEquals("Goranr", user.getUsername());
	}

}
