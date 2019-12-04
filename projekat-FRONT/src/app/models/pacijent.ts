import { Sala } from './Sala.model';
import { User } from './user.model';
export class Pacijent {
    //id:number;
    zdravstveniKarton:string;
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
}
