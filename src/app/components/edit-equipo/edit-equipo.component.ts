import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { errorMessage, successDialog, timeMessage } from 'src/app/assets/alerts';
import { EquipoI } from 'src/app/models/equipo-i';
import { AuthService } from 'src/app/services/auth.service';
import { EquiposService } from 'src/app/services/cruds/equipos.service';

@Component({
  selector: 'app-edit-equipo',
  templateUrl: './edit-equipo.component.html',
  styleUrls: ['./edit-equipo.component.css']
})
export class EditEquipoComponent implements OnInit {

  editEquipoForm!: FormGroup;
  Equipo!:EquipoI;
  constructor(private fb:FormBuilder, private equipoService:EquiposService, private router:Router) {
    this.createForm();
   }

  ngOnInit(): void {
  }
  editEquipo():void{
    if(this.editEquipoForm.invalid){
      return Object.values(this.editEquipoForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      this.setEquipo();
      this.equipoService.update(this.Equipo).subscribe((data:any)=>{
        timeMessage('Updating...', 1500).then(()=>{
          successDialog('Update completado');
        })
      }, error => {
        errorMessage('Ha ocurrido un error')
      });
    }
  }
  createForm(): void{
    this.editEquipoForm = this.fb.group({
      Nombre:['',[Validators.required]],
      Presidente:['',[Validators.required]],
      Estadio:['',[Validators.required]],
      Director_Tecnico:['',[Validators.required]],
    })
  }
  get equipoValidate(){
    return(
      this.editEquipoForm.get('Equipo')?.invalid && this.editEquipoForm.get('Equipo')?.touched
    ); 
  }
  get ligaValidate(){
    return(
      this.editEquipoForm.get('Liga')?.invalid && this.editEquipoForm.get('Liga')?.touched
    );
  }
  get estadioValidate(){
    return(
      this.editEquipoForm.get('Estadio')?.invalid && this.editEquipoForm.get('Estadio')?.touched
    );
  }
  get ciudadValidate(){
    return(
      this.editEquipoForm.get('Ciudad')?.invalid && this.editEquipoForm.get('Ciudad')?.touched
    );
  }
  get dtValidate(){
    return(
      this.editEquipoForm.get('Director_Tecnico')?.invalid && this.editEquipoForm.get('Director_Tecnico')?.touched
    );
  }
  setEquipo():void{
    this.Equipo = {
      Nombre: this.editEquipoForm.get('equipo')?.value,
      Presidente: this.editEquipoForm.get('liga')?.value,
      Estadio: this.editEquipoForm.get('estadio')?.value,
      DT: this.editEquipoForm.get('director_tecnico')?.value
    }
  }
}
