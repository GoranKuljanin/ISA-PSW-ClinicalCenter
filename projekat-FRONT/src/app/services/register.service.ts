import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public doRegister(username, password, email, lastname, adress, city, country, phone, isPacijent){
    return this.http.post('http://localhost:8088/register', {username, password, email, lastname, adress, city, country, phone, isPacijent}, {responseType: 'text' as 'json'})

  }
}
