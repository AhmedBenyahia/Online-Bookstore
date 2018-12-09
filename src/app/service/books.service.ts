import { Injectable } from '@angular/core';
import {Book} from '../model/Book';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// TODO: add http api logic
export class BooksService {


  // b1 = new Book('The imposible', '12 Jeu 1998', 'Good Book',
  //   'Ahmed benyahia', 5, 10,
  //   ['Action'], '../../assets/images/rotating_card_thumb.jpg');
  // b2 = new Book('The imposible', '12 Jeu 1998', 'Good Book',
  //   'Ahmed benyahia', 5, 10,
  //   ['Action'], '../../assets/images/rotating_card_thumb.jpg');
  //
  // get books() {
  //   return [ this.b1, this.b2, this.b1, this.b2, this.b1, this.b2, this.b1, this.b2] ;
  // }
  //
  // get category() {
  //   return ['cat1', 'cat2', 'cat3'];
  // }



  constructor(private http: HttpClient) { }
  private urlBook = 'http://localhost:8080/api/books/';
  private urlTag = 'http://localhost:8080/api/tags/';
  getAll() {
     return this.http.get(this.urlBook) ;
  }

  getAllTag() {
    return this.http.get(this.urlTag);
  }
}
