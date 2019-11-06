package com.klinickiCentar.Modeli;

import java.util.HashMap;
import java.util.List;

public class ZdravstveniKarton {

	
	private List<HashMap<Integer, String>> istorijaBolesti; //istorija bolesti
	//poseta lekaru
	private HashMap<Integer, String> dijagnoza;	//Dijagnoza (ovo je pod pitanjem)
	private HashMap<Integer, String> terapija;	//Terapija (mozda je recept) (mozda bool)
	private boolean overenaTerapija;//Overeno (od strane medicinske sestre)
	private List<Pregled> pregleda;
	//Lista operacija ??????????????????????????????????????????????????????????????/
	public List<HashMap<Integer, String>> getIstorijaBolesti() {
		return istorijaBolesti;
	}
	public void setIstorijaBolesti(List<HashMap<Integer, String>> istorijaBolesti) {
		this.istorijaBolesti = istorijaBolesti;
	}
	public HashMap<Integer, String> getDijagnoza() {
		return dijagnoza;
	}
	public void setDijagnoza(HashMap<Integer, String> dijagnoza) {
		this.dijagnoza = dijagnoza;
	}
	public HashMap<Integer, String> getTerapija() {
		return terapija;
	}
	public void setTerapija(HashMap<Integer, String> terapija) {
		this.terapija = terapija;
	}
	public boolean isOverenaTerapija() {
		return overenaTerapija;
	}
	public void setOverenaTerapija(boolean overenaTerapija) {
		this.overenaTerapija = overenaTerapija;
	}
	public List<Pregled> getPregleda() {
		return pregleda;
	}
	public void setPregleda(List<Pregled> pregleda) {
		this.pregleda = pregleda;
	}
	
}
