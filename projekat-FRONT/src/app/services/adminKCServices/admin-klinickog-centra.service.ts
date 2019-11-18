import { Observable } from 'rxjs';
import { User } from './../../models/user.model';
import { HttpClient } from '@angular/common/http';
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

}
