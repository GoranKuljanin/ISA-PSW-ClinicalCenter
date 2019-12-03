import { PacijentService } from './../../../services/pacijentServices/pacijent.service';
import { User } from './../../../models/user.model';
import { Pacijent, ZdravstveniKarton } from './../../../models/pacijent';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zdravstveni-karton',
  templateUrl: './zdravstveni-karton.component.html',
  styleUrls: ['./zdravstveni-karton.component.css']
})
export class ZdravstveniKartonComponent implements OnInit {

  pacijent: User;
  kartoni: ZdravstveniKarton[] = [];

  constructor(private service: PacijentService) { }

  ngOnInit() {
    //this.pacijent = this.service.user
    this.service.getZdravstveneKartone().subscribe(
      data=>{
          this.kartoni = data;
      }
    );
  }

}
