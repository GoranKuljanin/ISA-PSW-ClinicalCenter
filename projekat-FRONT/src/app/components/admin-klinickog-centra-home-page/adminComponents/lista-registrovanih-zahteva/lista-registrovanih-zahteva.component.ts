import { HttpClient, HttpParams } from '@angular/common/http';
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

  constructor(private service: AdminKlinickogCentraService, private http: HttpClient) { }

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
          //console.log(pacijent);
          for(let zaBrisanje of this.model){
              if(models.email === zaBrisanje.email){
                this.model.splice(this.model.indexOf(zaBrisanje), 1);
                break;
              }
          }
        }
    );
  }

  public onOdbij(models: User){
    // for (let user of this.model) {
    //   if (models.email === user.email) {
    //       this.model.splice(this.model.indexOf(user), 1);
    //       break;
    //   }
        // this.service.deleteRequest(models.email).subscribe(
        //   data=>{
        //     alert('Uspesno obrisan zahtev!');
        //   }
        // );
        let params = new HttpParams().set("email", models.email)
        this.http.delete('http://localhost:8088/obrisiZahtev', {params: params}).subscribe(
          data=>{
            alert('Zahtev uspesno obrisan!');
          }
        );
        for (let user of this.model) {                  //OVAJ DIO JE SAMO ZA BRISANJE IZGLEDA (u suprotnom bi trebalo ponovo 
            if (models.email === user.email) {          //dobavljati iz baze)
                this.model.splice(this.model.indexOf(user), 1);
                break;
            }
          }
  }
}
