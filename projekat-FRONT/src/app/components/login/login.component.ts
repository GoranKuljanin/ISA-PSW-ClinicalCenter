import { PacijentService } from './../../services/pacijentServices/pacijent.service';
import { User } from './../../models/user.model';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Roles: any = ['AdminKlinike', 'User', 'ADMIN_K_C', 'PACIJENT','LEKAR','ADMIN_K'];   //Prekopirano iz register.component.ts
  email: string;
  password: string;
  user: any;    //Objekat za kastovanje onoga sto dodje sa servera (za logovanje i prebacivanje stranica)

  constructor(private service: LoginService, private route: Router, private pacijentService: PacijentService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.service.getData(this.email, this.password).subscribe(
      data=>{
        this.user = data;
        console.log(data);
        if( this.user != null ){
          if( this.user.uloga == this.Roles[2] ){
            this.route.navigateByUrl('adminKcHomePage');
          }else if(this.user.uloga == this.Roles[3]){
            this.service.user = data;
            localStorage.setItem('logedInUser', data.email);            //Dodato da bi se sacuvao ko je ulogovan (cuva i ako se osvezi stranica za razliku od servisa)
            this.route.navigateByUrl('pacijentHomePage');
          }else if(this.user.uloga == this.Roles[4]){
            this.service.user = data
            this.route.navigateByUrl('lekarHomePage/'+this.user.id);
          }else if(this.user.uloga == this.Roles[5]){
            this.service.user = data
            this.route.navigateByUrl('adminKHomePage/'+this.user.id);
          }else if( this.user.uloga == this.Roles[1] ){
              alert('Jos niste dodani u sistem od strane administratora.');
          }
        }else{
          alert('Trenutno ne mozete da se ulogujete!');
        }
      }
    );
  }

}
