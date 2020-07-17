import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/auth.service';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class SigninGuard implements CanActivate {

  constructor(
    public authService: AuthenticationService,
    public router: Router
) { }

canActivate() {
    if (this.authService.isValidToken()) {
       this.router.navigate(['home'])
       return false
    }else{
        return true
    }
    // // return true;
    // this.router.navigate(["signin"])
    // return false
}
  
  
}
