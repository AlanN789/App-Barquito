import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EquipoI } from 'src/app/models/equipo-i';
import { Equipoligai } from 'src/app/models/equipoligai';
import { environment } from 'src/environments/environment.prod';
import { tap } from 'rxjs/operators';
import { PartidoI } from 'src/app/models/partido-i';
import { ComentarioI } from 'src/app/models/comentario-i';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  apiURL = environment.apiURL

  refresh$ = new Subject<void>();

  constructor(private http:HttpClient) { }
  
  get():Observable<any>{
    return this.http.get(`${this.apiURL}/verPartido`);
  }
  agregar(partido:PartidoI):Observable<any>{
    return this.http.post(`${this.apiURL}/guardarPartido/:request`, partido)
    .pipe(
      tap(()=>{
        this.refresh$.next();
      })
    );
  }

  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiURL}/deletePartido/${id}`)
    .pipe(
      tap(()=>{
        this.refresh$.next();
      })
    );
  }
  update(partido:PartidoI):Observable<any>{
    return this.http.put(`${this.apiURL}/updateEquipos`, partido)
    .pipe(
      tap(()=>{
        this.refresh$.next();
      })
    );
  }

  agregarMongo(comentario:ComentarioI):Observable<any>{
    return this.http.post(`${this.apiURL}/arrancarPartido/:request`, comentario)
  }

  agregarComentario(comentario:ComentarioI):Observable<any>{
    return this.http.put(`${this.apiURL}/modificarPartido/:request`, comentario)
    .pipe(
      tap(()=>{
        this.refresh$.next();
      })
    );
  }
  
  getComentarios(id):Observable<any>{
    return this.http.get(`${this.apiURL}/getComentarios/${id}`)
  }

}
