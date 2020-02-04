import { AuthService } from './authService/auth.service';
import { PutanjaService } from './../putanje/putanje.service';
import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //user: User;   //Korisceno kod logovanja kao pacijent, da se zapamti koji korisnik je logovan
                    //Stanje podeseno u login.component.ts

  loggedInUser;

  constructor(private http: HttpClient, private putanjaService: PutanjaService, private authService: AuthService) { }

  getUserData(){
    return this.authService.get(this.putanjaService.userInfo)
    .pipe(map(user =>{
        this.loggedInUser = user;
        return user;
    }))
  }
}
