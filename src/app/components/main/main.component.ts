import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { errorMessage, successDialog, timeMessage } from 'src/app/assets/alerts';
import { CookieService } from 'ngx-cookie-service';
import { EquiposService } from 'src/app/services/cruds/equipos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService:AuthService, private equiposService:EquiposService, private router:Router, private cookieService:CookieService) { }

  ngOnInit(): void {
    this.equipoGuardado()
  }

  checkUser(): void {
    this.authService.checkRole().subscribe((data:any)=>{
      console.log(data)
    })
  }

  getEquipos(): void {
    this.equiposService.get().subscribe((data:any)=>{
      console.log(data)
    })
  }
  equipoGuardado(): void{
    console.log(this.cookieService.get('Equipo'))
  }

}
