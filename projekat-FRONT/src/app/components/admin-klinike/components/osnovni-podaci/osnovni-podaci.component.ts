import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminKlinikeService } from 'src/app/services/admin-klinike.service';
import { Klinika } from 'src/app/models/klinika.model';
import { MatDialog } from '@angular/material';
import { OsnovniPodaciDialogComponent } from './osnovni-podaci-dialog/osnovni-podaci-dialog.component';

@Component({
  selector: 'app-osnovni-podaci',
  templateUrl: './osnovni-podaci.component.html',
  styleUrls: ['./osnovni-podaci.component.css']
})
export class OsnovniPodaciComponent implements OnInit {
  klinika:Klinika  = {id:0,naziv:"",opis:"",adresa:""}
  idAdmina:number
  constructor(private route: ActivatedRoute, private adminKlinikeService: AdminKlinikeService,public dialog: MatDialog) {
    this.route.parent.params.subscribe(
      (params) => 
      { 
        this.idAdmina=params.ida; 
       });
   }

  ngOnInit() {
    this.adminKlinikeService.getKlinikaByAdminId(this.idAdmina).subscribe(
      data=>{
        this.klinika = data;
      }
    );
  }

  public openDialog(id:number, naziv: string, adresa: string, opis: string ) {

    const dialogRef = this.dialog.open(OsnovniPodaciDialogComponent, {
        data: {id:id, naziv: naziv, adresa: adresa,  opis: opis}
    });
    dialogRef.afterClosed().subscribe(result => {
        
    });

}
}
