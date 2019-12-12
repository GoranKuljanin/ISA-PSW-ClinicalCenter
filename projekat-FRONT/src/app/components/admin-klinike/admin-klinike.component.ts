import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-klinike',
  templateUrl: './admin-klinike.component.html',
  styleUrls: ['./admin-klinike.component.css']
})
export class AdminKlinikeComponent implements OnInit {
  idAdminaKlinike:number
  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.parent.params.subscribe(
      (params) => 
      { 
        this.idAdminaKlinike=params.ida
       });
  }

}
