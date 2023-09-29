import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardGenComponent } from './dashboard/dashboard-gen/dashboard-gen.component';
import { RegistrarmeComponent } from './login/registrarme/registrarme.component';
import { RecuperarComponent } from './login/recuperar/recuperar.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"dashboardAdmin",component:DashboardComponent},
  {path:"dashboard-gen",component:DashboardGenComponent},
  {path:"registro",component:RegistrarmeComponent},
  {path:"recuperar",component:RecuperarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
