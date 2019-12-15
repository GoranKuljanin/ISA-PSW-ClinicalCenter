import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Klinika } from 'src/app/models/klinika.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KlinikaService {

  constructor(private http: HttpClient) { }
  public getKlinike():Observable<Klinika[]>{
    return this.http.get<Klinika[]>('http://localhost:8088/klinike');
  }
}
