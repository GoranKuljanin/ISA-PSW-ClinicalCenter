import { PutanjaService } from './../../putanje/putanje.service';
import { User } from './../../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pacijent,Pregled,ZdravstveniKarton } from 'src/app/models/pacijent';

@Injectable({
  providedIn: 'root'
})
export class PacijentService {

  constructor(private http: HttpClient, private putanjaService: PutanjaService) { }

public getPacijentaIzBaze(username:string):Observable<Pacijent>{
  let header = new HttpHeaders();
  header.append('Content-Type', 'application/json');
  return this.http.get<Pacijent>(this.putanjaService.pacijentInfo, {headers: header});
}

public updatePacijenta(pacijent: Pacijent): void {
  this.http.put(this.putanjaService.pacijentURL, pacijent).subscribe();
}

public azurirajPacijenta(user: User):Observable<User> {
  let header = new HttpHeaders();
  header.append('Content-Type', 'application/json');
  return this.http.post<User>('http://localhost:8088/updatePacijent', user, {headers: header});
}

public getPacijente():Observable<Pacijent[]>{
  return this.http.get<Pacijent[]>('http://localhost:8088/getPacijenti');
}
public getPacijenta(id:number):Observable<Pacijent>{
  return this.http.get<Pacijent>('http://localhost:8088/getPacijenti/'+id);
}

public getZdravstveniKarton(username: string):Observable<ZdravstveniKarton>{
  let header = new HttpHeaders();
  header.append('Content-Type', 'application/json');
  return this.http.get<ZdravstveniKarton>(this.putanjaService.zdravstveniKarton,{headers: header});
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
