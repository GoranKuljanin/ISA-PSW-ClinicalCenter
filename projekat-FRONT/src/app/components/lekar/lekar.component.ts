import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LekarService } from 'src/app/services/lekar.service';
import { Lekar } from 'src/app/models/lekar.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-lekar',
  templateUrl: './lekar.component.html',
  styleUrls: ['./lekar.component.css']
})
export class LekarComponent implements OnInit {
  idLekara:number;
  lekar:Lekar;
  firstLogin: boolean;
  lozinka: string;
  potvrdiLozinku: string;
  constructor(private route: ActivatedRoute, private service: LekarService, private snackBar: MatSnackBar ,private router: Router) { 
    this.idLekara = parseInt(this.route.snapshot.paramMap.get('idl'));
    this.service.getLekar(this.idLekara).subscribe(
      data => {
        this.lekar = data;
        console.log(this.lekar);
        this.firstLogin = this.lekar.firstLogin;
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
        this.lekar.firstLogin = false;
        this.lekar.user.password = this.lozinka;
        console.log(this.lekar);
        this.service.updatelekar(this.lekar);
        this.service.updateUser(this.lekar.user);
        window.location.href = this.router.url;
      }else{
        this.snackBar.open('Vase Lozinke se ne podudaraju!', 'U redu', {duration: 10000});
        return;
      }
    }
  }

}
