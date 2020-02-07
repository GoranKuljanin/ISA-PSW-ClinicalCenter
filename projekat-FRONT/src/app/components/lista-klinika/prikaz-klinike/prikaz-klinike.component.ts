import { KlinikaService } from './../../../services/klinika.service';
import { LoginService } from './../../../services/login.service';
import { PregledService } from './../../../services/pregled.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { equal } from 'assert';
import { Klinika } from '../../../models/klinika.model';
import { Sala } from '../../../models/sala.model';
import { Termin } from '../../../models/termin.model';
import { Lekar } from '../../../models/lekar.model';
import { Cena } from '../../../models/cena.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pregled } from 'src/app/models/pacijent';
import { MatDatepickerInputEvent } from '@angular/material';

import * as moment from 'moment';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-prikaz-klinike',
  templateUrl: './prikaz-klinike.component.html',
  styleUrls: ['./prikaz-klinike.component.css']
})
export class PrikazKlinikeComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  clinic: Klinika
  displayedColumns: string[] = ['trajanje', 'lekar', 'cena', 'sala', 'zakazi']
  displayedColumns1: string[] = ['opis', 'vrednost']
  termin: Termin[] = [{ id: 1, datum: '22.2.2' }]
  cene: Cena[] = [{ id: 1, vrednost: 100, opis: 'Pregled' }]
  selectedIndexForTab = new FormControl(0);
  dataSource
  dataSource1
  preglediSource;
  pregledi: Pregled[];
  klinike: Klinika[] = [];
  klinika: Klinika;
  username: string;

  constructor(private route: ActivatedRoute, private pregledService: PregledService, private klinikaService: KlinikaService,
    private router: Router) {
  }

  ngOnInit() {
    this.klinikaService.getKlinike().subscribe(
      data => {
        this.klinike = data;
        console.log(data);
        console.log(this.klinike);
        let idSelektovanog = parseInt(this.route.snapshot.paramMap.get('id'));
        this.klinika = this.klinike.find(x => x.id == idSelektovanog);
      }

    );
    this.dataSource1 = new MatTableDataSource(this.cene);
    this.dataSource1.sort = this.sort;
  }

  zakaziPregled(id: any) {
    this.pregledService.zakaziPregledZaPacijenta(id, localStorage.getItem('logedInUser')).subscribe(
      data => {
        let i = 0;
        for (let zaBrisanje of this.pregledi) {
          if (id === zaBrisanje.id) {
            //this.preglediSource.splice(this.preglediSource.indexOf(this.pregledi[0]), 1);
            this.pregledi.splice(i, 1);
            break;
          }
          i += 1;
        }
        this.preglediSource = new MatTableDataSource(this.pregledi);

      }
    );
  }

  selectedDate(event: MatDatepickerInputEvent<Date>) {
    let dat = moment(event.value).format('DD.MM.YYYY');
    console.log(dat);
    this.pregledService.getPreglediByDatum(dat, this.klinika.id).subscribe(
      (data) => {
        this.pregledi = data;
        this.preglediSource = new MatTableDataSource(data);
      },
      (error) => {
        alert('Bad Request!! No!');
      }
    );
    this.selectedIndexForTab.setValue(1);
  }
}
