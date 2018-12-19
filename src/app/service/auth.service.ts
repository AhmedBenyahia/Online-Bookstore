import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Personne} from '../model/Personne';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private  http: HttpClient) { }

  private urlAuth = 'http://localhost:8080/auth/login/';
  private urlPersonInfo = 'http://localhost:8080/person/info/';
   login(username: String, password:  String ) {
     return this.http.post(this.urlAuth + username + '/', password, {responseType: 'text'})
      .pipe(map((response) => {
        if (response.substr(0, 6) === 'Bearer') {
          localStorage.setItem('token', response.substr(6) );
          localStorage.setItem('username', username);
          return response;
        } else {
          console.log('something when wrong ' + response);
        }
      }));
  }

  getUserInformation(username: String) {
     return this.http.get(this.urlPersonInfo + username);
  }
  logout() {
    localStorage.removeItem('token');
  }

  isLogin() {
    return   localStorage.getItem('token') !== null;
  }


}
