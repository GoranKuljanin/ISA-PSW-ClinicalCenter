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

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "pacijent")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Pacijent {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne//(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")	//, referencedColumnName = "user_id"
	private User user;
	
	@OneToOne
	@JoinColumn(name = "zdravstveni_karton_id")
	private ZdravstveniKarton zdravstveniKarton;
	
	@OneToMany(mappedBy = "pacijent", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<Pregled> zakazaniPregledi = new HashSet<Pregled>();
	
	@OneToMany(mappedBy = "pacijent", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<ZahtevZaZakazivanje> zahteviZaZakazivanje = new HashSet<ZahtevZaZakazivanje>();
	
	public Pacijent() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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
	
	public Set<Pregled> getZakazaniPregledi() {
		return zakazaniPregledi;
	}

	public void setZakazaniPregledi(Set<Pregled> zakazaniPregledi) {
		this.zakazaniPregledi = zakazaniPregledi;
	}
	
	@JsonIgnore
	public Set<ZahtevZaZakazivanje> getZahteviZaZakazivanje() {
		return zahteviZaZakazivanje;
	}

	public void setZahteviZaZakazivanje(Set<ZahtevZaZakazivanje> zahteviZaZakazivanje) {
		this.zahteviZaZakazivanje = zahteviZaZakazivanje;
	}
}
