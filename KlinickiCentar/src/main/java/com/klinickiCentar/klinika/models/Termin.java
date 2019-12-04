package com.klinickiCentar.klinika.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "termin")
public class Termin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "datum", nullable = false)
	private String datum;
	
	//@ManyToOne//(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	//@JoinColumn(name = "klinika_id")
	//private Klinika klinika;

	public Termin() {
		super();
	}
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDatum() {
		return datum;
	}

	public void setDatum(String datum) {
		this.datum = datum;
	}

//	public Klinika getKlinika() {
//		return klinika;
//	}
//
//	public void setKlinika(Klinika klinika) {
//		this.klinika = klinika;
//	}
	
	
}
