import { ListaSalaComponent } from './components/admin-klinike/components/lista-sala/lista-sala.component';
import { AdminKlinikeComponent } from './components/admin-klinike/admin-klinike.component';
import { ListaRegistrovanihZahtevaComponent } from './components/admin-klinickog-centra-home-page/adminComponents/lista-registrovanih-zahteva/lista-registrovanih-zahteva.component';
import { AdminKlinickogCentraHomePageComponent } from './components/admin-klinickog-centra-home-page/admin-klinickog-centra-home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListaPacijenataComponent } from './components/admin-klinickog-centra-home-page/adminComponents/lista-pacijenata/lista-pacijenata.component';
import { ListaKlinikaComponent } from './components/lista-klinika/lista-klinika.component';
import { PrikazKlinikeComponent } from './components/lista-klinika/prikaz-klinike/prikaz-klinike.component';
import { ZakazaniPreglediComponent } from './components/pacijent-home-page/zakazani-pregledi/zakazani-pregledi.component';
import { PodaciPacijentaComponent } from './components/pacijent-home-page/podaci-pacijenta/podaci-pacijenta.component';
import { PacijentHomePageComponent } from './components/pacijent-home-page/pacijent-home-page.component';
import { LekarComponent } from './components/lekar/lekar.component';
import { ZapocniPregledComponent } from './components/lekar/components/zapocni-pregled/zapocni-pregled.component';
import { RadniKalendarComponent } from './components/lekar/components/radni-kalendar/radni-kalendar.component';
import { ZakaziPregledComponent } from './components/lekar/components/zakazi-pregled/zakazi-pregled.component';
import { ZahtevZaGodisnjiComponent } from './components/lekar/components/zahtev-za-godisnji/zahtev-za-godisnji.component';
import { ProfilComponent } from './components/lekar/components/profil/profil.component';
import { PacijentiComponent } from './components/lekar/components/pacijenti/pacijenti.component';
import { PrikazPacijentaComponent } from './components/lekar/components/prikaz-pacijenta/prikaz-pacijenta.component';
import { ZdravstveniKartonComponent } from './components/pacijent-home-page/zdravstveni-karton/zdravstveni-karton.component';
import { ListaPregledaComponent } from './components/pacijent-home-page/lista-pregleda/lista-pregleda.component';
import { OsnovniPodaciComponent } from './components/admin-klinike/components/osnovni-podaci/osnovni-podaci.component';
import { SlobodniTerminiPregledaComponent } from './components/admin-klinike/components/slobodni-termini-pregleda/slobodni-termini-pregleda.component';
import { CenovnikComponent } from './components/admin-klinike/components/cenovnik/cenovnik.component';
import { TipoviPregledaComponent } from './components/admin-klinike/components/tipovi-pregleda/tipovi-pregleda.component';
import { IzvestajPoslovanjaComponent } from './components/admin-klinike/components/izvestaj-poslovanja/izvestaj-poslovanja.component';
import { LekariComponent } from './components/admin-klinike/components/lekari/lekari.component';
import { ProfilAdminaKlinikeComponent } from './components/admin-klinike/components/profil-admina-klinike/profil-admina-klinike.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adminKcHomePage', component: AdminKlinickogCentraHomePageComponent,
        children: [
         { path: 'listaRegistrovanihZahteva', component: ListaRegistrovanihZahtevaComponent },
         { path: 'listaPacijenata', component: ListaPacijenataComponent }
        ]
  },
  { path: 'adminKHomePage/:ida', component: AdminKlinikeComponent,
        children: [
         { path: 'sale', component: ListaSalaComponent },
         { path: 'lekari', component: LekariComponent },
         { path: 'osnovniPodaciKlinike', component: OsnovniPodaciComponent },
         { path: 'slobodniTerminiPregleda', component: SlobodniTerminiPregledaComponent },
         { path: 'cenovnik', component: CenovnikComponent },
         { path: 'tipoviPregleda', component: TipoviPregledaComponent },
         { path: 'profil', component: ProfilAdminaKlinikeComponent },
         { path: 'izvestajPoslovanja', component: IzvestajPoslovanjaComponent }
        ]
  },
  { path: 'pacijentHomePage', component: PacijentHomePageComponent ,
        children: [
          { path: 'podaciPacijenta', component: PodaciPacijentaComponent },
          { path: 'zakazaniPregledi', component: ZakazaniPreglediComponent },
          { path: 'zdravstveniKarton', component: ZdravstveniKartonComponent },
          { path: 'istorijaPregleda', component: ListaPregledaComponent },
          { path: 'clinics', component: ListaKlinikaComponent },
          { path: 'clinic/:id', component: PrikazKlinikeComponent }
        ]
  },
  { path: 'lekarHomePage/:idl', component: LekarComponent ,
  children: [
    { path: 'pacijenti', component: PacijentiComponent },
    { path: 'zapocniPregled/:id', component: ZapocniPregledComponent },
    { path: 'radniKalendar', component: RadniKalendarComponent },
    { path: 'zakaziPregled', component: ZakaziPregledComponent },
    { path: 'noviZahtev', component: ZahtevZaGodisnjiComponent },
    { path: 'profil', component: ProfilComponent },
    { path: 'pacijent/:id', component: PrikazPacijentaComponent}
  ] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
