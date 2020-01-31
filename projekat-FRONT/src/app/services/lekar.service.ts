import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lekar } from '../models/lekar.model';

@Injectable({
  providedIn: 'root'
})
export class LekarService {

  constructor(private http: HttpClient) { }
  public getLekari():Observable<Lekar[]>{
    return this.http.get<Lekar[]>('http://localhost:8088/lekari');
  }

  public getLekar(id:number):Observable<Lekar>{
    return this.http.get<Lekar>('http://localhost:8088/lekar/'+id);
  }
}
