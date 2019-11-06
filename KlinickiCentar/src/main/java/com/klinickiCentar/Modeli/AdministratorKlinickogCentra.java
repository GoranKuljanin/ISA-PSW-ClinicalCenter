package com.klinickiCentar.Modeli;

import java.util.HashMap;
import java.util.List;

public class AdministratorKlinickogCentra {

	private List<Klinika> klinike;
	private List<Korisnik> korisnika;  //ne odobrenih
	private HashMap<Integer, String> dijagnoza;
	private HashMap<Integer,String> listaLekovaKlinike; //lek ili terapija(za sifrarnik);
	public List<Klinika> getKlinike() {
		return klinike;
	}
	public void setKlinike(List<Klinika> klinike) {
		this.klinike = klinike;
	}
	public List<Korisnik> getKorisnika() {
		return korisnika;
	}
	public void setKorisnika(List<Korisnik> korisnika) {
		this.korisnika = korisnika;
	}
	public HashMap<Integer, String> getDijagnoza() {
		return dijagnoza;
	}
	public void setDijagnoza(HashMap<Integer, String> dijagnoza) {
		this.dijagnoza = dijagnoza;
	}
	public HashMap<Integer, String> getListaLekovaKlinike() {
		return listaLekovaKlinike;
	}
	public void setListaLekovaKlinike(HashMap<Integer, String> listaLekovaKlinike) {
		this.listaLekovaKlinike = listaLekovaKlinike;
	}
}
