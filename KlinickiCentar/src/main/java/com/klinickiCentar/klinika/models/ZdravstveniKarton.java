package com.klinickiCentar.klinika.models;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "zdravstvenikarton")
public class ZdravstveniKarton {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	@JoinColumn(name = "pregled_id")
	private Pregled pregled;				//Ili istorija bolesti ( diskutovati! )
	
	@Column(name = "dijagnoza")
	private String dijagnoza;
	
	@Column(name = "terapija")
	private String terapija;
	
	@OneToOne
	private Pacijent pacijent;
	
	public ZdravstveniKarton() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Pregled getPregledi() {
		return pregled;
	}

	public void setPregledi(Pregled pregledi) {
		this.pregled = pregledi;
	}

	public String getDijagnoza() {
		return dijagnoza;
	}

	public void setDijagnoza(String dijagnoza) {
		this.dijagnoza = dijagnoza;
	}

	public String getTerapija() {
		return terapija;
	}

	public void setTerapija(String terapija) {
		this.terapija = terapija;
	}
	
}
