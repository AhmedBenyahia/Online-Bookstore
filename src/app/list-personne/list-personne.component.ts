import { Component, OnInit } from '@angular/core';
import {Personne} from './carte-visite/carte-visite.component';

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css']
})
export class ListPersonneComponent implements OnInit {
  ahmedInfo = new Personne('ahmed Benyahia', 'CEO', 'I love Coding !',
    'To Be Or Not To Be!', 'Dev application for business', 'C++ java',
    15, 14, 17, 'https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-1/p160x160/23131994_1662646550475476_5020245036772567044_n.jpg?_nc_cat=100&_nc_ht=scontent.ftun1-1.fna&oh=e1fe8a45a8cd63f4529316eb4cfadbd5&oe=5C79C7B6',
    'ahmedbenyahia1999700');
  ahmedInfo2 = new Personne('ahmed Benyahia', 'CEO', 'I love Coding !',
    'To Be Or Not To Be!', 'Dev application for business', 'C++ java',
    15, 14, 17, 'https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-1/p160x160/23131994_1662646550475476_5020245036772567044_n.jpg?_nc_cat=100&_nc_ht=scontent.ftun1-1.fna&oh=e1fe8a45a8cd63f4529316eb4cfadbd5&oe=5C79C7B6',
    'ahmedbenyahia1999700');
  ahmedInfo3 = new Personne('omar hamami', 'CEO', 'I love Coding !',
    'To Be Or Not To Be!', 'Dev application for business', 'C++ java',
    15, 14, 17, 'https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-1/p160x160/23131994_1662646550475476_5020245036772567044_n.jpg?_nc_cat=100&_nc_ht=scontent.ftun1-1.fna&oh=e1fe8a45a8cd63f4529316eb4cfadbd5&oe=5C79C7B6',
    'ahmedbenyahia1999700');
  ahmedInfo4 = new Personne('fattah laghouane', 'CEO', 'I love Coding !',
    'To Be Or Not To Be!', 'Dev application for business', 'C++ java',
    15, 14, 17, 'https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-1/p100x100/39080792_1822377094514143_7160787892158070784_n.jpg?_nc_cat=111&_nc_ht=scontent.ftun1-1.fna&oh=0c91f1f03bbb23c90fe1e518f1e09665&oe=5C77971C',
    'ahmedbenyahia1999700');
personnes: Personne[] = [];

  constructor() { }

  ngOnInit() {
    this.personnes.push(this.ahmedInfo);
    this.personnes.push(this.ahmedInfo2);
    this.personnes.push(this.ahmedInfo3);
    this.personnes.push(this.ahmedInfo4);
  }

}
