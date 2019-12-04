import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { equal } from 'assert';
import {Clinic} from '../../../models/clinic.model';
import {Sala} from '../../../models/Sala.model';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'; 

const clinics : Clinic[] = [
  {id:1,naziv:'Petrovic',adresa:'Petra Petrovica 25',opis:'Neki kratak opis',slobodniTermini:[{datum:'1'},{datum:'2'}],
  spisakLekara:[{id:1,name:"Petar Petrovic",opis:"Kardiolog"},{id:2,name:"Simo Simic",opis:"Pedijatar"}],spisakSala:[{id:1,name:"Sala"},{id:2,name:"Sala"}],cenovnik:[{vrednost:200,opis:'Pregled'},{vrednost:1200,opis:'Operacija'}]},
  {id:2,naziv:'Njegos',adresa:'Njegosa Petrovica 21',opis:'Neki kratak opis',slobodniTermini:[{datum:'3'},{datum:'4'}],
  spisakLekara:[{id:3,name:"Nikola Nikolic",opis:"Stomatolog"},{id:4,name:"Janko Jankovic",opis:"Psihijatar"}],spisakSala:[{id:3,name:"Sala"},{id:4,name:"Sala"}],cenovnik:[{vrednost:400,opis:'Pregled'},{vrednost:4200,opis:'Operacija'}]}
  ]

@Component({
  selector: 'app-prikaz-klinike',
  templateUrl: './prikaz-klinike.component.html',
  styleUrls: ['./prikaz-klinike.component.css']
})
export class PrikazKlinikeComponent implements OnInit {
    
  
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    clinic:Clinic
    displayedColumns: string[] = ['name', 'id']
    displayedColumns1: string[] = ['opis', 'vrednost']
    dataSource
    dataSource1

    constructor(private route: ActivatedRoute) { }
    
  ngOnInit() {
    //Podaci
    //type Clinics = Array<Clinic>;

   /* const clinics : Clinics = [
    {id:1,naziv:'Petrovic',adresa:'Petra Petrovica 25',opis:'Neki kratak opis',slobodniTermini:[{datum:'1'},{datum:'2'}],
    spisakLekara:[{id:1,name:"Lekar1"},{id:2,name:"Lekar2"}],spisakSala:[{id:1,name:"Sala1"},{id:2,name:"Sala2"}],cenovnik:[{vrednost:200,opis:'Pregled'},{vrednost:1200,opis:'Operacija'}]},
    {id:2,naziv:'Njegos',adresa:'Njegosa Petrovica 21',opis:'Neki kratak opis',slobodniTermini:[{datum:'3'},{datum:'4'}],
    spisakLekara:[{id:3,name:"Lekar3"},{id:4,name:"Lekar4"}],spisakSala:[{id:3,name:"Sala3"},{id:4,name:"Sala4"}],cenovnik:[{vrednost:400,opis:'Pregled'},{vrednost:4200,opis:'Operacija'}]}
    ];*/

    let idSelektovanog= parseInt(this.route.snapshot.paramMap.get('id'));
    this.clinic=clinics.find(x => x.id == idSelektovanog);
    this.dataSource = new MatTableDataSource(this.clinic.spisakSala);
    this.dataSource.sort = this.sort;
    this.dataSource1 = new MatTableDataSource(this.clinic.cenovnik);
    this.dataSource1.sort = this.sort;
  }
  
  
}
