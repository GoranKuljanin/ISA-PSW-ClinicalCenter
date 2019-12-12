import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregled } from '../models/pacijent';

@Injectable({
  providedIn: 'root'
})
export class PregledService {

  constructor(private http: HttpClient) { }

  public getAllPregledi():Observable<Pregled[]>{
      return this.http.get<Pregled[]>('http://localhost:8088/getAllPregledi');
  }

  public zakaziPregledZaPacijenta(idd: any, email: string){
    //let body = 'id=idd&email=email';
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let params = new HttpParams().set('email', email);
    return this.http.post('http://localhost:8088/zakaziPregled', idd, {headers: header, params: params});
  }

  public zakazaniPregledi(email: string):Observable<Pregled[]>{
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let params = new HttpParams().set('email', email);
    return this.http.get<Pregled[]>('http://localhost:8088/zakazaniPregledi', {headers: header, params: params});
  }

}
