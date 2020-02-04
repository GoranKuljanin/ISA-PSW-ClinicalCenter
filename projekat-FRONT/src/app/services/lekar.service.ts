import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lekar } from '../models/lekar.model';
import { User } from '../models/user.model';

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
  public addLekar(lekar:Lekar){
    return this.http.post('http://localhost:8088/lekar', lekar);
  }

  public addUser(lekar: Lekar){
    return this.http.post('http://localhost:8088/userLekar/', lekar)
  }

  public deleteLekarAndUser(idLekar: number){
    return this.http.delete('http://localhost:8088/lekar/'+ idLekar);
  }
}
