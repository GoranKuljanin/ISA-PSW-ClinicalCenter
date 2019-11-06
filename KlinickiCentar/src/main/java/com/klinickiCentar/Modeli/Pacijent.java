package com.klinickiCentar.Modeli;

public class Pacijent extends Korisnik{

	private ZdravstveniKarton zdravstveniKarton;

	public ZdravstveniKarton getZdravstveniKarton() {
		return zdravstveniKarton;
	}

	public void setZdravstveniKarton(ZdravstveniKarton zdravstveniKarton) {
		this.zdravstveniKarton = zdravstveniKarton;
	}
	
}
