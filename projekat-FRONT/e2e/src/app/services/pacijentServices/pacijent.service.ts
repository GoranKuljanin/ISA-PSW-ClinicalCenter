import { ZdravstveniKarton, Pregled } from './../../models/pacijent';
import { User } from './../../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pacijent } from 'src/app/models/pacijent';

@Injectable({
  providedIn: 'root'
})
export class PacijentService {

  constructor(private http: HttpClient) { }

  public getPacijentaIzBaze(email:string):Observable<Pacijent>{
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let params = new HttpParams().set("email", email);
    return this.http.get<Pacijent>('http://localhost:8088/getPacijent', {headers: header, params: params});
  }

  public updatePacijenta(pacijent: Pacijent): void {
    this.http.put('http://localhost:8088/pacijent', pacijent).subscribe();
  }

  public getZdravstveneKartone():Observable<ZdravstveniKarton[]>{
    return this.http.get<ZdravstveniKarton[]>('http://localhost:8088/getZdravstveniKartoni');
  }

  public getPreglede():Observable<Pregled[]>{
    return this.http.get<Pregled[]>('http://localhost:8088/getAllPregledi');
  }

  // public getZdravstveniKartonPacijenta(id: number){
  //   return this.http.get<Pacijent>('http://localhost:8088/getZdravstveniKarton/{id}');
  // }

  //
  // public updatePacijenta(email: string, username: string):Observable<User>{
  //   let header = new HttpHeaders();
  //   header.append('Content-Type', 'application/json');
  //   let params = new HttpParams().set("email", email).set("username", username);
  //     return this.http.post<User>('http://localhost:8088/updatePacijent', {headers: header ,params: params});
  // }
}
