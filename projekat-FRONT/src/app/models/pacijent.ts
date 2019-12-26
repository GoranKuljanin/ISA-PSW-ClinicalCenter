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
    dijagnoza: string;
    terapija: string;
    pregled: Pregled[];
}

export class Pregled {
    id: number;
    datum: string;
    trajanje: string;
    sala: Sala;
    cena: number;
    lekar: Lekar;
    pacijent: Pacijent;
    zdravstveniKarton: ZdravstveniKarton;

    dijagnoza: string;
    terapija: string;

}

export class PregledanPacijent {
    pregledaniPacijent:Pacijent
}
