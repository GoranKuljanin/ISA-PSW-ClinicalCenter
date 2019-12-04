import {Sala} from './Sala.model';
export class Clinic {
    id:number;
    naziv:string;
    adresa:string;
    opis:string;
    slobodniTermini:Array<Termin>;
    spisakLekara:Array<Lekar>;
    spisakSala:Array<Sala>;
    cenovnik:Array<Cena>;
}

class Termin{
    datum:string;
}
class Lekar{
    id:number;
    name:string;
    opis:string;
}
class Cena{
    vrednost:number;
    opis:string;
}