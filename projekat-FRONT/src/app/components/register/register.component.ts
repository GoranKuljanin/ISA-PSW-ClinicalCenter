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

  Roles: any = ['Admin', 'User'];
  //public data: User = new User('0');
  public data: User = new User();
  //data.uloga: '0';

  constructor(private registerService : RegisterServiceService ) { }

  ngOnInit() {
  }

  public onSubmit(): void{
      let res = this.registerService.saveUser(this.data);
      res.subscribe((res)=>{
        alert('Sacuvano!');
      })
  }

}
