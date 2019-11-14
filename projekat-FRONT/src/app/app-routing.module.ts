import { LogoutComponent } from './components/logout/logout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClinicAdminHomePageComponent } from './components/clinic-admin-home-page/clinic-admin-home-page.component';
import { ZdravstveniKartonComponent } from './components/zdravstveni-karton/zdravstveni-karton.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adminClinicCentre', component: ClinicAdminHomePageComponent,
        // children: [
        //   { path: 'zdravstveniKarton', component: ZdravstveniKartonComponent},
        // ]  
  },
  { path: 'zdravstveniKarton', component: ZdravstveniKartonComponent},
  { path: 'logout', component: LogoutComponent},
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
