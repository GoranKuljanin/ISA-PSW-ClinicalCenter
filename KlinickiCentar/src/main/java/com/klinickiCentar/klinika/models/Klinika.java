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
import javax.persistence.Table;

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
	
	@OneToMany( cascade = CascadeType.ALL )
	//@JoinColumn(name = "termin_id")
	private Set<Termin> slobodniTermini = new HashSet<Termin>();
	
	@OneToMany(  cascade = CascadeType.ALL)
	//@JoinColumn(name = "lekar_id")
	private Set<Lekar> spisakLekara = new HashSet<Lekar>();
	
	@OneToMany( cascade = CascadeType.ALL)
	//@JoinColumn(name = "sala_id")
	private Set<Sala> spisakSala = new HashSet<Sala>();
	
	@OneToMany( cascade = CascadeType.ALL )
	//@JoinColumn(name = "cena_id")
	private Set<Cena> cenovnik = new HashSet<Cena>();

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

	public Set<Termin> getSlobodniTermini() {
		return slobodniTermini;
	}

	public void setSlobodniTermini(Set<Termin> slobodniTermini) {
		this.slobodniTermini = slobodniTermini;
	}

	public Set<Lekar> getSpisakLekara() {
		return spisakLekara;
	}

	public void setSpisakLekara(Set<Lekar> spisakLekara) {
		this.spisakLekara = spisakLekara;
	}

	public Set<Sala> getSpisakSala() {
		return spisakSala;
	}

	public void setSpisakSala(Set<Sala> spisakSala) {
		this.spisakSala = spisakSala;
	}

	public Set<Cena> getCenovnik() {
		return cenovnik;
	}

	public void setCenovnik(Set<Cena> cenovnik) {
		this.cenovnik = cenovnik;
	}
	
	
}
