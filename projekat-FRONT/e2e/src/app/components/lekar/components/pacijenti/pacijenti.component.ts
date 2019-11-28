import { Component, OnInit } from '@angular/core';
import { Pacijent } from 'src/app/models/pacijent';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'; 

const pacijenti:Pacijent[]=[{zdravstveniKarton:'91389',user:{username:'Marko',lastname:'Urosevic',email:'uros@gmail.com',password:'123',adress:'Bulevar Oslobodenja',city:'Novi Sad', country:'Srbija',phoneNumber:'0646662226',uloga:'pacijent'}},
                            {zdravstveniKarton:'43189',user:{username:'Petar',lastname:'Nikolic',email:'nikola@gmail.com',password:'123',adress:'Glavna',city:'Ruma', country:'Srbija',phoneNumber:'0643452215',uloga:'pacijent'}},
                            {zdravstveniKarton:'98024',user:{username:'Darko',lastname:'Milosevic',email:'milos@gmail.com',password:'123',adress:'Petra Preradovica',city:'Sremska Mitrovica', country:'Srbija',phoneNumber:'0656785543',uloga:'pacijent'}}]

@Component({
  selector: 'app-pacijenti',
  templateUrl: './pacijenti.component.html',
  styleUrls: ['./pacijenti.component.css']
})
export class PacijentiComponent implements OnInit {
  
  displayedColumns: string[] = ['Ime', 'Prezime','Email','Kontakt','Adresa','Grad','Drzava','ZdravstveniKarton']
  search:string
  pacijentiRES: Pacijent[]
  sortedData: Pacijent[]
  constructor() {this.sortedData = pacijenti.slice(); }
  sortData(sort: MatSort) {
    const data = pacijenti.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Ime': return compare(a.user.username, b.user.username, isAsc);
        case 'Prezime': return compare(a.user.lastname, b.user.lastname, isAsc);
        case 'Email': return compare(a.user.email, b.user.email, isAsc);
        case 'Kontakt': return compare(a.user.phoneNumber, b.user.phoneNumber, isAsc);
        case 'Adresa': return compare(a.user.adress, b.user.adress, isAsc);
        case 'Grad': return compare(a.user.city, b.user.city, isAsc);
        case 'Drzava': return compare(a.user.country, b.user.country, isAsc);
        case 'ZdravstveniKarton': return compare(a.zdravstveniKarton, b.zdravstveniKarton, isAsc);
        default: return 0;
      }
    });
  }
  ngOnInit() {
    this.pacijentiRES=pacijenti
  }
  Search(){
    if(this.search==""){
      this.sortedData=pacijenti;
    } else {
    this.pacijentiRES=pacijenti.filter(res=>{return res.user.lastname.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) || 
      res.user.username.toLocaleLowerCase().match(this.search.toLocaleLowerCase())});
    this.sortedData=this.pacijentiRES;
  }
  }
}

 


function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

