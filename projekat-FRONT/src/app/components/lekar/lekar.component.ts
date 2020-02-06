import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LekarService } from 'src/app/services/lekar.service';
import { Lekar } from 'src/app/models/lekar.model';

@Component({
  selector: 'app-lekar',
  templateUrl: './lekar.component.html',
  styleUrls: ['./lekar.component.css']
})
export class LekarComponent implements OnInit {
  idLekara:number
  lekar:Lekar//={id:0,klinika:{id:0,naziv:"",adresa:"",opis:""},user:{id:0,username:"",lastname:"",adress:"",city:"",country:"",phoneNumber:"",uloga:"",password:"",email:""},opis:"",slika:"",specijalizacija:"" }
  
  constructor(private route: ActivatedRoute, private lekarService: LekarService) { 
    
       
  }

  ngOnInit() {
   
    //this.lekar=this.lekari.find(x => x.id == this.idLekara);
    
  }

}
