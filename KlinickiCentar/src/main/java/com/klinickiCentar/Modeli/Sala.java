package com.klinickiCentar.Modeli;

import java.util.Date;

public class Sala {

	private String brojSale;//broj
	private String naziv;//naziv
	private Date datumRezervisanja;//datum
	public String getBrojSale() {
		return brojSale;
	}
	public void setBrojSale(String brojSale) {
		this.brojSale = brojSale;
	}
	public String getNaziv() {
		return naziv;
	}
	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}
	public Date getDatumRezervisanja() {
		return datumRezervisanja;
	}
	public void setDatumRezervisanja(Date datumRezervisanja) {
		this.datumRezervisanja = datumRezervisanja;
	}
}
