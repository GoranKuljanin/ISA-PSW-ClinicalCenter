package com.klinickiCentar.Modeli;

import java.util.List;

public class MedicinskoOsoblje extends Korisnik{
	
	private List<ZdravstveniKarton> listaKartona;	// zdravstvenih kartona vrv pacijenta (vec je u pacijentu)
	private List<Pacijent> pacijenati;
	private GodisnjiOdmor zahtevZaGodisnjiOdmor;	//podnosi zahtev za godisnji odmor
	//RadniKalendar radniKalendar
	private Klinika klinika; //(kome pripada)
	public List<ZdravstveniKarton> getListaKartona() {
		return listaKartona;
	}
	public void setListaKartona(List<ZdravstveniKarton> listaKartona) {
		this.listaKartona = listaKartona;
	}
	public List<Pacijent> getPacijenati() {
		return pacijenati;
	}
	public void setPacijenati(List<Pacijent> pacijenati) {
		this.pacijenati = pacijenati;
	}
	public GodisnjiOdmor getZahtevZaGodisnjiOdmor() {
		return zahtevZaGodisnjiOdmor;
	}
	public void setZahtevZaGodisnjiOdmor(GodisnjiOdmor zahtevZaGodisnjiOdmor) {
		this.zahtevZaGodisnjiOdmor = zahtevZaGodisnjiOdmor;
	}
	public Klinika getKlinika() {
		return klinika;
	}
	public void setKlinika(Klinika klinika) {
		this.klinika = klinika;
	}

}
