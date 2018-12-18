import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private urlBook = 'http://localhost:8080/api/books/';
  private urlBookByTag = 'http://localhost:8080/api/books/tag/';
  private urlBookByAuthor = 'http://localhost:8080/api/books/author/';
  private urlTag = 'http://localhost:8080/api/tags/';
  private _sortby = 'title';
  private isActiveFilter = false;
  private isActivePriceFilter = false;

  booksSet = new Set();
  origineBooksSet = new Set();
  unFilteredBooksSet = new Set();
  authorsSet = new Set();
  tagsSet = new Set();

  constructor(private http: HttpClient) {
    this.update();
  }

  getAllTag() {
    return this.tagsSet;
  }

  getAllBooks() {
    return this.booksSet;
  }

  getAllAuthors() {
    return this.authorsSet;
  }

  update() {
    this.booksSet.clear();
    console.log('updating: ' + this.urlBook + this._sortby);
    this.http.get(this.urlBook + this._sortby).subscribe(
      response => {
        for ( const book of (response as Book[])) {
          this.booksSet.add(new Book(book.title, book.datePub, book.description, book.author,
            book.price, book.available, book.tag, book.imgUrl))   ;
          this.authorsSet.add(book['author']);
        }
      }
    );

    this.http.get(this.urlTag).subscribe(
      response => {
        for (const tag of (response as {'id', 'description'}[])) {
          this.tagsSet.add(tag.description);
        }
      });
    console.log('update result');
    console.log(this.authorsSet);
    console.log(this.tagsSet);
    console.log(this.booksSet);
  }

  getNewTag(tag: String) {
    if (this.isActiveFilter === false) {
      this.isActiveFilter = true ;
      this.booksSet.clear();
    }

    console.log('executing tag filter for ' + this.urlBookByTag + tag.trim());
    this.http.get(this.urlBookByTag + tag.trim()).subscribe(
      response => {
        console.log('tag filter result ' + response);
        for (const book of (response as Book[])) {
          this.booksSet.add(new Book(book.title, book.datePub, book.description, book.author,
            book.price, book.available, book.tag, book.imgUrl));
          console.log('result of' + tag + '->' + book);
        }
      }
    );
    console.log('filtering tags result for ' + tag);
    console.log('books set: ' + this.booksSet.size);
  }


  getNewAuthor(author: String) {
    if (this.isActiveFilter === false) {
      this.isActiveFilter = true ;
      this.booksSet.clear();
    }
    this.http.get(this.urlBookByAuthor + author).subscribe(
      response => {
        for (const book of (response as Book[])) {
          this.booksSet.add(new Book(book.title, book.datePub, book.description, book.author,
            book.price, book.available, book.tag, book.imgUrl));
        }
      }
    );
  }

  disableFilter() {
    this.isActiveFilter = false ;
    this.booksSet.clear();
    this.update();
  }

  filterPrice(min: number, max: number) {
    if (this.isActivePriceFilter === false) {
      this.isActivePriceFilter = true ;
      this.booksSet.forEach( book => {
        this.origineBooksSet.add(book) ;
      });
      console.log(this.booksSet.size);
      console.log(this.origineBooksSet.size);
    }
    this.booksSet.clear() ;
    this.origineBooksSet.forEach(
      (book: Book) => {
        if ((book.price >= min && book.price <= max)) {
          this.booksSet.add(book);
        }
      }
    );
    // console.log(this.booksSet.size);
    // console.log(this.origineBooksSet.size);
  }

  filterName(name: string) {
    if (this.isActivePriceFilter === false) {
      this.isActivePriceFilter = true ;
      this.booksSet.forEach( book => {
        this.origineBooksSet.add(book) ;
      });
      console.log(this.booksSet.size);
      console.log(this.origineBooksSet.size);
    }
    this.booksSet.clear() ;
    this.origineBooksSet.forEach(
      (book: Book) => {
        if ((book.title as string).includes(name)) {
          this.booksSet.add(book);
        }
      }
    );
  }



  get sortby(): string {
    return this._sortby;
  }

  set sortby(value: string) {
    this._sortby = value;
    this.update();
  }
}

