import { Component, OnInit } from '@angular/core';
import { ZahtevZakazivanjaPregleda } from '../../../../models/zahtevZakazivanjaPregleda.model';
import { ZahteviZakazivanjaService } from 'src/app/services/zahtevi-zakazivanja.service';

@Component({
  selector: 'app-zahtevi-zakazivanja-pregleda',
  templateUrl: './zahtevi-zakazivanja-pregleda.component.html',
  styleUrls: ['./zahtevi-zakazivanja-pregleda.component.css']
})
export class ZahteviZakazivanjaPregledaComponent implements OnInit {
  listSource : ZahtevZakazivanjaPregleda[]
  constructor(private servis: ZahteviZakazivanjaService) { }

  ngOnInit() {
    this.servis.getAll().subscribe(
      data=>{
        this.listSource = data;
      }
    );
  }

}
