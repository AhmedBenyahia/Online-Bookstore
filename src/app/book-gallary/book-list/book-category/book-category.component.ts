import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent  {

  @Input('bookCategory') bookCat: string [];

}
