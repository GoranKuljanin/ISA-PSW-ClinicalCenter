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
    pregled: Pregled;
}

export class Pregled {
    id: number;
    datum: string;
    trajanje: string;
    sala: Sala;
    cena: number;
    lekar: Lekar;
}

export class PregledanPacijent {
    pregledaniPacijent:Pacijent
}
