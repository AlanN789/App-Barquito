import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LigasService {

  apiURL = environment.apiURL;

  constructor(private http:HttpClient) { }

  getall():Observable<any>{
    return this.http.get(`${this.apiURL}/getLigas`)
  }

}
