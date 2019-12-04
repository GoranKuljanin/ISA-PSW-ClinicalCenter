import { Component, OnInit } from '@angular/core';
import {Klinika} from '../../models/klinika.model';
import { KlinikaService } from '../../services/klinika.service';


@Component({
  selector: 'app-lista-klinika',
  templateUrl: './lista-klinika.component.html',
  styleUrls: ['./lista-klinika.component.css']
})
export class ListaKlinikaComponent implements OnInit {

    /*clinics : Clinic[] = [
    {id:1,naziv:'Petrovic',adresa:'Petra Petrovica 25',opis:'Neki kratak opis',slobodniTermini:[{datum:'1'},{datum:'2'}],
    spisakLekara:[{id:1,name:"Petar Petrovic",opis:"Kardiolog"},{id:2,name:"Simo Simic",opis:"Pedijatar"}],spisakSala:[{id:1,name:"Sala1"},{id:2,name:"Sala2"}],cenovnik:[{vrednost:200,opis:'Pregled'},{vrednost:1200,opis:'Operacija'}]},
    {id:2,naziv:'Njegos',adresa:'Njegosa Petrovica 21',opis:'Neki kratak opis',slobodniTermini:[{datum:'3'},{datum:'4'}],
    spisakLekara:[{id:3,name:"Nikola Nikolic",opis:"Stomatolog"},{id:4,name:"Janko Jankovic",opis:"Psihijatar"}],spisakSala:[{id:3,name:"Sala3"},{id:4,name:"Sala4"}],cenovnik:[{vrednost:400,opis:'Pregled'},{vrednost:4200,opis:'Operacija'}]}
    ]*/
    clinics : Klinika[];
  constructor(private servis: KlinikaService) { }

  ngOnInit() {
    let res = this.servis.getKlinike().subscribe(
      data=>{
        this.clinics = data;
      }
    );
  }

}
