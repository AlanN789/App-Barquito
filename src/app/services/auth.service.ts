import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserI } from '../models/user-i';
import { UserLog } from '../models/user-log';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = environment.apiURL;
  constructor( private http:HttpClient ) {}

  register(user:UserI):Observable<any>{
    return this.http.post('${this.apiURL}register', user);
  }
  login(user:UserLog):Observable<any>{
    return this.http.post('${this.apiURL}login', user);
  }
}
