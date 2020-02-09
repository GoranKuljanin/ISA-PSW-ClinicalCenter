import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ZahtevZaZakazivanje } from '../models/zahtevZakazivanjaPregleda.model';
import { Lekar } from '../models/lekar.model';
import { Pacijent } from '../models/pacijent';

@Injectable({
  providedIn: 'root'
})
export class ZahteviZakazivanjaService {

  constructor(private http: HttpClient) { }
  public getAll(id:number):Observable<ZahtevZaZakazivanje[]>{
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.get<ZahtevZaZakazivanje[]>('http://localhost:8088/ZahteviZaZakazivanje/'+id,{headers: header});
  }

  public create(zahtev: ZahtevZaZakazivanje){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    this.http.put('http://localhost:8088/ZahteviZaZakazivanje', zahtev,{headers: header}).subscribe();
  }

  public remove(id: number){
    this.http.delete('http://localhost:8088/ZahteviZaZakazivanje/'+ id).subscribe();
  }

  public getLekar(id:number):Observable<Lekar>{
    return this.http.get<Lekar>('http://localhost:8088/lekar/'+id);
  }

  public getPacijenta(id:number):Observable<Pacijent>{
    return this.http.get<Pacijent>('http://localhost:8088/getPacijenti/'+id);
  }
}
