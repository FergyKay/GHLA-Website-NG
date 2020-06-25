import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    UrlTree, CanActivate, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        public authService: AuthenticationService,
        public router: Router
    ) { }

    canActivate() {
        if (!this.authService.isValidToken()) {
           this.router.navigate(['signin'])
           return false
        }else{
            return true
        }
        // // return true;
        // this.router.navigate(["signin"])
        // return false
    }
}