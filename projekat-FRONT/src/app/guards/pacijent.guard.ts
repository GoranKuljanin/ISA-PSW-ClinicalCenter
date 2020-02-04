import { User } from 'src/app/models/user.model';
import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()

export class PacijentGuard implements CanActivate{

    korisnik: User;

    constructor(private service: LoginService, private router: Router){}

    canActivate(){

        if(this.service.loggedInUser){
            if(JSON.stringify(this.service.loggedInUser.authorities).search('ROLE_PACIJENT') !== -1){
                return true;        
            }else {
                this.router.navigateByUrl('/403');                          //Ne prebacuje
                return false;
            }
        }else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}