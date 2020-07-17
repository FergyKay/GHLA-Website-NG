import { AuthenticationService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplacePasswordGuard implements CanActivate {

  constructor(private authService:AuthenticationService,private router:Router){}


  canActivate() {

    if(typeof(this.authService.getVerificationCode())!=='undefined'){
      return true;
    }else{
      this.router.navigate(['Forgotpassword'])
      return false;
    }
  }

}
