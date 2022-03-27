import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipoligai } from 'src/app/models/equipoligai';
import { EquiposService } from 'src/app/services/cruds/equipos.service';
import { LigasService } from 'src/app/services/cruds/ligas.service';

@Component({
  selector: 'app-equipo-liga',
  templateUrl: './equipo-liga.component.html',
  styleUrls: ['./equipo-liga.component.css']
})
export class EquipoLigaComponent implements OnInit {
  data: any;
  ligas:any;
  equipoligaForm!: FormGroup;
  EquipoLiga!:Equipoligai;

  constructor(private router:Router, private fb:FormBuilder, private ligasService:LigasService, private equiposService:EquiposService) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.getEquipos();
    this.getLigas();
  }
  agregar():void{
    if(this.equipoligaForm.invalid){
      return Object.values(this.equipoligaForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      this.setEquipo();
      this.equiposService.agregarliga(this.EquipoLiga).subscribe((data:any)=>{
        console.log("Se agrego correctamente")
      })
      this.router.navigate(['/equipos'])
    }
  }
  getEquipos(): void{
    this.equiposService.getall().subscribe((data:any)=>{
      this.data = data
    })
    console.log(this.data)
  }
  getLigas(): void{
    this.ligasService.getall().subscribe((data:any)=>{
      this.ligas = data
    })
    console.log(this.data)
  }
  displatedColumnsn: string[] = ['id','Liga'];
  displayedColumns: string[] = ['id','Equipo'];
  
  
  setEquipo():void{
    this.EquipoLiga = {
      Equipo: this.equipoligaForm.get('equipo')?.value,
      Liga: this.equipoligaForm.get('liga')?.value
    }
  }
  createForm():void{
    this.equipoligaForm = this.fb.group({
      equipo:[0],
      liga:[0]
    })
  }

}
