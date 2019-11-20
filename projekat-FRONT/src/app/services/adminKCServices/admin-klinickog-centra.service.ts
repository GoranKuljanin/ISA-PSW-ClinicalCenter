import { Pacijent } from './../../models/pacijent';
import { Observable } from 'rxjs';
import { User } from './../../models/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminKlinickogCentraService {

  constructor(private http: HttpClient) { }

  public getListaRegistrovanih(): Observable<User[]>{
    // return this.http.get<User[]>('http://localhost:8088/getAllUsers').subscribe(
    //   data => {
    //     console.log(data)
    //   }
    // )
    return this.http.get<User[]>('http://localhost:8088/getAllUsers');
  }

  public dodajPacijentaUBazu(model: User){
    return this.http.post('http://localhost:8088/dodajPacijentaUBazuPacijenata', model);
  }

  public dobaviSvePacijenteIzBaze():Observable<Pacijent[]>{
    return this.http.get<Pacijent[]>('http://localhost:8088/dobaviSvePacijenteIzBaze');
  }

  public deleteRequest(email:string){
    // let params = new HttpParams().set("email", email)
    // this.http.delete('http://localhost:8088/deletePacijent', {params: params});
  }

}
