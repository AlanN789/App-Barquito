import { _fixedSizeVirtualScrollStrategyFactory } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HistorialComponent } from './components/historial/historial.component';
import { MainComponent } from './components/main/main.component';
import { PartidaComponent } from './components/partida/partida.component';
import { PartidanewComponent } from './components/partidanew/partidanew.component';
import { PartidasComponent } from './components/partidas/partidas.component';
import { VigilantGuardService } from './services/guards/vigilant-guard.service';

const routes: Routes = [
  {path:'login',/*canActivate:[LogginGuard]*/ component: LoginComponent},
  {path:'register',/*canActivate:[VigilantGuardService],*/ component: RegisterComponent},
  {path:'main', canActivate:[VigilantGuardService], component: MainComponent},
  {path:'partidas', canActivate: [VigilantGuardService], component: PartidasComponent},
  {path:'partida', canActivate: [VigilantGuardService], component: PartidanewComponent},
  {path:'historial', canActivate:[VigilantGuardService], component: HistorialComponent},
  {path:'**', redirectTo: '/login'},
  {path:'', redirectTo:'/login', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
