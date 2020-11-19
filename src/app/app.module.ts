import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ListadoUsuarioComponent } from './components/listado-usuario/listado-usuario.component';
import { ListadoMateriaComponent } from './components/listado-materia/listado-materia.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { EstadoAprobacionPipe } from './estado-aprobacion.pipe';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdministradorComponent,
    ListadoUsuarioComponent,
    ListadoMateriaComponent,
    AlumnoComponent,
    EstadoAprobacionPipe,
    ProfesorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
