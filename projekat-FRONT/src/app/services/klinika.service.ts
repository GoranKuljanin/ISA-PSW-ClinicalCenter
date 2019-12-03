import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Clinic } from 'src/app/models/clinic.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KlinikaService {

  constructor(private http: HttpClient) { }
  public getKlinike():Observable<Clinic[]>{
    return this.http.get<Clinic[]>('http://localhost:8088/klinike');
  }
}
