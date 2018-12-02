import { Component, OnInit } from '@angular/core';
import {Book} from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
// TODO: replace this hard code list with http service
  b1 = new Book('The imposible', '12 Jeu 1998', 'Good Book',
    'Ahmed benyahia', 5, 10,
    ['Action'], '../../assets/images/rotating_card_thumb.jpg');
  b2 = new Book('The imposible', '12 Jeu 1998', 'Good Book',
    'Ahmed benyahia', 5, 10,
    ['Action'], '../../assets/images/rotating_card_thumb.jpg');

  books: Book [] = [ this.b1, this.b2, this.b1, this.b2, this.b1, this.b2, this.b1, this.b2] ;

  // TODO: replace this hard code category with service
  bookCat: string[] = ['cat1', 'cat2', 'cat3'];

}
