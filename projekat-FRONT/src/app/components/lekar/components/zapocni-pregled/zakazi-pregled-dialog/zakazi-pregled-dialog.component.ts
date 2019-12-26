import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { ZahtevZakazivanjaPregleda } from 'src/app/models/zahtevZakazivanjaPregleda.model';
import { ZahteviZakazivanjaService } from 'src/app/services/zahtevi-zakazivanja.service';
import { Lekar } from 'src/app/models/lekar.model';
import { Pacijent } from 'src/app/models/pacijent';

@Component({
  selector: 'app-zakazi-pregled-dialog',
  templateUrl: './zakazi-pregled-dialog.component.html',
  styleUrls: ['./zakazi-pregled-dialog.component.css']
})
export class ZakaziPregledDialogComponent implements OnInit {
  //zahtev : ZahtevZakazivanjaPregleda = {id:0,lekar:{id:0,specijalizacija:'',slika:'',user:null,klinika:null,opis:''},pacijent:{id:0,user:null,zdravstveniKarton:null},datum:'',vreme:''};
  lekarid:number;
  datum:string;
  vreme:string;
  lekar:Lekar ;
  pacijent:Pacijent = {id:0,user:null,zdravstveniKarton:null};
  pacijentid:number;
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ZakaziPregledDialogComponent>,private servis: ZahteviZakazivanjaService) 
    { 
      this.lekarid=1;
      this.pacijentid=1;
      let res = this.servis.getLekar(1).subscribe(
        data=>{
          this.lekar = data;
          console.log(this.lekar)
          this.servis.getPacijenta(1).subscribe(
            data=>{
              this.pacijent = data;
            });
        });
    }

  ngOnInit() {
    
  }

  public submit(): void {
    
    let zahtev = new ZahtevZakazivanjaPregleda();
    zahtev.lekar=this.lekar;
    zahtev.pacijent = this.pacijent;
    zahtev.vreme=this.vreme;
    zahtev.datum=this.datum;
    console.log("Submit:");
    console.log(zahtev);
    this.servis.create(zahtev);
    this.snackBar.open('Zahtev je poslat administratoru!', 'U redu', { duration: 1000 });
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste!', 'U redu', { duration: 1000 });
  }

}
