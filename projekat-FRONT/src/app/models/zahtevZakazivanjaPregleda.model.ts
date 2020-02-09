import { Lekar } from './lekar.model';
import { Pacijent } from './pacijent';
import { Termin } from './termin.model';
import { Klinika } from './klinika.model';
import { TipPregleda } from './tipPregleda.model';

export class ZahtevZaZakazivanje {
    id: number;
    odkada: string;
    dokada: string;
    //lekar: Lekar;
    opis:string;
    lekar:Lekar;
    //pacijent: Pacijent;
    //tippregleda: TipPregleda;
}