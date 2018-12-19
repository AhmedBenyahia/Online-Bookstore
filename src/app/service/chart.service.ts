import { Injectable } from '@angular/core';
import {Book} from '../model/Book';
import {Personne} from '../model/Personne';
import {AuthService} from './auth.service';
import {Order} from '../model/Order';
import {HttpClient} from '@angular/common/http';
import {CartItem} from '../model/CartItem';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private authService: AuthService,
              private http: HttpClient) { }

  private _chart = new Set();
  private _order: Order;
  private user: Personne;
  private _cartItems: CartItem [] = [];
  private urlOrderAdd = 'http://localhost:8080/order/new/';
  private urlGetOrder = 'http://localhost:8080/order/order/';
  private urlCartAdd = 'http://localhost:8080/order/cart/add/';
  private urlValidateCart = 'http://localhost:8080/order/valid/';

  addToChart(book: Book) {
    console.log(book.id);
    this._chart.add(book);
  }

  // deleteFromChart(book: Book) {
  //   this._chart.splice(this._chart.indexOf(book), 1);
  // }

  totalPrice() {
    let price = 0;
    for (const p of this._chart) {
      price += p.price;
    }
    return price;
  }

  nbreBook () {
    return this._chart.size;
  }

  resetCart() {
    this._chart.clear();
  }

  createOrder() {
     return this.authService.getUserInformation(localStorage.getItem('username')).pipe(map(
      (user: Personne) => {
        this.user = user;
        this._order = {
          'id': undefined,
          'fullAddress': (this.order === undefined || this.order.fullAddress === undefined) ? this.user.address : this.order.fullAddress,
          'telephoneNumber': (this.order === undefined || this.order.telephoneNumber === undefined) ? this.user.telephoneNumber : this.order.telephoneNumber,
          'client_id': this.user.id,
          'totalCost' : (this.order === undefined || this.order.totalCost === undefined) ? undefined : this.order.totalCost
        };
        this.http.post(this.urlOrderAdd + this.user.id, this._order).subscribe(
          (order: Order) => {
            this._order = order;
            this.addItemsToCart();
          }
        );
        console.log(this._cartItems.length);
        console.log(this.cartItems.length);
      }
    ));
  }

  addItemsToCart() {
    this.chart.forEach(
      (book: Book) => {
        const item: CartItem = {
          'bookid': book.id,
          'quantity': 1
        };
        this._cartItems.push(item);
        this.http.post(this.urlCartAdd + this._order.id, item).subscribe(
          (cart: CartItem) => {
            console.log(cart.bookid);
            this.updateOrder(this.order.id);
          }
        );
      }
    );
    // console.log(this.order.totalCost);
  }
  validateCart() {
    this.addItemsToCart();
    this.http.get(this.urlValidateCart + this._order.id);
  }

  updateOrder(id: number) {
    return this.http.get(this.urlGetOrder + id).pipe(map(
      (order: Order) => {
        this._order = order;
      }
    ));
  }

  get chart() {
    return this._chart;
  }


  get cartItems(): CartItem[] {
    return this._cartItems;
  }
  get order(): Order {
    return this._order;
  }
  set order(order: Order) {
    this._order = order;
  }



}
