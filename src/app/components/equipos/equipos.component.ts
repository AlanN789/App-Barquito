import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EquipoI } from 'src/app/models/equipo-i';
import { AuthService } from 'src/app/services/auth.service';
import { EquiposService } from 'src/app/services/cruds/equipos.service';
import { DirectortService } from 'src/app/services/cruds/directort.service';
import { EstadiosService } from 'src/app/services/cruds/estadios.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equiposForm!: FormGroup;
  visible:boolean = false;
  visiblebtn:boolean = false;
  dts:any;
  estadios:any;
  Equipo!:EquipoI;
  suscription!:Subscription;
  data:any;
  constructor(private fb:FormBuilder, private estadiosService:EstadiosService, private dtService:DirectortService, private authService:AuthService, private equiposService:EquiposService, private router:Router, private cookieService:CookieService) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.checkUser();
    this.getDT();
    this.getEstadios();
    this.getEquipos();
    this.suscription = this.equiposService.refresh$.subscribe(()=>{
      this.getEquipos();
    })
  }
  getEquipos():void{
    this.equiposService.get().subscribe((data:any)=>{
      this.data = data;
    })
  }
  displayedColumns: string[] = ['id','Equipo','Liga','Estadio','Ciudad','Director_Tecnico','Actions'];
  alineacion(name): void {
    this.router.navigate(['/jugadores']);
    this.cookieService.set('Equipo', name);
  }

  eliminar(id:Number):void {
    this.equiposService.delete(id).subscribe((data:any)=>{
      console.log(data)
    })
    this.equiposService.get()
  }

  edit(id):void{
    this.cookieService.set('Edit', id);
    this.router.navigate(['/editequipo']);
  }

  mostrarAgregar():void{
    this.visible = !this.visible
  }
  checkUser(): void {
    this.authService.checkRole().subscribe((data:any)=>{
      this.visiblebtn = data
    })
  }
  getDT(): void{
    this.dtService.get().subscribe((data:any)=>{
      this.dts = data
    })
    console.log(this.dts)
  }
  getEstadios(): void{
    this.estadiosService.get().subscribe((data:any)=>{
      this.estadios = data
    })
    console.log(this.estadios)
  }
  agregar():void{
    if(this.equiposForm.invalid){
      return Object.values(this.equiposForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      this.setEquipo();
      this.equiposService.agregar(this.Equipo).subscribe((data:any)=>{
        console.log("Se agrego correctamente")
      })
      this.router.navigate(['/equipoliga']);
    }
  }
  setEquipo():void{
    this.Equipo = {
      Nombre: this.equiposForm.get('nombre')?.value,
      Presidente: this.equiposForm.get('presidente')?.value,
      DT: this.equiposForm.get('dt')?.value,
      Estadio: this.equiposForm.get('estadio')?.value
    }
  }
  createForm(): void {
    this.equiposForm = this.fb.group({
      nombre:[''],
      presidente:[''],
      dt:[0],
      estadio:[0]
    })
  }

}
