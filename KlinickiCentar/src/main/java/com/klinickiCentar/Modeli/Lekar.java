package com.klinickiCentar.Modeli;

public class Lekar extends MedicinskoOsoblje {
	private Pregled pregled; //mozda i operacija
	public Pregled getPregled() {
		return pregled;
	}
	public void setPregled(Pregled pregled) {
		this.pregled = pregled;
	}
	public String getRadnoVreme() {
		return radnoVreme;
	}
	public void setRadnoVreme(String radnoVreme) {
		this.radnoVreme = radnoVreme;
	}
	private String radnoVreme;
	
}
