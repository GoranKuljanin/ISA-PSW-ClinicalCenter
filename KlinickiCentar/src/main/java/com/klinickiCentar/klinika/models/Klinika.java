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
	
	@OneToOne
	private Termin termini;
	
	/*@OneToOne
	private Lekar lekari;*/
	@JsonIgnore
	@OneToMany(mappedBy = "klinika", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<Lekar> lekari = new HashSet<Lekar>();
	
	@OneToOne
	private Sala sale;
	
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
	
	/*public Termin addTermin(Termin termin) {
		getTermini().add(termin);
		termin.setKlinika(this);
		return termin;
	}

	public Termin removeTermin(Termin termin) {
		getTermini().remove(termin);
		termin.setKlinika(null);

		return termin;
	}*/
	//---------------------------------------
	//Lekari-------------------------------------
	/*public Lekar getLekari() {
		return lekari;
	}

	public void setLekari(Lekar lekari) {
		this.lekari = lekari;
	}*/
	@JsonIgnore
	public Set<Lekar> getLekari() {
		return lekari;
	}

	public void setLekari(Set<Lekar> lekari) {
		this.lekari = lekari;
	}

	//--------------------------------------------
	//Sale----------------------------------------
	public Sala getSale() {
		return sale;
	}

	public void setSale(Sala sale) {
		this.sale = sale;
	}

	/*public Sala addSale(Sala sale) {
		getSale().add(sale);
		sale.setKlinika(this);
		return sale;
	}

	public Sala removeSale(Sala sale) {
		getSale().remove(sale);
		sale.setKlinika(null);

		return sale;
	}*/
	//--------------------------------------------
	//Cene----------------------------------------
	public Cena getCene() {
		return cene;
	}

	public void setCene(Cena cene) {
		this.cene = cene;
	}

//	public Set<Pregled> getListaPregleda() {
//		return listaPregleda;
//	}
//
//	public void setListaPregleda(Set<Pregled> listaPregleda) {
//		this.listaPregleda = listaPregleda;
//	}
	
	/*public Cena addCene(Cena cene) {
		getCene().add(cene);
		cene.setKlinika(this);
		return cene;
	}

	public Cena removeRacun(Cena cene) {
		getCene().remove(cene);
		cene.setKlinika(null);
		return cene;
	}*/
	@JsonIgnore
	public Set<AdministratorKlinike> getAdministratoriKlinike() {
		return adminiKlinike;
	}

	public void setAdministratoriKlinike(Set<AdministratorKlinike> adminiKlinike) {
		this.adminiKlinike = adminiKlinike;
	}
}
