import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient) { }

  private urlAuth = 'http://localhost:8080/auth/login/';
   login(username: String, password:  String ) {
     return this.http.get(this.urlAuth + username + '/' + password, {responseType: 'text'})
      .subscribe((response) => {
        console.log(response.substr(6));
        if (response.substr(0, 6) === 'Bearer') {
          localStorage.setItem('token', response.substr(6) );
          console.log(response.substr(6));
        }
      });
  }

  logout() {
    localStorage.removeItem('token');
  }
  isLogin() {
    // const token = localStorage.getItem('token');
    // this.http.post('http://localhost:8080/auth/renew/token', token,
    //   {responseType: 'text'})
    //   .subscribe((response) => {
    //     if (response.substr(0, 5) === 'Bearer') {
    //       localStorage.setItem('token', response.substr(6) );
    //       console.log(response.substr(6));
    //     } else { localStorage.removeItem('token'); }
    //   });
    return   localStorage.getItem('token') !== null;
  }
}
