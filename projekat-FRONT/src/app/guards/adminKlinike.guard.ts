import { LoginService } from './../services/login.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";


@Injectable()

export class AdminKlinikeGuard implements CanActivate {

    constructor(private service: LoginService, private router: Router){}

    canActivate(){
        if(this.service.loggedInUser){
            if(JSON.stringify(this.service.loggedInUser.authorities).search('ROLE_ADMIN') !== -1){
                return true;
            }else {
                console.log('Nemate ovlascenja!')                          
                this.router.navigate(['/login']);
                return false;
            }
        }else {
            console.log('Niste se prijavili!');
            this.router.navigate(['/login']);
            return false;
        }
    }
}