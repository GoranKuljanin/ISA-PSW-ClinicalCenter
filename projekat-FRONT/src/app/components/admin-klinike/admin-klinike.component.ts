import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminKlinikeService } from 'src/app/services/admin-klinike.service';
import { AdminKlinike } from 'src/app/models/adminKlinike.model';
import { MatSnackBar } from '@angular/material';
import { empty } from 'rxjs';

@Component({
  selector: 'app-admin-klinike',
  templateUrl: './admin-klinike.component.html',
  styleUrls: ['./admin-klinike.component.css']
})
export class AdminKlinikeComponent implements OnInit {
  idAdminaKlinike: number;
  admin: AdminKlinike;
  firstLogin: boolean;
  lozinka: string;
  potvrdiLozinku: string;
  constructor(private service: AdminKlinikeService, private route: ActivatedRoute, private snackBar: MatSnackBar ,private router: Router) {
    
        this.idAdminaKlinike= parseInt(this.route.snapshot.paramMap.get('ida'));
        this.service.getAdmin(this.idAdminaKlinike).subscribe(
          data => {
            this.admin = data;
            this.firstLogin=this.admin.firstLogin;
          }
        );
  }

  ngOnInit() {
    
    
  }
  public onSubmit(): void{
    if(this.lozinka.length < 8){
      this.snackBar.open('Lozinka mora da ima barem 8 karaktera!', 'U redu', {duration: 10000});
      return;
    }else {
      if(this.potvrdiLozinku === this.lozinka){
        this.snackBar.open('Uspesno ste promenili lozinku', 'U redu', {duration: 10000});
        this.admin.firstLogin = false;
        this.admin.user.password = this.lozinka;
        console.log(this.admin);
        this.service.updateAdminaK(this.admin);
        this.service.updateUser(this.admin.user);
        window.location.href = this.router.url;
      }else{
        this.snackBar.open('Vase Lozinke se ne podudaraju!', 'U redu', {duration: 10000});
        return;
      }
    }
  }
  
}
