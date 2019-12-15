import { Component, OnInit } from '@angular/core';
import { Lekar } from 'src/app/models/lekar.model';
import { ActivatedRoute } from '@angular/router';
import { LekarService } from 'src/app/services/lekar.service';

@Component({
  selector: 'app-lekari',
  templateUrl: './lekari.component.html',
  styleUrls: ['./lekari.component.css']
})
export class LekariComponent implements OnInit {
  lekari:Lekar[]=[{id:0,klinika:{id:0,naziv:"",adresa:"",opis:""},user:{id:0,username:"",lastname:"",adress:"",city:"",country:"",phoneNumber:"",uloga:"",password:"",email:""},opis:"",slika:"",specijalizacija:"" }]
  constructor(private route: ActivatedRoute, private lekarService: LekarService) {
    this.lekarService.getLekari().subscribe(
      data=>{
        this.lekari = data;
      }
    );
   }

  ngOnInit() {
  }

}
