//import { Pregled } from 'src/app/models/pacijent';
import { Termin } from './termin.model';
import { Lekar } from 'src/app/models/lekar.model';
import { Sala } from './Sala.model';
import { User } from './user.model';
export class Pacijent {
    id:number;
    zdravstveniKarton:ZdravstveniKarton;
    user:User;
}

export class ZdravstveniKarton {
    id: number;
    izvestaj: Izvestaj[];
    dioptrija: string;
    alergija: string;
    visina: string;
    tezina: string;
    krvna_grupa: string;
}

export class Pregled {
    id: number;
    trajanje: string;
    sala: Sala;
    cena: number;
    lekar: Lekar;
    pacijent: Pacijent;
    termin: Termin;

}

export class PregledanPacijent {
    pregledaniPacijent:Pacijent
}

export class Dijagnoza {

    id: number;
    sifra: string;
    naziv: string;
    opisDijagnoze: string;
}

export class Lek {
    
    id: number;
    sifra: string;
    naziv: string;
    opis: string;
}

export class Izvestaj {

    id: number;
    pregled: Pregled;
    dijagnoza: Dijagnoza;
    lek: Lek[];
    terapija: string;
}
