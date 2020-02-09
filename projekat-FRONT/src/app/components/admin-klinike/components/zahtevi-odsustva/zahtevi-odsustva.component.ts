import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material';
import { ZahteviZakazivanjaService } from 'src/app/services/zahtevi-zakazivanja.service';
import { AdminKlinikeService } from 'src/app/services/admin-klinike.service';
import { AdminKlinike } from 'src/app/models/adminKlinike.model';
import { Klinika } from 'src/app/models/klinika.model';
import { ZahtevZaZakazivanje } from 'src/app/models/zahtevZakazivanjaPregleda.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zahtevi-odsustva',
  templateUrl: './zahtevi-odsustva.component.html',
  styleUrls: ['./zahtevi-odsustva.component.css']
})
export class ZahteviOdsustvaComponent implements OnInit {
  admin:AdminKlinike = new AdminKlinike();
  klinika:Klinika = new Klinika();
  zahtevi: ZahtevZaZakazivanje[];
  constructor(
    public snackBar: MatSnackBar, private zahteviZakazivanjaService: ZahteviZakazivanjaService,private adminKlinikeService: AdminKlinikeService, private rout: Router) {
    this.dobaviUlogovanogLekara();
   }

  ngOnInit() {
    
  }
  public dobaviUlogovanogLekara() {
    this.adminKlinikeService.getAdminaIzBaze().subscribe(
      data => {
        if (data != null) {
          this.admin= data;
          this.klinika = data.klinika;
          this.zahteviZakazivanjaService.getAll(this.klinika.id).subscribe(
            data => {
              this.zahtevi = data;
            }
          );
        } else {
          alert('Niste uneli odgovarajuce parametre!');
        }
      }
    );
  }
  private prihvati (zahtev:ZahtevZaZakazivanje){
    this.zahteviZakazivanjaService.create(zahtev);
    this.snackBar.open('Prihvacen zahtev!', 'U redu', { duration: 2000 });
    window.location.href = this.rout.url;
  }

  private odbij (zahtev:number){
    this.zahteviZakazivanjaService.remove(zahtev);
    this.snackBar.open('Zahtev odbijen!', 'U redu', { duration: 2000 });
    window.location.href = this.rout.url;
  }

}
