import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take } from 'rxjs';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';

@Injectable({
    providedIn: 'root'
})
export class authGuard implements CanActivate {
    user: any;
    constructor(private loginService: LoginService,
        private route: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        this.user = this.loginService.getUser();
        console.log('user ' + JSON.stringify(this.user));
        if (this.user !== null) {
            return true;
        }
        this.route.navigateByUrl('/login');
        return false;

    }

}
