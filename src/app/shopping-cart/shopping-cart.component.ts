import {Component, OnInit, Output} from '@angular/core';
import {CartItem} from '../model/CartItem';
import {Book} from '../model/Book';
import {BooksService} from '../service/books.service';
import {Order} from '../model/Order';
import {ChartService} from '../service/chart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];
  book: Book = this.bookService.getAllBooks()[0];
  order: Order;
  constructor(private bookService: BooksService,
              private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.createOrder().subscribe(
      (response) => {
        this.cartItems = this.chartService.cartItems;
      }
    );
    this.order = this.chartService.order;
}

getBook(cartItem: CartItem) {
  this.bookService.getAllBooks()
    .forEach(
      (book: Book) => {
        if (book.id === cartItem.bookid) {
          this.book = book;
        }
      }
    );
}

  increaseQuantity(i: number) {
    this.chartService.cartItems[i].quantity += 1;
  }

  decreaseQuantity(i: number) {
    if (this.cartItems[i].quantity > 0) {
      this.chartService.cartItems[i].quantity -= 1;
    }
  }

  validateOrder() {
    this.chartService.order.fullAddress = this.order.fullAddress;
    this.chartService.order.telephoneNumber = this.order.telephoneNumber ;
    this.chartService.createOrder();
    this.chartService.validateCart();
  }
}
