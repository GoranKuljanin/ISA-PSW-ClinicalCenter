import { AuthenticationServiceService } from './services/authentication-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KorisnikService } from './services/korisnik.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { ClinicAdminHomePageComponent } from './components/clinic-admin-home-page/clinic-admin-home-page.component';
import { ZdravstveniKartonComponent } from './components/zdravstveni-karton/zdravstveni-karton.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ClinicAdminHomePageComponent,
    ZdravstveniKartonComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [KorisnikService, LoginService, RegisterService, AuthenticationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
