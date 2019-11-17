package com.klinickiCentar.klinika.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klinickiCentar.klinika.models.User;

public interface UserRepository extends JpaRepository<User, Long>{

	List<User> findByUsernameAndPasswordAllIgnoringCase(String username, String password);
	
}
