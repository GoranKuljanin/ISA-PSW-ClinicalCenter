import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lekar } from 'src/app/models/lekar.model';
import { Pregled } from './../../../models/pacijent';
import { PacijentService } from './../../../services/pacijentServices/pacijent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pregleda',
  templateUrl: './lista-pregleda.component.html',
  styleUrls: ['./lista-pregleda.component.css']
})
export class ListaPregledaComponent implements OnInit {

  displayedColumns: string[] = ['firstname', 'lastname', 'specijalizacija', 'prosecnaocena'];
  search: string;
  sortedData = new MatTableDataSource<Lekar>();

  lekariOcene: Lekar[] = [];

  constructor(private http: HttpClient) {
    this.sortedData.data = this.lekariOcene.slice();
   }

  ngOnInit() {
    this.getLekari().subscribe(
      data => {
        this.lekariOcene = data;
        this.sortedData.data = data;
        console.log(this.lekariOcene);
      }
    );    
  }
  getLekari(): Observable<Lekar[]>{
    return this.http.get<Lekar[]>('http://localhost:8088/pacijent/oceniLekare');
  }

  ratingComponentClick(clickObj: any):void{
      const lekar = this.lekariOcene.find(((i: any) => i.id === clickObj.lekarId));
      if( lekar) {
        this.postZahtev(lekar.id, clickObj.ocena).subscribe(
          data => {
            console.log('Uspesno savucana nova ocena!');
          }
        );
      }
  }

  postZahtev(idLekara: number, novaOcena: number){
     let header = new HttpHeaders();
     header.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:8088/pacijent/unesiOcenuLekara/' + idLekara,novaOcena, {headers: header} );
  }

  sortData(sort: MatSort){
    const data = this.lekariOcene.slice();
    if( !sort.active || sort.direction === ''){
      this.sortedData.data = data;
      return;
    }
    this.sortedData.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch(sort.active){
        //case 'Datum': return compare(a.datum, b.datum, isAsc);
        case 'Ime': return compare(a.user.firstname, b.user.firstname, isAsc);
        case 'Prezime': return compare(a.user.lastname, b.user.firstname, isAsc);
        case 'Specijalizacija': return compare(a.specijalizacija, b.specijalizacija, isAsc);
        case 'Prosecna Ocena': return compare(a.prosecnaocena, b.prosecnaocena, isAsc);
        default: return 0;
      }
    });
    }

    Search(){
      if(this.search == ""){
        this.sortedData.data = this.lekariOcene;
      }else{
          this.sortedData.data = this.lekariOcene.filter(
            res => {
              return res.user.firstname.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) ||
                res.user.lastname.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) ||
                res.specijalizacija.toLocaleLowerCase().match(this.search.toLocaleLowerCase()) ||
                res.prosecnaocena.toString().match(this.search.toLocaleLowerCase());
            }
          );
      }
    }
  
}

function compare(a: number | string, b: number | string, isAsc: boolean){
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
