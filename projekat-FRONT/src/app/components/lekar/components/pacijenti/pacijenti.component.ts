import { Component, OnInit } from '@angular/core';
import { Pacijent , PregledanPacijent} from 'src/app/models/pacijent';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'; 
import { PacijentService } from 'src/app/services/pacijentServices/pacijent.service';
import { Subscription } from 'rxjs';
import { sortAscendingPriority } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';

/*const pacijenti:Pacijent[]=[{zdravstveniKarton:'91389',user:{username:'Marko',lastname:'Urosevic',email:'uros@gmail.com',password:'123',adress:'Bulevar Oslobodenja',city:'Novi Sad', country:'Srbija',phoneNumber:'0646662226',uloga:'pacijent'}},
                            {zdravstveniKarton:'11189',user:{username:'Mitar',lastname:'Urosevic',email:'uros@gmail.com',password:'123',adress:'Bulevar Oslobodenja',city:'Novi Sad', country:'Srbija',phoneNumber:'0646662226',uloga:'pacijent'}},
                            {zdravstveniKarton:'43189',user:{username:'Petar',lastname:'Nikolic',email:'nikola@gmail.com',password:'123',adress:'Glavna',city:'Ruma', country:'Srbija',phoneNumber:'0643452215',uloga:'pacijent'}},
                            {zdravstveniKarton:'98024',user:{username:'Darko',lastname:'Milosevic',email:'milos@gmail.com',password:'123',adress:'Petra Preradovica',city:'Sremska Mitrovica', country:'Srbija',phoneNumber:'0656785543',uloga:'pacijent'}}]
                            */
const pregledaniPacijenti: number[]=[2,3]
@Component({
  selector: 'app-pacijenti',
  templateUrl: './pacijenti.component.html',
  styleUrls: ['./pacijenti.component.css']
})
export class PacijentiComponent implements OnInit {
  search:string
  pacijenti: Pacijent[] = []
  srtByName: MatSort
  selectedGrad:string
  selectedStatus:string
  pacijentiRES: Pacijent[]
  tableSource
  sortedData:Pacijent[]
  searchData: Pacijent[]
  lekar:number
  gradFlag:number=0
  pacijentFlag:number=0
  states: string[] = [
    'Svi', 'Ruma', 'Novi Sad', 'Sremska Mitrovica'
  ];
  statusPacijenta: string[] = [
    'Svi', 'Pregledani'
  ];
  displayedColumns: string[] = ['Ime', 'Prezime','JedinstveniBroj','Email','Kontakt','Adresa','Grad','Drzava','ZdravstveniKarton',' ']
  
  
  constructor(private servis: PacijentService,private route: ActivatedRoute) {}
  
  ngOnInit() {
    

    let res = this.servis.getPacijente().subscribe(
      data=>{
        this.pacijenti = data;
        this.tableSource = new MatTableDataSource(this.pacijenti.slice())
      this.pacijentiRES=this.pacijenti.slice()
      this.searchData=this.pacijenti.slice()
      }
      
    );
    this.route.parent.params.subscribe(
      (params) => 
      { 
        this.lekar=params.idl; 
       });
    
  }

  //Funkcije-------------------------------------
  Search(){
    if(this.search==""){
      this.sortedData=this.searchData;
      this.tableSource = new MatTableDataSource(this.sortedData);
    } else {
    this.pacijentiRES=this.searchData.filter(res=>{return res.user.lastname.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) || 
      res.user.username.toLocaleLowerCase().match(this.search.toLocaleLowerCase())});
    this.sortedData=this.pacijentiRES;
    this.tableSource = new MatTableDataSource(this.sortedData);
  }
  }

  FilterGrad() {
    if(this.selectedGrad=="Svi"){
      this.pacijentiRES=this.pacijenti.slice()
      this.sortedData=this.pacijentiRES;
      this.searchData=this.pacijentiRES;
      this.tableSource = new MatTableDataSource(this.sortedData);
      this.selectedStatus=""
      this.search=""
    } else {
    this.pacijentiRES=this.pacijenti.filter(res=>{return res.user.city.toLocaleLowerCase().match(this.selectedGrad.toLocaleLowerCase())});
    this.sortedData=this.pacijentiRES;
    this.tableSource = new MatTableDataSource(this.sortedData);
    this.searchData=this.pacijentiRES;
    this.search=""
    this.selectedStatus=""
  }
  }
  FilterPacijent() {
    if(this.selectedStatus=="Svi"){
      this.pacijentiRES=this.pacijenti.slice()
      this.sortedData=this.pacijentiRES;
      this.searchData=this.pacijentiRES;
      this.tableSource = new MatTableDataSource(this.sortedData);
      this.search=""
      this.selectedGrad=""
    } else {
    this.pacijentiRES=this.pacijenti.slice()
    this.sortedData=[]
    for (let i = 0; i < pregledaniPacijenti.length; i++) {
      let pacijentPomocni=this.pacijentiRES.find(x => x.id == pregledaniPacijenti[i]);
      this.sortedData.push(pacijentPomocni)
    }
    this.selectedGrad=""
    this.tableSource = new MatTableDataSource(this.sortedData);
    this.searchData=this.sortedData;
    this.search=""
  }
  }

  sortData(sort: MatSort) {

    const data = this.pacijentiRES.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      this.tableSource = new MatTableDataSource(this.sortedData);
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
        case 'ZdravstveniKarton': return compare(a.zdravstveniKarton.id, b.zdravstveniKarton.id, isAsc);
        default: return 0;
      }
    });
    this.tableSource = new MatTableDataSource(this.sortedData);
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

