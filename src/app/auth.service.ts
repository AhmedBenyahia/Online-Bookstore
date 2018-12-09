import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient) { }

  private urlAuth = 'http://localhost:8080/auth/login/';
  login(username: String, password:  String ) {
     this.http.get(this.urlAuth + username + '/' + password, {responseType: 'text'})
      .subscribe((response) => {
        if (response) {
          localStorage.setItem('token', response.substr(6) );
          console.log(response.substr(6));
        }
      });
  }
}
