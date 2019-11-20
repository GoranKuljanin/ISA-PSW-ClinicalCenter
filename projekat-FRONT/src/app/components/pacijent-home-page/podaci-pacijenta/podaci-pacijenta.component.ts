import { LoginService } from './../../../services/login.service';
import { PacijentService } from './../../../services/pacijentServices/pacijent.service';
import { Pacijent } from './../../../models/pacijent';
import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podaci-pacijenta',
  templateUrl: './podaci-pacijenta.component.html',
  styleUrls: ['./podaci-pacijenta.component.css']
})
export class PodaciPacijentaComponent implements OnInit {

  //user: User;
  pacijent: Pacijent;

  constructor(private pacijentService: PacijentService, private service: LoginService) {
    
   }

  ngOnInit() {
    //this.user = this.service.user;
    this.dobaviUlogovanogPacijenta(this.service.user.email);
  }

  public dobaviUlogovanogPacijenta(email:string){
    this.pacijentService.getPacijentaIzBaze(email).subscribe(
      data=>{
          if(data != null){
            this.pacijent = data;
            console.log(this.pacijent);
          }else{
            alert('Niste uneli odgovarajuce parametre!');
          }
      }
    );
  }

  //Za izmenu podataka o pacijentu, na server se salje izmenjeni pacijent
  public onSubmit(){

      //PROBLEM => Stalno vraca null

      // let res = this.pacijentService.updatePacijenta(this.pacijent.user.email, this.pacijent.user.username).subscribe(
      //   data=>{
      //     if(data == null){
      //       alert('Vec postoji pacijent sa tim podacima, unesite druge parametre!');
      //     }else{
      //       this.pacijent.user = data;
      //       console.log(this.pacijent);
      //     }
      //   }
      // );
  }
}
