import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipPregleda } from '../models/tipPregleda.model';

@Injectable({
  providedIn: 'root'
})
export class TipPregledaService {

  constructor(private http: HttpClient) { }
  public getTipoviPregleda():Observable<TipPregleda[]>{
    return this.http.get<TipPregleda[]>('http://localhost:8088/tipoviPregleda');
  }

  public addTipPregleda(tipPregleda: TipPregleda){
    return this.http.post('http://localhost:8088/tipPregleda/', tipPregleda)
  }

  public updateTipPregleda(tipPregleda: TipPregleda){
    return this.http.put('http://localhost:8088/tipPregleda/', tipPregleda)
  }

  public deleteTipPregleda(idSala: number){
    return this.http.delete('http://localhost:8088/tipPregleda/'+ idSala);
  }
}
