package com.klinickiCentar.Modeli;

import java.util.HashMap;
import java.util.List;

public class ZdravstveniKarton {

	
	List<HashMap<Integer, String>> istorijaBolesti; //istorija bolesti
	//poseta lekaru
	HashMap<Integer, String> dijagnoza;	//Dijagnoza (ovo je pod pitanjem)
	HashMap<Integer, String> terapija;	//Terapija (mozda je recept) (mozda bool)
	boolean overenaTerapija;//Overeno (od strane medicinske sestre)
	//List<Pregleda> pregleda;
	//Lista operacija ??????????????????????????????????????????????????????????????/
	
}
