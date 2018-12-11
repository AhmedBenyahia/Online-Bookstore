import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/Book';
import {BooksService} from '../../service/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    constructor(private serviceBook: BooksService) {}
    books = new Set() ;
    authors =  new Set() ;
    tags = new Set();
    numberCheckedTag = 0;
    numberCheckedAuthor = 0;


  ngOnInit(): void {
    this.books = this.serviceBook.getAllBooks();
    this.authors = this.serviceBook.getAllAuthors();
    this.tags = this.serviceBook.getAllTag();
    console.log(this.tags);
  }


  sortBooks(value: string) {
    this.serviceBook.sortby = value;
  }
}
