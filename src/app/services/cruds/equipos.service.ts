import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EquipoI } from 'src/app/models/equipo-i';
import { Equipoligai } from 'src/app/models/equipoligai';
import { environment } from 'src/environments/environment.prod';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  apiURL = environment.apiURL;
  
  refresh$ = new Subject<void>();

  constructor(private http:HttpClient) { }
  
  getall():Observable<any>{
    return this.http.get(`${this.apiURL}/getEquipo`);
  }
  get():Observable<any>{
    return this.http.get(`${this.apiURL}/getEquipos`);
  }
  update(equipo:EquipoI):Observable<any>{
    return this.http.put(`${this.apiURL}/updateEquipos`, equipo)
    .pipe(
      tap(()=>{
        this.refresh$.next();
      })
    );
  }
  agregar(equipo:EquipoI):Observable<any>{
    return this.http.post(`${this.apiURL}/agregarEquipo/:request`, equipo)
    .pipe(
      tap(()=>{
        this.refresh$.next();
      })
    );
  }
  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiURL}/deleteEquipo/${id}`)
    .pipe(
      tap(()=>{
        this.refresh$.next();
      })
    );
  }
  agregarliga(equipoliga:Equipoligai):Observable<any>{
    return this.http.post(`${this.apiURL}/storeEquipoLiga/:request`, equipoliga);
  }
}
