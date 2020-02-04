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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "lekar")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Lekar {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "specijalizacija")
	private String specijalizacija;
	
	@Column(name = "opis")
	private String opis;
	
	@Column(name = "slika")
	private String slika;
	
	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	/*@OneToOne
	@JoinColumn(name="klinika_id")
	private Klinika klinika;*/
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "klinika_id")
	private Klinika klinika;
	
	@JsonIgnore
	@OneToMany(mappedBy = "lekar", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<ZahtevZaZakazivanje> zahteviZaZakazivanje = new HashSet<ZahtevZaZakazivanje>();
	
	@Column(name = "radnovreme")
	private String radnovreme;
	

	public Lekar() {
		super();
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getSpecijalizacija() {
		return specijalizacija;
	}

	public void setSpecijalizacija(String specijalizacija) {
		this.specijalizacija = specijalizacija;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public String getSlika() {
		return slika;
	}

	public void setSlika(String slika) {
		this.slika = slika;
	}
	
	public String getRadnovreme() {
		return radnovreme;
	}

	public void setRadnovreme(String radnovreme) {
		this.radnovreme = radnovreme;
	}

	public Klinika getKlinika() {
		return klinika;
	}

	public void setKlinika(Klinika klinika) {
		if (sameAsOld(klinika))
		      return ;
		    //set new owner
			Klinika oldKlinika = this.klinika;
		    this.klinika = klinika;
		    //remove from the old owner
		    if (oldKlinika!=null)
		    	oldKlinika.removeLekar(this);
		    //set myself into new owner
		    if (klinika!=null)
		    	klinika.addLekar(this);
	}
	
	private boolean sameAsOld(Klinika klinika) {
	    return this.klinika==null? klinika == null : this.klinika.equals(klinika);
	  }
	
	@JsonIgnore
	public Set<ZahtevZaZakazivanje> getZahteviZaZakazivanje() {
		return zahteviZaZakazivanje;
	}

	public void setZahteviZaZakazivanje(Set<ZahtevZaZakazivanje> zahteviZaZakazivanje) {
		this.zahteviZaZakazivanje = zahteviZaZakazivanje;
	}
	
}
