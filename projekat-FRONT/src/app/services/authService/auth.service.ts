import { filter, catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { PutanjaService } from './../../putanje/putanje.service';
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{

    constructor(private router: Router, private putanje: PutanjaService, private http: HttpClient){}

    private access_token = null;
    responseLogin;

    login(username, password){

        const loginHeaders = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          // const body = `username=${user.username}&password=${user.password}`;
          const body = {
            'username' : username,
            'password' : password
          };
        
        //   return this.post(this.putanje.login_url, JSON.stringify(body), loginHeaders)
        //     .pipe(map( (res) => {
        //         console.log('Login success!');
        //         this.access_token = res.accessToken;
        //     }
        //     ));
          return this.sendPost(this.putanje.login_url, body, loginHeaders)
                .pipe(map((res => {
                    console.log('Login success');
                    this.access_token = res.accessToken;
                })));
    }

    sendPost(url: string, body: any, customHeaders?: HttpHeaders): Observable<any>{
        
        let headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });

        return this.http.post(url, body, {headers: customHeaders || headers});
    }

    //************************************************* */
    get(path: string, args?: any): Observable<any> {
      let headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      });
      
        const options = {
          headers: headers,
        };
    
    
        return this.http.get(path, options)
          .pipe(catchError(this.checkError.bind(this)));
      }
      
    post(path: string, body: any, customHeaders?: HttpHeaders): Observable<any> {
        return this.request(path, body, 'POST', customHeaders);
    }

    private request(path: string, body: any, method = 'POST', custemHeaders?: HttpHeaders): Observable<any> {
        let headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
        
        const req = new HttpRequest(method, path, body, {
          headers: custemHeaders || headers,
        });
    
        return this.http.request(req).pipe(filter(response => response instanceof HttpResponse))
          .pipe(map((response: HttpResponse<any>) => response.body))
          .pipe(catchError(error => this.checkError(error)));
      }
    
      // Display error if logged in, otherwise redirect to IDP
      private checkError(error: any): any {
        if (error && error.status === 401) {
          // this.redirectIfUnauth(error);
        } else {
          // this.displayError(error);
        }
        throw error;
      }

      tokenIsPresent() {
        return this.access_token != undefined && this.access_token != null;
      }
    
      getToken() {
        return this.access_token;
      }
}