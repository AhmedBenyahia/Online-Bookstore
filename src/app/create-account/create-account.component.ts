import { Component, OnInit } from '@angular/core';
import {PersonneService} from '../service/personne.service';
import {Personne} from '../model/Personne';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private personService: PersonneService) { }

  ngOnInit() {
  }


  submitNewUser(value: string, value2: string,
                value3: any, value4: string,
                value5: string, value6: string,
                value7: string, value8: string) {
    this.personService.newUser(
      new Personne(value, value2, value3, value4,
        value5, value6, value7, value8));
  }
}
