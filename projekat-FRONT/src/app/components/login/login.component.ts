import { Korisnik } from './../../models/korisnik.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  poruka:string;

  constructor(private service: LoginService, private route: Router) { }

  ngOnInit() {
  }

  onLogin(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

                        //(username, password)   //U login.service.ts je zakomentarisana metoda getData(params)
    let res = this.service.getData(username, password);
    // res.subscribe((data)=>{
    //   if(data == "admin"){
    //     alert('Ulogovali ste kao Administrator!');
    //     this.route.navigateByUrl('/adminClinicCentre');
        
    //   }else{
    //     alert('Niste Administator!');
    //   }
    // })
    //this.service.getData();

  }

}