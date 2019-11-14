import { AuthenticationServiceService } from './../../services/authentication-service.service';
import { HttpClient } from '@angular/common/http';
import { LoginService, User } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic-admin-home-page',
  templateUrl: './clinic-admin-home-page.component.html',
  styleUrls: ['./clinic-admin-home-page.component.css']
})
export class ClinicAdminHomePageComponent implements OnInit {

  model: User[] = [];

  constructor(private service: LoginService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<User[]>('http://localhost:8088/getAllData').subscribe(
      data => {
        //console.log(data)
        this.model = data;
      }
    )
  }

}
