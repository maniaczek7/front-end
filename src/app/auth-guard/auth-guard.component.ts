import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-auth-guard',
  templateUrl: './auth-guard.component.html',
  styleUrls: ['./auth-guard.component.css']
})

@Injectable({ providedIn: 'root' })
export class AuthGuardComponent implements CanActivate {

constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            if(window.location.pathname.includes('/ui/login')){
              window.location.pathname = '/ui/customer'
              return true;
            }
            console.log('return TRUE');
            return true;
        }


        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        console.log('return FALSE')
        return false;
    }
}
