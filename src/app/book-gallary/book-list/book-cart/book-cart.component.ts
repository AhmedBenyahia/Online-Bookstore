import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../model/Book';
import {ChartService} from '../../../service/chart.service';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.css']
})
export class BookCartComponent  {
  @Input('book-info') book: Book ;

  constructor(private charService: ChartService) {}

  buyBook() {
    this.charService.addToChart(this.book);
    console.log('buying');
  }
}
