package com.klinickiCentar.Modeli;

import java.util.List;

public class IzvestajOPoslovanju {

	private double prosecnaOcenaKlinike;
	private List<Double> prosecnaOcenaLekara; //lista
	private double grafika;
	private double prihodiKlinike;
	public double getProsecnaOcenaKlinike() {
		return prosecnaOcenaKlinike;
	}
	public void setProsecnaOcenaKlinike(double prosecnaOcenaKlinike) {
		this.prosecnaOcenaKlinike = prosecnaOcenaKlinike;
	}
	public List<Double> getProsecnaOcenaLekara() {
		return prosecnaOcenaLekara;
	}
	public void setProsecnaOcenaLekara(List<Double> prosecnaOcenaLekara) {
		this.prosecnaOcenaLekara = prosecnaOcenaLekara;
	}
	public double getGrafika() {
		return grafika;
	}
	public void setGrafika(double grafika) {
		this.grafika = grafika;
	}
	public double getPrihodiKlinike() {
		return prihodiKlinike;
	}
	public void setPrihodiKlinike(double prihodiKlinike) {
		this.prihodiKlinike = prihodiKlinike;
	}
}
