import { User } from './user.model';
import { Klinika } from './klinika.model';

export class Lekar{
    id:number;
    specijalizacija:string;
    opis:string;
    slika:string;
    user:User;
    //klinika: Klinika;
}
