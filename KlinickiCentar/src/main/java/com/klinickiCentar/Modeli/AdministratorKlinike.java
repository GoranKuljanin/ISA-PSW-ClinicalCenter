package com.klinickiCentar.Modeli;

import java.util.List;

public class AdministratorKlinike {

	private List<Pregled> pregledZahtevi;//lista zahteva za pregleda
	//lista zahteva za operaciju
	private Klinika klinika; //jedna jedina
	private List<Sala> evidencijaSala;
	private List<GodisnjiOdmor> evidencijaGodisnjih;//vodi racuna o vodi evidenciju o salama i godišnjim odmorima
	//lekara.
	public List<Pregled> getPregledZahtevi() {
		return pregledZahtevi;
	}
	public void setPregledZahtevi(List<Pregled> pregledZahtevi) {
		this.pregledZahtevi = pregledZahtevi;
	}
	public Klinika getKlinika() {
		return klinika;
	}
	public void setKlinika(Klinika klinika) {
		this.klinika = klinika;
	}
	public List<Sala> getEvidencijaSala() {
		return evidencijaSala;
	}
	public void setEvidencijaSala(List<Sala> evidencijaSala) {
		this.evidencijaSala = evidencijaSala;
	}
	public List<GodisnjiOdmor> getEvidencijaGodisnjih() {
		return evidencijaGodisnjih;
	}
	public void setEvidencijaGodisnjih(List<GodisnjiOdmor> evidencijaGodisnjih) {
		this.evidencijaGodisnjih = evidencijaGodisnjih;
	}
}
