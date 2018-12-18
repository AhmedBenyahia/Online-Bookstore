import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient) { }
  private urlAuth = 'http://localhost:8080/auth/login/';
   login(username: String, password:  String ) {
     return this.http.post(this.urlAuth + username + '/', password, {responseType: 'text'})
      .pipe(map((response) => {
        if (response.substr(0, 6) === 'Bearer') {
          localStorage.setItem('token', response.substr(6) );
          return response;
        } else {
          console.log('something when wrong ' + response);
        }
      }));
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
