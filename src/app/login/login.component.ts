import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  output: JSON;
  obj: any;

  login: Login = new Login();
  token: string;
  returnUrl: string;
  loading = false;
  submitted = false;

  constructor(private loginService: LoginService,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.loginService.logout();
//    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  tryLogin() {
        this.submitted = true;


        this.loading = true;

        this.loginService.postLogin(this.login)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(this.returnUrl)
                    //this.router.navigate(['/ui/customer'], {relativeTo: this.route});
                    //localStorage.setItem('currentUser', data.token);
                    window.location.pathname='/ui/customer';
                },
                error => {
                   // this.error = error;
                   this.loading = false;
                });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
