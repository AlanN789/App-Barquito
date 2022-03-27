import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Nombreequipo } from 'src/app/models/nombreequipo';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  apiURL = environment.apiURL;
  
  constructor(private http:HttpClient, private cookie:CookieService ) { }
  
  alineacion(Nombre:Nombreequipo):Observable<any>{
    return this.http.post(`${this.apiURL}/getJugadoresEQ/:request`, Nombre);
  }
  get():Observable<any>{
    return this.http.get(`${this.apiURL}/getJugadores`)
  }
}
