import { _fixedSizeVirtualScrollStrategyFactory } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DtsComponent } from './components/dts/dts.component';
import { EditEquipoComponent } from './components/edit-equipo/edit-equipo.component';
import { EquipoLigaComponent } from './components/equipo-liga/equipo-liga.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { EstadiosComponent } from './components/estadios/estadios.component';
import { FederacionesComponent } from './components/federaciones/federaciones.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { LigasComponent } from './components/ligas/ligas.component';
import { MainComponent } from './components/main/main.component';
import { MainusuarioComponent } from './components/mainusuario/mainusuario.component';
import { PartidoComponent } from './components/partido/partido.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { RolguardGuard } from './services/guards/rolguard.guard';
import { VigilantGuardService } from './services/guards/vigilant-guard.service';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'mainadmin', canActivate:[VigilantGuardService], component: MainComponent},
  {path:'equipos', canActivate:[VigilantGuardService], component: EquiposComponent},
  {path:'editequipo', canActivate:[VigilantGuardService], component: EditEquipoComponent},
  {path:'jugadores', canActivate:[VigilantGuardService], component: JugadoresComponent},
  {path:'equipoliga',canActivate:[VigilantGuardService], component: EquipoLigaComponent},
  {path:'mainus', canActivate:[VigilantGuardService], component:MainusuarioComponent},
  {path:'federaciones', canActivate:[VigilantGuardService], component: FederacionesComponent},
  {path:'ligas', canActivate:[VigilantGuardService], component: LigasComponent},
  {path:'dt', canActivate:[VigilantGuardService],component: DtsComponent},
  {path:'estadios', canActivate:[VigilantGuardService], component: EstadiosComponent},
  {path:'partidos', canActivate:[VigilantGuardService], component: PartidosComponent},
  {path:'partido', canActivate:[VigilantGuardService], component: PartidoComponent},
  {path:'**', redirectTo: '/login'},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
