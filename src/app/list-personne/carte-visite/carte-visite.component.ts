import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent {
  // personne = new Personne('ahmed Benyahia', 'CEO', 'I love Coding !',
  //   'To Be Or Not To Be!', 'Dev application for business',
  //   15, 14, 17,"https://scontent.ftun1-1.fna.fbcdn.net/
  // v/t1.0-1/p160x160/23131994_1662646550475476_5020245036772567044_n.
  // jpg?_nc_cat=100&_nc_ht=scontent.ftun1-1.fna&oh=e1fe8a45a8cd63f4529316eb4cfadbd5&oe=5C79C7B6",
  //   'ahmedbenyahia1999700');
  @Input('personneInfo') personne: Personne;
  isActive = false;
  isEditable = true;
  rotateCard() {
    this.isActive = !this.isActive;
  }

  editCard() {
    this.isEditable = !this.isEditable;
  }

  doubleRotateCard() {
    this.rotateCard();
    setTimeout(() => {
      this.rotateCard();
    }, 300);
  }
}

export class Personne {
  name: string;
  position: string;
  personalDescription: string;
  logo: string;
  jobDescription: string;
  jobKeyWord: string;
  nbreFollower: number;
  nbreFollowing: number;
  nbreProject: number;
  facebookUrl: URL;
  twitterUrl: URL;
  googleUrl: URL;
  profileImg: string;

  constructor(name: string, position: string, personalDescription: string,
              logo: string, jobDescription: string, jobKeyWord: string, nbreFollower: number,
              nbreFollowing: number, nbreProject: number, profileImage?: string, facebookUrl?: string, twitterUrl?: string,
              googleUrl?: string) {
    this.name = name;
    this.position = position;
    this.personalDescription = personalDescription;
    this.logo = logo;
    this.jobDescription = jobDescription;
    this.jobKeyWord = jobKeyWord;
    this.nbreFollower = nbreFollower;
    this.nbreFollowing = nbreFollowing;
    this.nbreProject = nbreProject;
    this.facebookUrl = new URL('https://www.facebook.com/' + facebookUrl);
    this.twitterUrl = new URL('https://www' + twitterUrl);
    this.googleUrl = new URL('https://www' + googleUrl);
    this.profileImg = profileImage;
  }
}
