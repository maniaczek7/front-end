import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Account } from '../account';
import { LoginService } from '../login.service';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  account: Account = new Account();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  trySignup() {
        console.log(this.account);
        this.loginService.postSignup(this.account)
            .pipe(first())
            .subscribe(
                data => {
                    //this.router.navigate(['/ui/customer'], {relativeTo: this.route});
                    //localStorage.setItem('currentUser', data.token);
                    window.location.pathname='/ui/login';
                },
                error => {
                   // this.error = error;
                });
  }

}
