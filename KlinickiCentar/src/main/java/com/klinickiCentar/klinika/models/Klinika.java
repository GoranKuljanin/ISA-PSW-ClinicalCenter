package com.klinickiCentar.klinika.models;

import java.util.HashSet;
import java.util.List;
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
	@OneToMany( mappedBy = "klinika" )
	@JsonIgnore
	private List<Termin> termini;
	
	@OneToMany( mappedBy = "klinika" )
	@JsonIgnore
	private List<Lekar> lekari;
	
	@OneToMany( mappedBy = "klinika" )
	@JsonIgnore
	private List<Sala> sale;
	
	@OneToMany( mappedBy = "klinika" )
	@JsonIgnore
	private List<Cena> cene;

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
	public List<Termin> getTermini() {
		return termini;
	}

	public void setTermini(List<Termin> termini) {
		this.termini = termini;
	}
	
	public Termin addTermin(Termin termin) {
		getTermini().add(termin);
		termin.setKlinika(this);
		return termin;
	}

	public Termin removeTermin(Termin termin) {
		getTermini().remove(termin);
		termin.setKlinika(null);

		return termin;
	}
	//---------------------------------------
	//Lekari-------------------------------------
	public List<Lekar> getLekari() {
		return lekari;
	}

	public void setLekari(List<Lekar> lekari) {
		this.lekari = lekari;
	}

	public Lekar addLekar(Lekar lekar) {
		getLekari().add(lekar);
		lekar.setKlinika(this);
		return lekar;
	}

	public Lekar removeLekar(Lekar lekar) {
		getLekari().remove(lekar);
		lekar.setKlinika(null);

		return lekar;
	}
	//--------------------------------------------
	//Sale----------------------------------------
	public List<Sala> getSale() {
		return sale;
	}

	public void setSale(List<Sala> sale) {
		this.sale = sale;
	}

	public Sala addSale(Sala sale) {
		getSale().add(sale);
		sale.setKlinika(this);
		return sale;
	}

	public Sala removeSale(Sala sale) {
		getSale().remove(sale);
		sale.setKlinika(null);

		return sale;
	}
	//--------------------------------------------
	//Cene----------------------------------------
	public List<Cena> getCene() {
		return cene;
	}

	public void setCene(List<Cena> cene) {
		this.cene = cene;
	}
	
	public Cena addCene(Cena cene) {
		getCene().add(cene);
		cene.setKlinika(this);
		return cene;
	}

	public Cena removeRacun(Cena cene) {
		getCene().remove(cene);
		cene.setKlinika(null);
		return cene;
	}
}
