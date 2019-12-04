import { LoginService } from './../../../services/login.service';
import { PacijentService } from './../../../services/pacijentServices/pacijent.service';
import { MatDialog } from '@angular/material';
import { Pacijent } from './../../../models/pacijent';
import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { EditProfilDialogComponent } from './edit-profil-dialog/edit-profil-dialog.component';

@Component({
  selector: 'app-podaci-pacijenta',
  templateUrl: './podaci-pacijenta.component.html',
  styleUrls: ['./podaci-pacijenta.component.css']
})
export class PodaciPacijentaComponent implements OnInit {

  //user: User;
  pacijent: Pacijent;

  constructor(private pacijentService: PacijentService, private service: LoginService,public dialog: MatDialog) {
    
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
  public openDialog( id: number, username: string, lastname: string, email: string, adress: string, city: string, country: string, phoneNumber: string) {

    const dialogRef = this.dialog.open(EditProfilDialogComponent, {
        data: { id: id, username: username,  lastname: lastname, email: email , adress: adress , city: city , country: country , phoneNumber: phoneNumber }
    });
    dialogRef.afterClosed().subscribe(result => {
        
    });

}
  //Za izmenu podataka o pacijentu, na server se salje izmenjeni pacijent
  //public onSubmit(){

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
  //}
}
