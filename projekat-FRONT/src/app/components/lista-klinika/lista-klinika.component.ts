import { MatSort } from '@angular/material/sort';
import { Component, OnInit } from '@angular/core';
import {Clinic} from '../../models/clinic.model';

const clinics : Clinic[] = [
  {id:1,naziv:'Petrovic',adresa:'Petra Petrovica 25',opis:'Neki kratak opis',slobodniTermini:[{datum:'1'},{datum:'2'}],
  spisakLekara:[{id:1,name:"Petar Petrovic",opis:"Kardiolog"},{id:2,name:"Simo Simic",opis:"Pedijatar"}],spisakSala:[{id:1,name:"Sala1"},{id:2,name:"Sala2"}],cenovnik:[{vrednost:200,opis:'Pregled'},{vrednost:1200,opis:'Operacija'}]},
  {id:2,naziv:'Njegos',adresa:'Njegosa Petrovica 21',opis:'Neki kratak opis',slobodniTermini:[{datum:'3'},{datum:'4'}],
  spisakLekara:[{id:3,name:"Nikola Nikolic",opis:"Stomatolog"},{id:4,name:"Janko Jankovic",opis:"Psihijatar"}],spisakSala:[{id:3,name:"Sala3"},{id:4,name:"Sala4"}],cenovnik:[{vrednost:400,opis:'Pregled'},{vrednost:4200,opis:'Operacija'}]}
  ];

@Component({
  selector: 'app-lista-klinika',
  templateUrl: './lista-klinika.component.html',
  styleUrls: ['./lista-klinika.component.css']
})
export class ListaKlinikaComponent implements OnInit {

    // clinics : Clinic[] = [
    // {id:1,naziv:'Petrovic',adresa:'Petra Petrovica 25',opis:'Neki kratak opis',slobodniTermini:[{datum:'1'},{datum:'2'}],
    // spisakLekara:[{id:1,name:"Petar Petrovic",opis:"Kardiolog"},{id:2,name:"Simo Simic",opis:"Pedijatar"}],spisakSala:[{id:1,name:"Sala1"},{id:2,name:"Sala2"}],cenovnik:[{vrednost:200,opis:'Pregled'},{vrednost:1200,opis:'Operacija'}]},
    // {id:2,naziv:'Njegos',adresa:'Njegosa Petrovica 21',opis:'Neki kratak opis',slobodniTermini:[{datum:'3'},{datum:'4'}],
    // spisakLekara:[{id:3,name:"Nikola Nikolic",opis:"Stomatolog"},{id:4,name:"Janko Jankovic",opis:"Psihijatar"}],spisakSala:[{id:3,name:"Sala3"},{id:4,name:"Sala4"}],cenovnik:[{vrednost:400,opis:'Pregled'},{vrednost:4200,opis:'Operacija'}]}
    // ];


    collumns: string[] = ['Ime', 'Adresa'];
    search: string;
    clinicsRES: Clinic[];
    sortedData: Clinic[];

  constructor() {
    this.sortedData = clinics.slice();
   }

  ngOnInit() {
    this.clinicsRES = clinics;
  }

  sortData(sort: MatSort){
    const data = clinics.slice()
    if( !sort.active || sort.direction === ''){
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch(sort.active){
        case 'Ime': return compare(a.naziv, b.naziv, isAsc);
        case 'Adresa': return compare(a.adresa, b.adresa, isAsc);
        default: return 0;
      }
    });

  }
  Search(){
    if(this.search == ""){
      this.sortedData = clinics;
    }else{
      this.clinicsRES = clinics.filter( res=>{ return res.naziv.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) ||
       res.adresa.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) } );
       this.sortedData = this.clinicsRES;
    }
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean){
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
