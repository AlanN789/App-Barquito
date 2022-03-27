import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EquipoI } from 'src/app/models/equipo-i';
import { AuthService } from 'src/app/services/auth.service';
import { EquiposService } from 'src/app/services/cruds/equipos.service';
import { DirectortService } from 'src/app/services/cruds/directort.service';
import { EstadiosService } from 'src/app/services/cruds/estadios.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { PartidoI } from 'src/app/models/partido-i';
import { PartidosService } from 'src/app/services/cruds/partidos.service';
import { ComentarioI } from 'src/app/models/comentario-i';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {

  comentarioForm!:FormGroup
  Comentario!:ComentarioI
  comentario!: any;
  comentarios: any;
  constructor(private cookie:CookieService, private fb:FormBuilder, private partidosService:PartidosService, private authService:AuthService) {
    this.createForm();
    const contador = interval(3000)
    contador.subscribe(()=>{
      this.partidosService.getComentarios(this.cookie.get('Partido')).subscribe((data:any)=>{
        this.comentario = data[0].comentario
        console.log(this.comentario)
      })
    })
   }

  ngOnInit(): void {
    
  }

  agregar():void{
    if(this.comentarioForm.invalid){
      return Object.values(this.comentarioForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      this.setComentario();
      this.partidosService.agregarComentario(this.Comentario).subscribe((data:any)=>{
        console.log("Se agrego correctamente")
        
      })
      this.comentarioForm.reset();
      
    }
  }
  setComentario():void{
    this.Comentario = {
      id_partido: this.cookie.get('Partido'),
      comentarios: this.comentarioForm.get('comentario')?.value
    }
  }
  createForm(): void {
    this.comentarioForm = this.fb.group({
      comentario:[''],
    })
  }
  
    
    
  
}
