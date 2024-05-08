import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AddTrekkGuard implements CanActivate,CanLoad {
  
  constructor(private loginService : LoginService, private router : Router){
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean |any{
      console.log(this.loginService.isLoggedIn)
      if(this.loginService.isLoggedIn == false)
        this.router.navigate(["/login"])
      else
        return this.loginService.isLoggedIn
  }
  
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
