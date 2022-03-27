import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { ComentarioI } from 'src/app/models/comentario-i';
import { PartidoI } from 'src/app/models/partido-i';
import { AuthService } from 'src/app/services/auth.service';
import { EquiposService } from 'src/app/services/cruds/equipos.service';
import { EstadiosService } from 'src/app/services/cruds/estadios.service';
import { PartidosService } from 'src/app/services/cruds/partidos.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  partidoForm!: FormGroup;
  visible:boolean = false;
  visiblebtn:boolean = false;
  equipos:any;
  estadios:any;
  partidos:any;
  Partido!:PartidoI;
  Comentario!:ComentarioI;
  suscription!:Subscription;
  data:any;
  locales: any;
  visitantes:any;
  constructor(private partidosService:PartidosService, private fb:FormBuilder, private estadiosService:EstadiosService, private authService:AuthService, private equiposService:EquiposService, private router:Router, private cookieService:CookieService) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.checkUser();
    this.getEstadios();
    this.getEquipos();
    this.getPartidos();
    this.suscription = this.partidosService.refresh$.subscribe(()=>{
      this.getPartidos();
    })
  }
  getEquipos():void{
    this.equiposService.getall().subscribe((data:any)=>{
      this.data = data;
      this.locales = data;
      this.visitantes = data;
    })
  }

  getVisitante():void{
    
  }

  getPartidos():void{
    this.partidosService.get().subscribe((data:any)=>{
      this.partidos = data;
    })
  }

  displayedColumns: string[] = ['id','Local','Visitante','Estadio', 'Actions'];
  
  eliminar(id:Number):void {
    this.partidosService.delete(id).subscribe((data:any)=>{
      console.log(data)
    })
    this.equiposService.get()
  }

  edit(id):void{
    this.cookieService.set('Edit', id);
    this.router.navigate(['/editpartido']);
  }

  mostrarAgregar():void{
    this.visible = !this.visible
  }
  checkUser(): void {
    this.authService.checkRole().subscribe((data:any)=>{
      this.visiblebtn = data
    })
  }
  getEstadios(): void{
    this.estadiosService.get().subscribe((data:any)=>{
      this.estadios = data
    })
    console.log(this.estadios)
  }
  agregar():void{
    if(this.partidoForm.invalid){
      return Object.values(this.partidoForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      this.setPartido();
      this.partidosService.agregar(this.Partido).subscribe((data:any)=>{
        console.log("Se agrego correctamente")
        
      })
      this.partidoForm.reset();
      
    }
  }
  setPartido():void{
    this.Partido = {
      local: this.partidoForm.get('local')?.value,
      visitante: this.partidoForm.get('visitante')?.value,
      Estadio: this.partidoForm.get('estadio')?.value,
    }
  }
  setComentario():void{
    this.Comentario = {
      id_partido: this.cookieService.get('Partido'),
      comentarios: "0' Arranca el partido"
    }
  }
  createForm(): void {
    this.partidoForm = this.fb.group({
      local:[0],
      visitante:[0],
      estadio:[0],
    })
  }
  disabledvis(option:Number): boolean{
    return option == this.partidoForm.get('local')?.value
  }
  disabledloc(option:Number):boolean{
    return option == this.partidoForm.get('visitante')?.value
  }
  verNarracion(id):void{
    this.cookieService.set('Partido', id);
    this.setComentario();
    this.partidosService.agregarMongo(this.Comentario).subscribe((data:any)=>{
      console.log(data)
    })
    this.router.navigate(['partido']);
  }
  verNarracionCliente(id):void{
    this.cookieService.set('Partido', id);
    this.setComentario();
    this.router.navigate(['partido']);
  }

}
