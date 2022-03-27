import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule}  from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { EquiposComponent } from './components/equipos/equipos.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { MainusuarioComponent } from './components/mainusuario/mainusuario.component';
import { EditEquipoComponent } from './components/edit-equipo/edit-equipo.component';
import { EquipoLigaComponent } from './components/equipo-liga/equipo-liga.component';
import { FederacionesComponent } from './components/federaciones/federaciones.component';
import { LigasComponent } from './components/ligas/ligas.component';
import { DtsComponent } from './components/dts/dts.component';
import { EstadiosComponent } from './components/estadios/estadios.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { PartidoComponent } from './components/partido/partido.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    EquiposComponent,
    JugadoresComponent,
    MainusuarioComponent,
    EditEquipoComponent,
    EquipoLigaComponent,
    FederacionesComponent,
    LigasComponent,
    DtsComponent,
    EstadiosComponent,
    PartidosComponent,
    PartidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
