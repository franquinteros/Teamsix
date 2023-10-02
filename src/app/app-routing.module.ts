import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardGenComponent } from './dashboard/dashboard-gen/dashboard-gen.component';
import { PacienteComponent } from './dashboard/dashboardAdmin/paciente/paciente.component';
import { ZonaComponent } from './dashboard/dashboardAdmin/zona/zona.component';
import { RepporteComponent } from './dashboard/dashboardAdmin/reporte/repporte.component';
import { RegistrarmeComponent } from './login/registrarme/registrarme.component';
import { RecuperarComponent } from './login/recuperar/recuperar.component';
import { AgregarPacienteComponent } from './dashboard/dashboardAdmin/paciente/agregar-paciente/agregar-paciente.component';
import { EscuelaComponent } from './pages/escuela/escuela.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"dashboardAdmin",component:DashboardComponent},
  {path:"dashboard-gen",component:DashboardGenComponent},
  {path:"paciente",component:PacienteComponent},
  {path:"zona",component:ZonaComponent},
  {path:"reporte",component:RepporteComponent},
  {path:"registro",component:RegistrarmeComponent},
  {path:"recuperar",component:RecuperarComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"agregarPaciente",component:AgregarPacienteComponent},
  {path:"escuela",component:EscuelaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
