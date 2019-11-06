package com.klinickiCentar.Modeli;

public class Pregled {
	private String datumIvreme; // ima ugradjena klasa
	private String tipPregleda;
	private String trajanjePregleda;
	private Sala sala;
	private double cena;
	private Lekar lekar;
	public String getDatumIvreme() {
		return datumIvreme;
	}
	public void setDatumIvreme(String datumIvreme) {
		this.datumIvreme = datumIvreme;
	}
	public String getTipPregleda() {
		return tipPregleda;
	}
	public void setTipPregleda(String tipPregleda) {
		this.tipPregleda = tipPregleda;
	}
	public String getTrajanjePregleda() {
		return trajanjePregleda;
	}
	public void setTrajanjePregleda(String trajanjePregleda) {
		this.trajanjePregleda = trajanjePregleda;
	}
	public Sala getSala() {
		return sala;
	}
	public void setSala(Sala sala) {
		this.sala = sala;
	}
	public double getCena() {
		return cena;
	}
	public void setCena(double cena) {
		this.cena = cena;
	}
	public Lekar getLekar() {
		return lekar;
	}
	public void setLekar(Lekar lekar) {
		this.lekar = lekar;
	}
}
