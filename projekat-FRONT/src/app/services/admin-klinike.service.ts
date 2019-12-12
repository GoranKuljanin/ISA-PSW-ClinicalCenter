import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from '../models/Sala.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminKlinikeService {

  constructor(private http: HttpClient) { }

  public getSveSale():Observable<Sala[]>{
    return this.http.get<Sala[]>('http://localhost:8088/klinika/1/sale');
  }
}
