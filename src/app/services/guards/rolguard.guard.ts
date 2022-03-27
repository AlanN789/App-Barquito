import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolguardGuard implements CanActivate {

  hola!:any
  constructor(private cookie:CookieService, private router:Router, private rol:AuthService){}
  redirect(flag:boolean):any{
    if (!flag){
      this.router.navigate(['mainus'])
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.rol.checkRole().subscribe((data:any)=>{
      this.hola = data
      console.log(this.hola)
      this.redirect(this.hola);
      
    })
    return this.hola
  }
  
}
