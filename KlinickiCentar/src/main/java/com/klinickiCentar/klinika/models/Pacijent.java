package com.klinickiCentar.klinika.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "pacijent")
public class Pacijent {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "zdravstvenikarton", nullable = false)
	private String zdravstveniKarton;
	
	//NESTO ZA POVEZIVANJE SA USEROM
	@OneToOne  //(mappedBy = "pacijent")
	private User user;
	
	public Pacijent() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getZdravstveniKarton() {
		return zdravstveniKarton;
	}

	public void setZdravstveniKarton(String zdravstveniKarton) {
		this.zdravstveniKarton = zdravstveniKarton;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
