package com.klinickiCentar.Modeli;

import java.util.HashMap;
import java.util.List;

public class Klinika {
	private List<Lekar> lekari;
	private List<AdministratorKlinike> admiinistratori;
	private String nazivKlinike;
	private String adresaKlinike; //uz mapu
	private String opisKlinike;
	private List<Pregled> terminiPregleda;//lista termina pregleda
	private List<Sala> sale;
	private HashMap<Pregled,Double> cenovnik;
	//mozda se nalaze pacijenti
	public List<Lekar> getLekari() {
		return lekari;
	}
	public void setLekari(List<Lekar> lekari) {
		this.lekari = lekari;
	}
	public List<AdministratorKlinike> getAdmiinistratori() {
		return admiinistratori;
	}
	public void setAdmiinistratori(List<AdministratorKlinike> admiinistratori) {
		this.admiinistratori = admiinistratori;
	}
	public String getNazivKlinike() {
		return nazivKlinike;
	}
	public void setNazivKlinike(String nazivKlinike) {
		this.nazivKlinike = nazivKlinike;
	}
	public String getAdresaKlinike() {
		return adresaKlinike;
	}
	public void setAdresaKlinike(String adresaKlinike) {
		this.adresaKlinike = adresaKlinike;
	}
	public String getOpisKlinike() {
		return opisKlinike;
	}
	public void setOpisKlinike(String opisKlinike) {
		this.opisKlinike = opisKlinike;
	}
	public List<Pregled> getTerminiPregleda() {
		return terminiPregleda;
	}
	public void setTerminiPregleda(List<Pregled> terminiPregleda) {
		this.terminiPregleda = terminiPregleda;
	}
	public List<Sala> getSale() {
		return sale;
	}
	public void setSale(List<Sala> sale) {
		this.sale = sale;
	}
	public HashMap<Pregled, Double> getCenovnik() {
		return cenovnik;
	}
	public void setCenovnik(HashMap<Pregled, Double> cenovnik) {
		this.cenovnik = cenovnik;
	}
}
