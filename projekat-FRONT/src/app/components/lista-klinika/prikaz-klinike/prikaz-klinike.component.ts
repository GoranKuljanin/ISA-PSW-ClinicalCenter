import { KlinikaService } from './../../../services/klinika.service';
import { LoginService } from './../../../services/login.service';
import { PregledService } from './../../../services/pregled.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { equal } from 'assert';
import {Klinika} from '../../../models/klinika.model';
import {Sala} from '../../../models/sala.model';
import {Termin} from '../../../models/termin.model';
import {Lekar} from '../../../models/lekar.model';
import {Cena} from '../../../models/cena.model';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'; 
import { Pregled } from 'src/app/models/pacijent';

  const clinics : Klinika[] = [
  {id:1,naziv:'Naziv1',adresa:'Petra Petrovica 25',opis:'Neki kratak opis'},
  {id:2,naziv:'Njegos',adresa:'Njegosa Petrovica 21',opis:'Neki kratak opis'}
  ]
  
@Component({
  selector: 'app-prikaz-klinike',
  templateUrl: './prikaz-klinike.component.html',
  styleUrls: ['./prikaz-klinike.component.css']
})
export class PrikazKlinikeComponent implements OnInit {
    
    //clinics :Klinika[]
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    clinic:Klinika
    displayedColumns: string[] = ['datum', 'trajanje', 'lekar', 'cena', 'sala', 'zakazi']
    displayedColumns1: string[] = ['opis', 'vrednost']
    //sale: Sala[]=[{id:1, name:'Sala', klinika:1}]
    //lekari:Lekar[]=[{id:1,ime:'Petar',prezime:'Milosevic',email:'lekar@petrovic.com',lozinka:'123',specijalizacija:'Hirurg',opis:'Kratak opis o lekaru Petru.',slika:'data:image/jpeg;base64,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'}]
    termin: Termin[]=[{id:1,datum:'22.2.2'}]
    cene: Cena[]=[{id:1,vrednost:100,opis:'Pregled'}]
    
    dataSource
    dataSource1
    preglediSource;

    pregledi: Pregled[];
    klinike: Klinika[] = [];
    klinika: Klinika;
    email:string;

    constructor(private route: ActivatedRoute, private pregledService: PregledService, private klinikaService: KlinikaService) {
      this.pregledService.getAllPregledi().subscribe(
        data=>{
          this.pregledi = data;
          this.preglediSource = new MatTableDataSource(data);
        }
      );
    }
    
  ngOnInit() {
    
    // this.pregledService.getAllPregledi().subscribe(
    //   data=>{
    //     this.pregledi = data;
    //     this.preglediSource = new MatTableDataSource(data);
    //   }
    // );

    this.klinikaService.getKlinike().subscribe(
      data=>{
        this.klinike = data;
      }
    );

    let idSelektovanog= parseInt(this.route.snapshot.paramMap.get('id'));
    this.clinic=clinics.find(x => x.id == idSelektovanog);
    //this.dataSource = new MatTableDataSource(this.sale);
    //this.dataSource.sort = this.sort;
    this.dataSource1 = new MatTableDataSource(this.cene);
    this.dataSource1.sort = this.sort;
  }
  
  zakaziPregled(id: any){
    this.pregledService.zakaziPregledZaPacijenta(id, localStorage.getItem('logedInUser')).subscribe(
      data=>{
        let i = 0;
        for(let zaBrisanje of this.pregledi){
          if(id === zaBrisanje.id){
            //this.preglediSource.splice(this.preglediSource.indexOf(this.pregledi[0]), 1);
            this.pregledi.splice(i, 1);
            break;
          }
          i += 1;
        }
        this.preglediSource = new MatTableDataSource(this.pregledi);
      }
    );
  }
}
