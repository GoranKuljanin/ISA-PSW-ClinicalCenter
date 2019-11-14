import { Component, OnInit } from '@angular/core';
import { RegisterService } from './../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Roles: any = ['Admin', 'User'];
     username = '';
     password = '';
     email ='';
     lastname = '';
     adress = '';
     city = '';
     country = '';
     phone = '';
     isPacijent = '0';
  
  constructor(private service: RegisterService) { }

  ngOnInit() {
  }

  public onRegister(){
    // event.preventDefault();

    // const target = event.target;
    // const username = target.querySelector('#username').value;
    // const password = target.querySelector('#password').value;
    // const email = target.querySelector('#email').value;
    // const lastname = target.querySelector('#lastname').value;
    // const adress = target.querySelector('#adress').value;
    // const city = target.querySelector('#city').value;
    // const country = target.querySelector('#country').value;
    // const phone = target.querySelector('#phone').value;

    let res = this.service.doRegister(this.username, this.password, this.email, this.lastname, this.adress, this.city, this.country, this.phone, this.isPacijent);
    res.subscribe((data)=>{
      if(data == "Postoji"){
        alert('Korisnicko ime ili email vec postoje!');
      }else{
        alert('Uspesno ste se registrovali');
      }
    })
  }


}
