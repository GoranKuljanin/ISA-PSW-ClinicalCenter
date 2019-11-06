package com.klinickiCentar.Modeli;

import java.util.Date;

public class GodisnjiOdmor {

	private Date datumPocetkaGodisnjeg;
	private Date datumKrajaGodisnjeg;
	private String opisOdobravanja;
	private boolean odobreno = false;
	public Date getDatumPocetkaGodisnjeg() {
		return datumPocetkaGodisnjeg;
	}
	public void setDatumPocetkaGodisnjeg(Date datumPocetkaGodisnjeg) {
		this.datumPocetkaGodisnjeg = datumPocetkaGodisnjeg;
	}
	public Date getDatumKrajaGodisnjeg() {
		return datumKrajaGodisnjeg;
	}
	public void setDatumKrajaGodisnjeg(Date datumKrajaGodisnjeg) {
		this.datumKrajaGodisnjeg = datumKrajaGodisnjeg;
	}
	public String getOpisOdobravanja() {
		return opisOdobravanja;
	}
	public void setOpisOdobravanja(String opisOdobravanja) {
		this.opisOdobravanja = opisOdobravanja;
	}
	public boolean isOdobreno() {
		return odobreno;
	}
	public void setOdobreno(boolean odobreno) {
		this.odobreno = odobreno;
	}
	
}
