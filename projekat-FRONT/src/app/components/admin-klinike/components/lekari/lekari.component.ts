import { Component, OnInit } from '@angular/core';
import { Lekar } from 'src/app/models/lekar.model';
import { ActivatedRoute } from '@angular/router';
import { LekarService } from 'src/app/services/lekar.service';
import { LekariDialogComponent } from './lekari-dialog/lekari-dialog.component';
import { MatDialog } from '@angular/material';
import { Klinika } from 'src/app/models/klinika.model';
import { AdminKlinikeService } from 'src/app/services/admin-klinike.service';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-lekari',
  templateUrl: './lekari.component.html',
  styleUrls: ['./lekari.component.css']
})
export class LekariComponent implements OnInit {
  idAdmina: number;
  klinika: Klinika;
  search:string;
  user: User = new User();
  lekariFullList: Lekar[] = [{ radnovreme: "", klinika: { id: 0, naziv: "", adresa: "", opis: "" }, user: { id: 0, username: "", lastname: "", adress: "", city: "", country: "", phoneNumber: "", uloga: "", password: "", email: "" }, opis: "", slika: "", specijalizacija: "" }]
  lekariSearchedList:Lekar[] = [{ radnovreme: "", klinika: { id: 0, naziv: "", adresa: "", opis: "" }, user: { id: 0, username: "", lastname: "", adress: "", city: "", country: "", phoneNumber: "", uloga: "", password: "", email: "" }, opis: "", slika: "", specijalizacija: "" }]
  
  constructor(private route: ActivatedRoute, private lekarService: LekarService, public dialog: MatDialog,
    private adminKlinikeService: AdminKlinikeService, public userService: RegisterServiceService) {
    this.lekarService.getLekari().subscribe(
      data => {
        this.lekariFullList = data;
        this.lekariSearchedList = data;
        this.route.parent.params.subscribe(
          (params) => {
            this.idAdmina = params.ida;
            this.adminKlinikeService.getKlinikaByAdminId(this.idAdmina).subscribe(
              data => {
                this.klinika = data;
              }
            );
          });
      }
    );
  }

  ngOnInit() {
  }

  Search() {
    if (this.search == "") {
      this.lekariSearchedList = this.lekariFullList;
    } else {
      this.lekariSearchedList = this.lekariSearchedList.filter(res => {
        return (res.user.username + ' ' + res.user.lastname).toLocaleLowerCase().match(this.search.toLocaleLowerCase())
      });
    }
  }

  private openAddDialog() {
    const flag: number = 0;
    const dialogRef = this.dialog.open(LekariDialogComponent, {
      data: { flag: flag, klinika: this.klinika }
    });
    dialogRef.afterClosed().subscribe(result => {

    }
    )
  };
  
  private openDeleteDialog(lekar: Lekar) {
    const flag: number = 1;
    const dialogRef = this.dialog.open(LekariDialogComponent, {
      data: { flag: flag, lekar: lekar }
    });
    dialogRef.afterClosed().subscribe(result => {

    }
    )
  };
}
