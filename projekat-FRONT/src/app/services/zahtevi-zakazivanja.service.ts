import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ZahtevZakazivanjaPregleda } from '../models/zahtevZakazivanjaPregleda.model';
import { Lekar } from '../models/lekar.model';
import { Pacijent } from '../models/pacijent';

@Injectable({
  providedIn: 'root'
})
export class ZahteviZakazivanjaService {

  constructor(private http: HttpClient) { }
  public getAll():Observable<ZahtevZakazivanjaPregleda[]>{
    return this.http.get<ZahtevZakazivanjaPregleda[]>('http://localhost:8088/ZahteviZaZakazivanje');
  }

  public create(zahtev: ZahtevZakazivanjaPregleda): void {
    this.http.post('http://localhost:8088/ZahteviZaZakazivanje', zahtev).subscribe();
  }

  public getLekar(id:number):Observable<Lekar>{
    return this.http.get<Lekar>('http://localhost:8088/lekar/'+id);
  }

  public getPacijenta(id:number):Observable<Pacijent>{
    return this.http.get<Pacijent>('http://localhost:8088/getPacijenti/'+id);
  }
}
