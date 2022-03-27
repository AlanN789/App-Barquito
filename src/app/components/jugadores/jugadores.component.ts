import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Nombreequipo } from 'src/app/models/nombreequipo';
import { JugadoresService } from 'src/app/services/cruds/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  data!:any
  nombre!: Nombreequipo
  constructor(private jugadores:JugadoresService, private cookie:CookieService) { }

  ngOnInit(): void {
    this.setEquipo()
    if(this.cookie.check('Equipo')){
      this.getAlineacion()
    }
    else{
      this.getJugadores()
    }
  }
  setEquipo():void{
    this.nombre = {
      Nombre_Equipo: this.cookie.get('Equipo')
    }
  }
  getAlineacion():void{
    this.jugadores.alineacion(this.nombre).subscribe((equipo:any) => {
      this.data = equipo
      console.log(equipo);
    });
  }
  getJugadores():void{
    this.data = this.jugadores.get()
  }

  displayedColumns: string[] = ['Jugador', 'Edad', 'Nacionalidad'];


}
