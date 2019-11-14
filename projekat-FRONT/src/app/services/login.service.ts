import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  model: User ={
    username : '',
    password : '',
    email : '',
    lastname : '',
    adress : '',
    city : '',
    country : '',
    phone : '',
    isPacijent: '0'
  };

  constructor(private http: HttpClient) { }

  // getData(){
  //   return this.http.get('http://localhost:8088').subscribe(
  //     data => {
  //       console.log("Radi!", data)
  //     }
  //   )
  // }
  public getData(username, password){
    return this.http.post('http://localhost:8088/login', {username, password}, {responseType: 'text' as 'json'})
  }
  // public getAllData(){
  //   return this.http.get<User[]>('http://localhost:8088/getAllData').subscribe(
  //     data => {
  //       console.log(data)
  //     }
  //   )
  // }
}

export interface User{
  username: string;
  password: string;
  email: string;
  lastname: string;
  adress: string;
  city: string;
  country: string;
  phone: string;
  isPacijent: string;
};
