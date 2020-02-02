package com.klinickiCentar.klinika.models;

import java.util.ArrayList;
import java.util.Collection;
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
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "klinika")
public class Klinika {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "naziv", nullable = false)
	private String naziv;
	
	@Column(name = "adresa", nullable = false)
	private String adresa;
	
	@Column(name = "opis", nullable = false)
	private String opis;
	
	@JsonIgnore
	@OneToOne
	private Termin termini;
	
	/*@OneToOne
	private Lekar lekari;*/
	@JsonIgnore
	@OneToMany(mappedBy = "klinika")
	private Collection<Lekar> lekari = new ArrayList<Lekar>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "klinika")
	private Collection<Sala> sale = new ArrayList<Sala>();
	
	@JsonIgnore
	@OneToOne
	private Cena cene;
	
	@JsonIgnore
	@OneToMany(mappedBy = "klinika", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<AdministratorKlinike> adminiKlinike = new HashSet<AdministratorKlinike>();
	
//	@OneToMany(mappedBy = "pacijent", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//	private Set<Pregled> listaPregleda = new HashSet<Pregled>();

	public Klinika() {
		super();
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getAdresa() {
		return adresa;
	}

	public void setAdresa(String adresa) {
		this.adresa = adresa;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}
	//Termini--------------------------------
	
	public Termin getTermini() {
		return termini;
	}

	public void setTermini(Termin termini) {
		this.termini = termini;
	}
	
	//Lekari-------------------------------------
	
	
	public Collection<Lekar> getLekari() {
		return lekari;
	}

	public void addLekar(Lekar lekar) {
		if (this.lekari.contains(lekar))
		      return ;
		lekari.add(lekar);
		lekar.setKlinika(this);
	}
	public void removeLekar(Lekar lekar) {
	    if (!lekari.contains(lekar))
	      return ;
	    lekari.remove(lekar);
	    lekar.setKlinika(null);
	  }
	
	//Sale----------------------------------------
	
	public Collection<Sala> getSale() {
		return sale;
	}

	public void addSala(Sala sala) {
		if (this.sale.contains(sala))
		      return ;
		sale.add(sala);
		sala.setKlinika(this);
	}
	public void removeSala(Sala sala) {
	    if (!sale.contains(sala))
	      return ;
	    sale.remove(sala);
	    sala.setKlinika(null);
	  }
	//Cene----------------------------------------
	public Cena getCene() {
		return cene;
	}

	public void setCene(Cena cene) {
		this.cene = cene;
	}
	
	@JsonIgnore
	public Set<AdministratorKlinike> getAdministratoriKlinike() {
		return adminiKlinike;
	}

	public void setAdministratoriKlinike(Set<AdministratorKlinike> adminiKlinike) {
		this.adminiKlinike = adminiKlinike;
	}
}
