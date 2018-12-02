import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../Book';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.css']
})
export class BookCartComponent  {
@Input('book-info') book: Book ;
  // book = new Book('The imposible', '12 Jeu 1998', 'Good Book',
  //   'Ahmed benyahia', 5, 10,
  //   ['Action'], '../../assets/images/rotating_card_thumb.jpg');

}
