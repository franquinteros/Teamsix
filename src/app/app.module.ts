import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { CarruselComponent } from './shared/carrusel/carrusel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardGenComponent } from './dashboard/dashboard-gen/dashboard-gen.component';
import { PacienteComponent } from './dashboard/dashboardAdmin/paciente/paciente.component';
import { ZonaComponent } from './dashboard/dashboardAdmin/zona/zona.component';
import { RepporteComponent } from './dashboard/dashboardAdmin/reporte/repporte.component';
import { LoginComponent } from './login/login.component';
import { RegistrarmeComponent } from './login/registrarme/registrarme.component';
import { RecuperarComponent } from './login/recuperar/recuperar.component';
import { AgregarPacienteComponent } from './dashboard/dashboardAdmin/paciente/agregar-paciente/agregar-paciente.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CarruselComponent,
    DashboardComponent,
    DashboardGenComponent,
    PacienteComponent,
    ZonaComponent,
    RepporteComponent,
    LoginComponent,
    RegistrarmeComponent,
    RecuperarComponent,
    AgregarPacienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
