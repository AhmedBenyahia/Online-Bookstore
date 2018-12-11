import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Personne} from '../model/Personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private urlPerson = ' http://localhost:8080/person/add';
  constructor(private http: HttpClient) { }

  newUser(personne: Personne) {
    console.log('adding person' + personne);
    personne.role = 'user';
    personne.ville = 'test';
    this.http.post(this.urlPerson, personne as Personne).subscribe(
      response => {
        console.log(response.toString());
      }
    );
  }
}
