import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { CheckLoginGuard } from "./guards/check-login.guard";
import { AppComponent } from './app.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ListadoMateriaComponent } from './components/listado-materia/listado-materia.component';
import { AlumnoComponent } from './components/alumno/alumno.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'principal', component: AppComponent, canActivate: [CheckLoginGuard] },
  { path: 'administrador', component: AdministradorComponent, canActivate: [CheckLoginGuard]},
  { path: 'materias', component: ListadoMateriaComponent },
  { path: 'alumno', component: AlumnoComponent, canActivate: [CheckLoginGuard]}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
