import { Injectable } from '@angular/core';
import {Book} from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  private _chart: Book [] = [] ;

  addToChart(book: Book) {
    this._chart.push(book);
  }

  deleteFromChart(book: Book) {
    this._chart.splice(this._chart.indexOf(book), 1);
  }

  totalPrice() {
    let price = 0;
    for (const p of this._chart) {
      price += p.price;
    }
    return price;
  }


  get chart(): Book[] {
    return this._chart;
  }

  nbreBook () {
    return this.chart.length;
  }
}
