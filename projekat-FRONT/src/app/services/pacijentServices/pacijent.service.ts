import { User } from './../../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pacijent,Pregled,ZdravstveniKarton } from 'src/app/models/pacijent';

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

public azurirajPacijenta(user: User):Observable<User> {
  //this.http.put('http://localhost:8088/pacijent', pacijent).subscribe();
   let header = new HttpHeaders();
   header.append('Content-Type', 'application/json');
  // let param = new HttpParams();
   return this.http.post<User>('http://localhost:8088/updatePacijent', user, {headers: header});
}

public getPacijente():Observable<Pacijent[]>{
  return this.http.get<Pacijent[]>('http://localhost:8088/getPacijenti');
}
public getPacijenta(id:number):Observable<Pacijent>{
  return this.http.get<Pacijent>('http://localhost:8088/getPacijenti/'+id);
}

public getZdravstveniKarton(email: string):Observable<ZdravstveniKarton>{
  let header = new HttpHeaders();
  header.append('Content-Type', 'application/json');
  let params = new HttpParams().set("email", email);
  return this.http.get<ZdravstveniKarton>('http://localhost:8088/getZdravstveniKarton',{headers: header, params: params});
}

public getPreglede():Observable<Pregled[]>{
  return this.http.get<Pregled[]>('http://localhost:8088/getAllPregledi');
}

  //
  // public updatePacijenta(email: string, username: string):Observable<User>{
  //   let header = new HttpHeaders();
  //   header.append('Content-Type', 'application/json');
  //   let params = new HttpParams().set("email", email).set("username", username);
  //     return this.http.post<User>('http://localhost:8088/updatePacijent', {headers: header ,params: params});
  // }
}
