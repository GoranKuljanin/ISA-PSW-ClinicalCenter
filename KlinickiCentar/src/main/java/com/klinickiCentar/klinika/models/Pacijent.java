package com.klinickiCentar.klinika.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "pacijent")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Pacijent {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	// @Column(name = "zdravstvenikarton", nullable = false)
	// private String zdravstveniKarton;
	
	
	//Samo ovaj red se dodaje!	
	@OneToOne//(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")	//, referencedColumnName = "user_id"
	private User user;
	
	@OneToOne
	@JoinColumn(name = "zdravstveni_karton_id")
	private ZdravstveniKarton zdravstveniKarton;
	
	public Pacijent() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

//	public String getZdravstveniKarton() {
//		return zdravstveniKarton;
//	}
//
//	public void setZdravstveniKarton(String zdravstveniKarton) {
//		this.zdravstveniKarton = zdravstveniKarton;
//	}

	//@JsonIgnore		//Anotacija koja oznacava da se ne dobaljaju dalje Useri, da ne bi bilo ugnjezdavanja!
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ZdravstveniKarton getZdravstveniKarton() {
		return zdravstveniKarton;
	}

	public void setZdravstveniKarton(ZdravstveniKarton zdravstveniKarton) {
		this.zdravstveniKarton = zdravstveniKarton;
	}

}
