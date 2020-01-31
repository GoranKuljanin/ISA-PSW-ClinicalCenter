import { Lekar } from './lekar.model';
import { Pacijent } from './pacijent';

export class ZahtevZakazivanjaPregleda {
    id:number;
    datum: string;
    vreme: string;
    pacijent: Pacijent;
    lekar: Lekar;
}