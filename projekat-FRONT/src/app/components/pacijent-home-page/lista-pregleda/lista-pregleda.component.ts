import { Pregled } from './../../../models/pacijent';
import { PacijentService } from './../../../services/pacijentServices/pacijent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pregleda',
  templateUrl: './lista-pregleda.component.html',
  styleUrls: ['./lista-pregleda.component.css']
})
export class ListaPregledaComponent implements OnInit {

  pregledi: Pregled[] = [];

  constructor(private service: PacijentService) { }

  ngOnInit() {
    this.service.getPreglede().subscribe(
      data=>{
          this.pregledi = data;
      }
    );
  }

}
