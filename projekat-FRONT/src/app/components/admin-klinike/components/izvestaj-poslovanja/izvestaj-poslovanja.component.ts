import { Component, OnInit } from '@angular/core';
import { AdminKlinike } from 'src/app/models/adminKlinike.model';
import { Klinika } from 'src/app/models/klinika.model';
import { Lekar } from 'src/app/models/lekar.model';
import { AdminKlinikeService } from 'src/app/services/admin-klinike.service';
import { PregledService } from 'src/app/services/pregled.service';
import { ActivatedRoute } from '@angular/router';
import { LekarService } from 'src/app/services/lekar.service';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Pregled } from 'src/app/models/pacijent';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-izvestaj-poslovanja',
  templateUrl: './izvestaj-poslovanja.component.html',
  styleUrls: ['./izvestaj-poslovanja.component.css']
})
export class IzvestajPoslovanjaComponent implements OnInit {
  datum: Date = new Date();
  admin: AdminKlinike = new AdminKlinike();
  klinika: Klinika = new Klinika();
  lekari: Lekar[];
  p:Pregled= new Pregled();
  pregledi: Pregled[]=[this.p];
  dnevni: number[];
  zarada: number = 0;
  public barChartOptions: ChartOptions = {
    responsive: true,

    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[]= ['3.2', '4.2', '5.2', '6.2', '7.2', '8.2', '9.2'];;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  public barChartData: ChartDataSets []= [
    { data: [3, 0,3, 0, 3, 0, 3], label: 'Broj Pregleda' }
];
  constructor(private servis: AdminKlinikeService, private route: ActivatedRoute, private lekarService: LekarService, private pregledService: PregledService) {
    this.dobaviUlogovanogAdminaKLinike();
    
  }

  ngOnInit() {
  }
  public dobaviUlogovanogAdminaKLinike() {
    this.servis.getAdminaIzBaze().subscribe(
      data => {
        this.admin = data;
        this.klinika = this.admin.klinika;
        this.lekarService.getLekariByIdKlinike(this.klinika.id).subscribe(data => {
          this.lekari = data;
        })
        this.pregledService.getBrojPregledaPoDanu(this.klinika.id).subscribe(data => {
          this.dnevni = data;
          console.log(data)
          this.barChartData = [
            { data: data, label: 'Broj Pregleda' }
          ];
        })
        this.pregledService.getZarada(this.klinika.id).subscribe(data => {
          this.zarada = data;
          console.log(data)
          
        })
      }
    );
  }
}
