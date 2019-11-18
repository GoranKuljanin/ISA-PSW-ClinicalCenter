import { User } from './../../../../models/user.model';
import { AdminKlinickogCentraService } from './../../../../services/adminKCServices/admin-klinickog-centra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-registrovanih-zahteva',
  templateUrl: './lista-registrovanih-zahteva.component.html',
  styleUrls: ['./lista-registrovanih-zahteva.component.css']
})
export class ListaRegistrovanihZahtevaComponent implements OnInit {

  model: User[] = [];

  constructor(private service: AdminKlinickogCentraService) { }

  ngOnInit() {
    let res = this.service.getListaRegistrovanih().subscribe(
      data=>{
        this.model = data;
      }
    );
  }

  public onPrihvati(models: User){
    let res = this.service.dodajPacijentaUBazu(models).subscribe(
        pacijent=>{
          console.log(pacijent);
        }
    );
  }

  public onOdbij(models: User){
    for (let user of this.model) {
      if (models.email === user.email) {
          this.model.splice(this.model.indexOf(user), 1);
          break;
      }
  }
  }
}
