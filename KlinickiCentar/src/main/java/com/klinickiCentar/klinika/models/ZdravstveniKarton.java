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
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "zdravstvenikarton")
public class ZdravstveniKarton {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToMany(mappedBy = "zdravstveniKarton", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<Pregled> pregled = new HashSet<Pregled>();	//Ili istorija bolesti ( diskutovati! )
	
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
	
	public Pacijent getPacijent() {
		return pacijent;
	}

	public void setPacijent(Pacijent pacijent) {
		this.pacijent = pacijent;
	}

	public Set<Pregled> getPregled() {
		return pregled;
	}

	public void setPregled(Set<Pregled> pregled) {
		this.pregled = pregled;
	}
	
}
