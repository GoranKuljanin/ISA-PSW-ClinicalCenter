package com.klinickiCentar.klinika.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "termin")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Termin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "datum", nullable = false)
	private String datum;
	
	@OneToMany(mappedBy = "termin", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	//@JoinColumn(name = "pregled_id", referencedColumnName = "id")
	private Set<Pregled> pregled = new HashSet<>();

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

	@JsonIgnore
	public Set<Pregled> getPregled() {
		return pregled;
	}


	public void setPregled(Set<Pregled> pregled) {
		this.pregled = pregled;
	}

	
	
}
