import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://rmichniewski.eu/api';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  postLogin(credentials: any) {
        return this.http.post<any>(`${this.baseUrl}/login`, credentials)
            .pipe(map(token => {
                // login successful if there's a jwt token in the response
                console.log(token);
                if (token.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', token.token);
                }

                return token;
            }));
    }

  postSignup(account: any) {
    return this.http.post(`${this.baseUrl}/signup`, account);
    //return this.http.post(`${this.baseUrl}/signup`, account);
  }

  logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
  }
}
