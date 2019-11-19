import { RegisterServiceService } from './../../services/register-service.service';
import { User } from './../../models/user.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Roles: any = ['AdminKlinike', 'User', 'ADMIN_K_C'];
  //public data: User = new User('0');
  public user: User = new User();
  //data.uloga: '0';

  constructor(private registerService : RegisterServiceService ) { }

  ngOnInit() {
  }

  public onSubmit(): void{
      this.user.uloga = this.Roles[1];
     
      let res = this.registerService.saveUser(this.user);
      res.subscribe((res)=>{
        if(res == null ){
          alert('Vec postoji korisnicki nalog sa unetim E-mailom!');
        }else{
          alert('Uspesno ste se registrovali kao korisnik!');
          //if( res.uloga == this.Roles[1] )
        }
      })
  }

}
