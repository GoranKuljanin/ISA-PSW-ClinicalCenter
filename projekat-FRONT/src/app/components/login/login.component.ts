import { PutanjaService } from './../../putanje/putanje.service';
import { map } from 'rxjs/operators';
import { AuthService } from './../../services/authService/auth.service';
import { PacijentService } from './../../services/pacijentServices/pacijent.service';
import { User } from './../../models/user.model';
import { AdminKlinike } from './../../models/adminKlinike.model';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminKlinikeService } from 'src/app/services/admin-klinike.service';
import { LekarService } from 'src/app/services/lekar.service';
import { Lekar } from 'src/app/models/lekar.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Roles: any = ['AdminKlinike', 'User', 'ADMIN_K_C', 'PACIJENT','LEKAR','ADMIN_K'];   //Prekopirano iz register.component.ts
  username: string;
  password: string;
  user: any;    //Objekat za kastovanje onoga sto dodje sa servera (za logovanje i prebacivanje stranica)
  adminiKlinike: AdminKlinike[]
  admin:AdminKlinike
  lekari:Lekar[]
  lekar:Lekar

  constructor(private service: LoginService, private route: Router, private pacijentService: PacijentService,private adminKlinikeService: AdminKlinikeService,private lekarService: LekarService,
          private authService: AuthService, private putanjaService: PutanjaService) { }

  ngOnInit() {
    // this.adminKlinikeService.getAdmini().subscribe(
    //   data=>{
    //     this.adminiKlinike = data;
    //   }
    // );
    // this.lekarService.getLekari().subscribe(
    //   data=>{
    //     this.lekari = data;
    //   }
    // );
  }

  currentUser

  onSubmit(){
    // this.service.getData(this.email, this.password).subscribe(
    //   data=>{
    //     this.user = data;
    //     console.log(data);
    //     if( this.user != null ){
    //       if( this.user.uloga == this.Roles[2] ){
    //         this.route.navigateByUrl('adminKcHomePage');
    //       }else if(this.user.uloga == this.Roles[3]){
    //         this.service.user = data;
    //         localStorage.setItem('logedInUser', data.email);            //Dodato da bi se sacuvao ko je ulogovan (cuva i ako se osvezi stranica za razliku od servisa)
    //         this.route.navigateByUrl('pacijentHomePage');
    //       }else if(this.user.uloga == this.Roles[4]){
    //         this.service.user = data
    //         for(let i=0;i<this.lekari.length;i++){
    //           if (this.lekari[i].user.id==this.user.id){
    //             this.lekar=this.lekari[i];
    //             break;
    //           }
    //         }
    //         this.route.navigateByUrl('lekarHomePage/'+this.lekar.id);
    //       }else if(this.user.uloga == this.Roles[5]){
    //         this.service.user = data
    //         for(let i=0;i<this.adminiKlinike.length;i++){
    //           if (this.adminiKlinike[i].user.id==this.user.id){
    //             this.admin=this.adminiKlinike[i];
    //             break;
    //           }
    //         }
            
    //         this.route.navigateByUrl('adminKHomePage/'+this.admin.id);
    //       }else if( this.user.uloga == this.Roles[1] ){
    //           alert('Jos niste dodani u sistem od strane administratora.');
    //       }
    //     }else{
    //       alert('Trenutno ne mozete da se ulogujete!');
    //     }
    //   }
    // );

    this.authService.login(this.username, this.password).subscribe(
      auth=>{
        this.service.getUserData().subscribe(
          user => {
            console.log(user);
            if(user.authorities[0].authority == 'ROLE_PACIJENT'){
              this.route.navigateByUrl('pacijentHomePage');
            }else if(user.authorities[0].authority == 'ROLE_ADMIN'){
              
            }else if(user.authorities[0].authority == 'ROLE_LEKAR'){
              
            }else if(user.authorities[0].authority == 'ROLE_ADMIN_KLINICKOG_CENTRA'){

            }else{
              console.log('nesto drugo...');
            }
          }
        );
      },
      error => {
        alert('Kredencijali nisu dobri!');
      }
    );
  }
}
