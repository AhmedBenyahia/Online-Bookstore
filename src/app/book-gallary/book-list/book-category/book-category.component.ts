import {Component, Input, OnInit} from '@angular/core';
import {BooksService} from '../../../service/books.service';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent {

  @Input('bookCategory') bookCat: string [];
  @Input('bookAuthor') bookAuth: string[];
  private numberCheckedTag: Number = 0;
  private numberCheckedAuthor: Number = 0;


  constructor(private serviceBook: BooksService) {
  }

  onchangeTag(tag: String, checked: boolean) {
    if (checked) {
      this.serviceBook.getNewTag(tag);
      this.numberCheckedTag++;
    } else {
      this.numberCheckedTag--;
      if (this.numberCheckedTag === 0) {
        this.serviceBook.disableFilter();
      }
    }
  }

  onchangeAuthor(author: String, checked: boolean) {
    if (checked) {
      this.serviceBook.getNewAuthor(author);
      this.numberCheckedAuthor++;
    } else {
      this.numberCheckedAuthor--;
      if (this.numberCheckedAuthor === 0) {
        this.serviceBook.disableFilter();
      }
    }
  }

  priceFiltering(min: string, max: string) {
    // console.log('minmax' + min + '|' + max);
    if (min !== '' && max !== '') {
      this.serviceBook.filterPrice(+min, +max);
    }
  }
}
