import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }
  
  private urlBook = 'http://localhost:8080/api/books/author';
  private urlTag = 'http://localhost:8080/api/tags/';
  getAllTag() {
    return this.http.get(this.urlTag);
  }

  getAll() {
    return this.http.get(this.urlBook) ;
  }
}

