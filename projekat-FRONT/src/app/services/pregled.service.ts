import { PutanjaService } from './../putanje/putanje.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregled } from '../models/pacijent';
import { Termin } from '../models/termin.model';

@Injectable({
  providedIn: 'root'
})
export class PregledService {

  constructor(private http: HttpClient, private putanjaService: PutanjaService) { }

  public getAllPregledi():Observable<Pregled[]>{
      return this.http.get<Pregled[]>('http://localhost:8088/getAllPregledi');
  }

  public getPreglediByDatum(datum:string, id: number):Observable<Pregled[]>{
      let header = new HttpHeaders();
      header.append('Content-Type', 'application/json');
      let params = new HttpParams().set("datum", datum);
      return this.http.get<Pregled[]>('http://localhost:8088/pregledi/getPreglediByDatum/' + id, {headers: header, params: params});
  }

  public zakaziPregledZaPacijenta(idd: any, username: string){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let params = new HttpParams().set('username', username);
    return this.http.post('http://localhost:8088/pregledi/zakaziPregled', idd, {headers: header, params: params});
  }

  public odjaviPregled(id: number){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    this.http.post(this.putanjaService.odjaviPregled, id, {headers: header}).subscribe();
  }

  public zakazaniPregledi(username: string):Observable<Pregled[]>{
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    //let params = new HttpParams().set('username', username);
    return this.http.get<Pregled[]>(this.putanjaService.zakazaniPregledi, {headers: header});
  }
  public addPregled(pregled: Pregled):Observable<Pregled>{
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post<Pregled>('http://localhost:8088/pregledi/addPregled', pregled, {headers: header});
  }

  public addTermin(termin: Termin):Observable<Termin>{
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post<Termin>('http://localhost:8088/pregledi/addTermin', termin, {headers: header});
  }
}
