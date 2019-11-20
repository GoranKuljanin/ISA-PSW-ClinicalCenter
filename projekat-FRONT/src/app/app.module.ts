import { PacijentService } from './services/pacijentServices/pacijent.service';
import { AdminKlinickogCentraService } from './services/adminKCServices/admin-klinickog-centra.service';
import { LoginService } from './services/login.service';
import { RegisterServiceService } from './services/register-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KorisnikService } from './services/korisnik.service';
import { AdminKlinickogCentraHomePageComponent } from './components/admin-klinickog-centra-home-page/admin-klinickog-centra-home-page.component';
import { ListaRegistrovanihZahtevaComponent } from './components/admin-klinickog-centra-home-page/adminComponents/lista-registrovanih-zahteva/lista-registrovanih-zahteva.component';
import { ListaPacijenataComponent } from './components/admin-klinickog-centra-home-page/adminComponents/lista-pacijenata/lista-pacijenata.component';
import { PacijentHomePageComponent } from './components/pacijent-home-page/pacijent-home-page.component';
import { PodaciPacijentaComponent } from './components/pacijent-home-page/podaci-pacijenta/podaci-pacijenta.component';
import { ZakazaniPreglediComponent } from './components/pacijent-home-page/zakazani-pregledi/zakazani-pregledi.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminKlinickogCentraHomePageComponent,
    ListaRegistrovanihZahtevaComponent,
    ListaPacijenataComponent,
    PacijentHomePageComponent,
    PodaciPacijentaComponent,
    ZakazaniPreglediComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule, 
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [KorisnikService, RegisterServiceService, LoginService, AdminKlinickogCentraService, PacijentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
