import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminKlinikeService } from 'src/app/services/admin-klinike.service';
import { AdminKlinikeComponent } from '../../admin-klinike.component';
import { AdminKlinike } from 'src/app/models/adminKlinike.model';
import { Cena } from 'src/app/models/cena.model';
import { Klinika } from 'src/app/models/klinika.model';

@Component({
  selector: 'app-cenovnik',
  templateUrl: './cenovnik.component.html',
  styleUrls: ['./cenovnik.component.css']
})
export class CenovnikComponent implements OnInit {
  idAdmina:number
  admin:AdminKlinike
  cene:Cena[]
  klinika:Klinika={id:0,naziv:"",opis:"",adresa:""}
  constructor(private route: ActivatedRoute,private adminKlinikeService: AdminKlinikeService) { 
    this.route.parent.params.subscribe(
      (params)=>{
        this.idAdmina=params.ida;
      });
      this.adminKlinikeService.getAdmin(this.idAdmina).subscribe(data=>{
        this.admin=data;
        this.klinika=this.admin.klinika;
        console.log(this.klinika)
        console.log(this.admin);
        this.adminKlinikeService.getSveCene(this.klinika.id).subscribe(data=>{
          this.cene=data;
        });
      });
      
  }

  ngOnInit() {
    
  }

}
