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
    books: Book [] = [] ;
    authors: string [] = [] ;


  bookCat: string[] = [];

  ngOnInit(): void {
    this.serviceBook.getAll().subscribe(
      response => {

        console.log(response);
        for ( const book of (response as Book[])) {
          this.books.push(new Book(book.title, book.datePub, book.description, book.author,
            book.price, book.available, book.categories, book.imgUrl))   ;
            this.authors.push(book['author']);
        }
        console.log(this.books);
        console.log('yoyo' + this.authors);
      }
    );

    this.serviceBook.getAllTag().subscribe(
      response => {
        console.log(response);
        for (const tag of (response as {'id', 'description'}[])) {
          this.bookCat.push(tag.description);
          console.log(tag);
        }
    });


  }

}
