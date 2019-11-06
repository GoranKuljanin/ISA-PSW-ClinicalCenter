package com.klinickiCentar.Modeli;

import java.util.List;

public class MedicinskaSestra extends MedicinskoOsoblje{

	private List<Recept> receptiZaOveru;

	public List<Recept> getReceptiZaOveru() {
		return receptiZaOveru;
	}

	public void setReceptiZaOveru(List<Recept> receptiZaOveru) {
		this.receptiZaOveru = receptiZaOveru;
	}
}
