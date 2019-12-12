import { Component, OnInit } from '@angular/core';
import { Pacijent } from 'src/app/models/pacijent';
import { PacijentService } from 'src/app/services/pacijentServices/pacijent.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zapocni-pregled',
  templateUrl: './zapocni-pregled.component.html',
  styleUrls: ['./zapocni-pregled.component.css']
})
export class ZapocniPregledComponent implements OnInit {
  pacijent: Pacijent
  lekar:number
  constructor(private servis: PacijentService,private route: ActivatedRoute) { }

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

}
