import { Klinika } from './klinika.model';

export class Sala{
    id:number;
    name:string;
    klinika: Klinika;
}

export class ZauzetiDatumi{
    day:number;
    month:number;
    year:number;
    sala_id: number;
}

export class SalaSaTerminom{
    id:number;
    name:string;
    day:number;
    month:number;
    year:number;
    //klinika: Klinika;
}