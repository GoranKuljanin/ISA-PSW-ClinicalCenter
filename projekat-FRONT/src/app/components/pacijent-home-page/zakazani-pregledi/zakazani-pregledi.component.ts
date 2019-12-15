import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Pregled } from './../../../models/pacijent';
import { PregledService } from './../../../services/pregled.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zakazani-pregledi',
  templateUrl: './zakazani-pregledi.component.html',
  styleUrls: ['./zakazani-pregledi.component.css']
})
export class ZakazaniPreglediComponent implements OnInit {

  displayedColumns: string[] = ['datum', 'trajanje', 'lekar', 'cena', 'sala', 'odjavi']

  zakazaniPregledi: Pregled[] = [];
  //sortedData: Pregled[];
  preglediRES: Pregled[];
  search: string;
  sortedData = new MatTableDataSource<Pregled>();

  constructor(private http: PregledService) { 
    this.sortedData.data = this.zakazaniPregledi.slice();
  }

  ngOnInit() {
    this.http.zakazaniPregledi(localStorage.getItem('logedInUser')).subscribe(
      data=>{
          this.zakazaniPregledi = data;
          this.preglediRES = this.zakazaniPregledi;
          this.sortedData.data = data;
      }
    );
  }

  odjaviPregled(id: number){
    this.http.odjaviPregled(id);
    for(let zaBrisanje of this.sortedData.data){
      if(zaBrisanje.id === id){
        this.sortedData.data.splice(this.sortedData.data.indexOf(zaBrisanje), 1);
        this.sortedData._updateChangeSubscription();
        break;
      }
    }
  }

  sortData(sort: MatSort){
    const data = this.zakazaniPregledi.slice()
  if( !sort.active || sort.direction === ''){
    this.sortedData.data = data;
    return;
  }

  this.sortedData.data = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch(sort.active){
      case 'Datum': return compare(a.datum, b.datum, isAsc);
      case 'Trajanje': return compare(a.trajanje, b.trajanje, isAsc);
      case 'Lekar': return compare(a.lekar.user.username, b.lekar.user.username, isAsc);
      case 'Cena': return compare(a.cena, b.cena, isAsc);
      case 'Sala': return compare(a.sala.name, b.sala.name, isAsc);
      default: return 0;
    }
  });
  }

  Search(){
    if(this.search == ""){
      this.sortedData.data = this.zakazaniPregledi;
    }else{
      this.preglediRES = this.zakazaniPregledi.filter( res=>{ return res.datum.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) ||
       res.trajanje.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) || res.lekar.user.username.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) || 
      res.sala.name.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) || res.cena.toString().match(this.search.toLocaleLowerCase()) } );
       this.sortedData.data = this.preglediRES;
    }
  }

}
function compare(a: number | string, b: number | string, isAsc: boolean){
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
