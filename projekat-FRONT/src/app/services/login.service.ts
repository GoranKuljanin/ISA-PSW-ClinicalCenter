import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;   //Korisceno kod logovanja kao pacijent, da se zapamti koji korisnik je logovan
                    //Stanje podeseno u login.component.ts

  constructor(private http: HttpClient) { }

  // public getData(email, password){
  //   let header = new HttpHeaders();
  //   header.append('Content-Type', 'application/json');
  //   let params = new HttpParams().set("email", email).set("password", password);
  //   return this.http.get( 'http://localhost:8088/login', {headers: header, params: params}).subscribe(
  //     data => {
  //       if(data == null ){
  //         alert('Nepravilan E-mail ili Lozinka!');
  //       }else{
  //         console.log(data);
  //       }
  //     }
  //   );
  // }
  
  
  public getData(email, password):Observable<User>{
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let params = new HttpParams().set("email", email).set("password", password);
    return this.http.get<User>( 'http://localhost:8088/login', {headers: header, params: params});
  }

}
