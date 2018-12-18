import { Component, OnInit } from '@angular/core';
import {PersonneService} from '../service/personne.service';
import {Personne} from '../model/Personne';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  person: Personne = {
      id: undefined,
      name: '',
      surname: '',
      birthdate: undefined,
      cin: '',
      password: '',
      village: '',
      username: '',
      role: '',
      address: '',
      postcode: '',
      email: ''
  };

  constructor(private personService: PersonneService) { }

  ngOnInit() {
  }


  submitNewUser() {
    this.personService.newUser(this.person);
  }
}
