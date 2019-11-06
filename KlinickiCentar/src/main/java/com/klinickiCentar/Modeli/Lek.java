package com.klinickiCentar.Modeli;

public class Lek {

	private int idLeka;
	private String nazivLeka;
	private String opisLeka;
	private int trajanjeTerapije;
	public int getIdLeka() {
		return idLeka;
	}
	public void setIdLeka(int idLeka) {
		this.idLeka = idLeka;
	}
	public String getNazivLeka() {
		return nazivLeka;
	}
	public void setNazivLeka(String nazivLeka) {
		this.nazivLeka = nazivLeka;
	}
	public String getOpisLeka() {
		return opisLeka;
	}
	public void setOpisLeka(String opisLeka) {
		this.opisLeka = opisLeka;
	}
	public int getTrajanjeTerapije() {
		return trajanjeTerapije;
	}
	public void setTrajanjeTerapije(int trajanjeTerapije) {
		this.trajanjeTerapije = trajanjeTerapije;
	}
}
