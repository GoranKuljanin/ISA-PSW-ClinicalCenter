import { ListaSalaComponent } from './components/admin-klinike/components/lista-sala/lista-sala.component';
import { AdminKlinikeComponent } from './components/admin-klinike/admin-klinike.component';
import { PregledService } from './services/pregled.service';
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
import { ListaKlinikaComponent } from './components/lista-klinika/lista-klinika.component';
import { PrikazKlinikeComponent } from './components/lista-klinika/prikaz-klinike/prikaz-klinike.component';
import { PacijentHomePageComponent } from './components/pacijent-home-page/pacijent-home-page.component';
import { PodaciPacijentaComponent } from './components/pacijent-home-page/podaci-pacijenta/podaci-pacijenta.component';
import { ZakazaniPreglediComponent } from './components/pacijent-home-page/zakazani-pregledi/zakazani-pregledi.component';
import { EditProfilDialogComponent } from './components/pacijent-home-page/podaci-pacijenta/edit-profil-dialog/edit-profil-dialog.component';
import { LekarComponent } from './components/lekar/lekar.component';
import { ZapocniPregledComponent } from './components/lekar/components/zapocni-pregled/zapocni-pregled.component';
import { RadniKalendarComponent } from './components/lekar/components/radni-kalendar/radni-kalendar.component';
import { ZakaziPregledComponent } from './components/lekar/components/zakazi-pregled/zakazi-pregled.component';
import { ZahtevZaGodisnjiComponent } from './components/lekar/components/zahtev-za-godisnji/zahtev-za-godisnji.component';
import { ProfilComponent } from './components/lekar/components/profil/profil.component';
import { PacijentiComponent } from './components/lekar/components/pacijenti/pacijenti.component';
import { PrikazPacijentaComponent } from './components/lekar/components/prikaz-pacijenta/prikaz-pacijenta.component';
import { ListaPregledaComponent } from './components/pacijent-home-page/lista-pregleda/lista-pregleda.component';
import { ZdravstveniKartonComponent } from './components/pacijent-home-page/zdravstveni-karton/zdravstveni-karton.component';
import { PregledaniPacijentComponent } from './components/lekar/components/prikaz-pacijenta/pregledani-pacijent/pregledani-pacijent.component';
import { OsnovniPodaciComponent } from './components/admin-klinike/components/osnovni-podaci/osnovni-podaci.component';
import { SlobodniTerminiPregledaComponent } from './components/admin-klinike/components/slobodni-termini-pregleda/slobodni-termini-pregleda.component';
import { LekariComponent } from './components/admin-klinike/components/lekari/lekari.component';
import { CenovnikComponent } from './components/admin-klinike/components/cenovnik/cenovnik.component';
import { TipoviPregledaComponent } from './components/admin-klinike/components/tipovi-pregleda/tipovi-pregleda.component';
import { ProfilAdminaKlinikeComponent } from './components/admin-klinike/components/profil-admina-klinike/profil-admina-klinike.component';
import { IzvestajPoslovanjaComponent } from './components/admin-klinike/components/izvestaj-poslovanja/izvestaj-poslovanja.component';
import { OsnovniPodaciDialogComponent } from './components/admin-klinike/components/osnovni-podaci/osnovni-podaci-dialog/osnovni-podaci-dialog.component';
import { ZakaziPregledDialogComponent } from './components/lekar/components/zapocni-pregled/zakazi-pregled-dialog/zakazi-pregled-dialog.component';
import { ZahteviZakazivanjaPregledaComponent } from './components/admin-klinike/components/zahtevi-zakazivanja-pregleda/zahtevi-zakazivanja-pregleda.component';
import { AkEditProfilDialogComponent } from './components/admin-klinike/components/profil-admina-klinike/dialog/profil-admina-klinike/ak-edit-profil-dialog/ak-edit-profil-dialog.component';
import { AkEditPasswordDialogComponent } from './components/admin-klinike/components/profil-admina-klinike/dialog/ak-edit-password-dialog/ak-edit-password-dialog.component';
import { LekariDialogComponent } from './components/admin-klinike/components/lekari/lekari-dialog/lekari-dialog.component';
import { SaleDialogComponent } from './components/admin-klinike/components/lista-sala/sale-dialog/sale-dialog.component';
import { TipoviPregledaDialogComponent } from './components/admin-klinike/components/tipovi-pregleda/tipovi-pregleda-dialog/tipovi-pregleda-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminKlinickogCentraHomePageComponent,
    ListaRegistrovanihZahtevaComponent,
    ListaPacijenataComponent,
    ListaKlinikaComponent,
    PrikazKlinikeComponent,
    PacijentHomePageComponent,
    PodaciPacijentaComponent,
    ZakazaniPreglediComponent,
    EditProfilDialogComponent,
    LekarComponent,
    ZapocniPregledComponent,
    RadniKalendarComponent,
    ZakaziPregledComponent,
    ZahtevZaGodisnjiComponent,
    ProfilComponent,
    PacijentiComponent,
    PrikazPacijentaComponent,
    ListaPregledaComponent,
    ZdravstveniKartonComponent,
    PregledaniPacijentComponent,
    AdminKlinikeComponent,
    ListaSalaComponent,
    OsnovniPodaciComponent,
    SlobodniTerminiPregledaComponent,
    LekariComponent,
    CenovnikComponent,
    TipoviPregledaComponent,
    ProfilAdminaKlinikeComponent,
    IzvestajPoslovanjaComponent,
    OsnovniPodaciDialogComponent,
    ZakaziPregledDialogComponent,
    ZahteviZakazivanjaPregledaComponent,
    AkEditProfilDialogComponent,
    AkEditPasswordDialogComponent,
    LekariDialogComponent,
    SaleDialogComponent,
    TipoviPregledaDialogComponent
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
  entryComponents: [TipoviPregledaDialogComponent, SaleDialogComponent, LekariDialogComponent,EditProfilDialogComponent,OsnovniPodaciDialogComponent,ZakaziPregledDialogComponent,AkEditProfilDialogComponent,AkEditPasswordDialogComponent],
  providers: [KorisnikService, RegisterServiceService, LoginService, AdminKlinickogCentraService, PacijentService, PregledService],
  bootstrap: [AppComponent]
})
export class AppModule { }
