import { ListaPregledaComponent } from './components/pacijent-home-page/lista-pregleda/lista-pregleda.component';
import { ZdravstveniKartonComponent } from './components/pacijent-home-page/zdravstveni-karton/zdravstveni-karton.component';
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
  { path: 'pacijentHomePage', component: PacijentHomePageComponent ,
        children: [
          { path: 'podaciPacijenta', component: PodaciPacijentaComponent },
          { path: 'zakazaniPregledi', component: ZakazaniPreglediComponent },
          { path: 'zdravstveniKarton', component: ZdravstveniKartonComponent },
          { path: 'istorijaPregleda', component: ListaPregledaComponent },
          { path: 'clinics', component: ListaKlinikaComponent },
          { path: 'clinic/:id', component: PrikazKlinikeComponent }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
