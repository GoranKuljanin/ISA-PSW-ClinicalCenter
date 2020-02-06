import { Component, OnInit } from '@angular/core';
import { Pacijent } from 'src/app/models/pacijent';
import { ActivatedRoute } from '@angular/router';

import { PacijentService } from 'src/app/services/pacijentServices/pacijent.service';
@Component({
  selector: 'app-prikaz-pacijenta',
  templateUrl: './prikaz-pacijenta.component.html',
  styleUrls: ['./prikaz-pacijenta.component.css']
})
export class PrikazPacijentaComponent implements OnInit {
  pacijent: Pacijent
  constructor(private servis: PacijentService,private route: ActivatedRoute) { }

  ngOnInit() {
    let idPacijenta= parseInt(this.route.snapshot.paramMap.get('id'));
    let res = this.servis.getPacijenta(idPacijenta).subscribe(
      data=>{
        this.pacijent = data;
      }
    );

  }

}
