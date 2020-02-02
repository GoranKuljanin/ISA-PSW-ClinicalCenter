import { Sala } from 'src/app/models/Sala.model';
import { Lek, Dijagnoza, Izvestaj } from './../../../../models/pacijent';
import { Component, OnInit } from '@angular/core';
import { Pacijent, Pregled } from 'src/app/models/pacijent';
import { PacijentService } from 'src/app/services/pacijentServices/pacijent.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ZakaziPregledDialogComponent } from './zakazi-pregled-dialog/zakazi-pregled-dialog.component';

@Component({
  selector: 'app-zapocni-pregled',
  templateUrl: './zapocni-pregled.component.html',
  styleUrls: ['./zapocni-pregled.component.css']
})
export class ZapocniPregledComponent implements OnInit {
  
  lek: Lek[] = [{id: 0, sifra:"", naziv: "", opis: ""}];
  dijagnoza: Dijagnoza = {id: 0,sifra:"", naziv:"", opisDijagnoze: ""};
  sala: Sala = {id: 0, name:"", klinika:null, brojsale:"1"};
  pregled: Pregled = {id: 0, trajanje:"", sala: this.sala, cena:0, lekar: null, pacijent:null, termin: null};
  izvestaj: Izvestaj[] = [{id: 0, pregled: this.pregled, dijagnoza:this.dijagnoza, lek: this.lek, terapija:""}];
  pacijent: Pacijent ={id:0,zdravstveniKarton:null,user:{id:0,username:"",lastname:"",phoneNumber:""
                                                                                                ,city:"",country:"",email:"",password:"",adress:"",uloga:""}}
  
  lekar:number
  constructor(private servis: PacijentService,private route: ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit() {
    this.route.parent.params.subscribe(
      (params) => 
      { 
        this.lekar=params.idl; 
       });
    let idPacijenta= parseInt(this.route.snapshot.paramMap.get('id'));
    let res = this.servis.getPacijenta(idPacijenta).subscribe(
      data=>{
        this.pacijent = data;
      }
    );
  }

  public openDialog() {

    const dialogRef = this.dialog.open(ZakaziPregledDialogComponent, {
        data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
        
    });

  }

}
