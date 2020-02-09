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
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "zahtevzazakazivanje")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ZahtevZaZakazivanje {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "odkada")
	private String odkada;
	
	@Column(name = "dokada")
	private String dokada;
	

	@Column(name = "opis")
	private String opis;
	
	@Column(name = "prihvacen")
	private boolean prihvacen;
	
//	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
//	@JoinColumn(name = "pacijent_id")
//	private Pacijent pacijent;
	
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinColumn(name = "lekar_id")
	private Lekar lekar;
	
	/*@JsonIgnore
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinColumn(name = "klinika_id")
	private Klinika klinika;*/
	
//	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
//	@JoinColumn(name = "tippregleda_id")
//	private TipPregleda tippregleda;
	
	
	/*@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "tippregleda_id")
	private TipPregleda tippregleda;*/
	
	
	
	public ZahtevZaZakazivanje() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOdkada() {
		return odkada;
	}

	public void setOdkada(String odkada) {
		this.odkada = odkada;
	}

	public String getDokada() {
		return dokada;
	}

	public void setDokada(String dokada) {
		this.dokada = dokada;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public boolean isPrihvacen() {
		return prihvacen;
	}

	public void setPrihvacen(boolean prihvacen) {
		this.prihvacen = prihvacen;
	}
	
	
	
	/*public TipPregleda getTippregleda() {
		return tippregleda;
	}

	public void setTippregleda(TipPregleda tippregleda) {
		if (sameAsOldTippregleda(tippregleda))
		      return ;
		TipPregleda oldTipPregleda = this.tippregleda;
		    this.tippregleda = tippregleda;
		    if (oldTipPregleda!=null)
		    	oldTipPregleda.removeZakazivanje(this);
		    if (tippregleda!=null)
		    	tippregleda.addZakazivanje(this);
	}
	
	private boolean sameAsOldTippregleda(TipPregleda tippregleda) {
	    return this.tippregleda==null? tippregleda == null : this.tippregleda.equals(tippregleda);
	  }*/
	  
//	public Pacijent getPacijent() {
//		return pacijent;
//	}
//
//	public void setPacijent(Pacijent pacijent) {
//		if (sameAsOldPacijent(pacijent))
//		      return ;
//		Pacijent oldPacijent = this.pacijent;
//		    this.pacijent = pacijent;
//		    if (oldPacijent!=null)
//		    	oldPacijent.removeZakazivanje(this);
//		    if (pacijent!=null)
//		    	pacijent.addZakazivanje(this);
//	}
//	
//	private boolean sameAsOldPacijent(Pacijent pacijent) {
//	    return this.pacijent==null? pacijent == null : this.pacijent.equals(pacijent);
//	 }
	
	public Lekar getLekar() {
		return lekar;
	}

	public void setLekar(Lekar lekar) {
		if (sameAsOldLekar(lekar))
		      return ;
		Lekar oldLekar = this.lekar;
		    this.lekar = lekar;
		    if (oldLekar!=null)
		    	oldLekar.removeZahteviZaZakazivanje(this);
		    if (lekar!=null)
		    	lekar.addZahteviZaZakazivanje(this);
	}
	
	private boolean sameAsOldLekar(Lekar lekar) {
	    return this.lekar==null? lekar == null : this.lekar.equals(lekar);
	 }

}
