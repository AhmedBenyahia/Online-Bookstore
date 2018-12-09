import { Injectable } from '@angular/core';
import {Book} from '../model/Book';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }
  private urlBook = 'http://localhost:8080/api/books/author/me';
  private urlTag = 'http://localhost:8080/api/tags/';
  getAll() {
    return this.http.get(this.urlBook) ;
  }

  getAllTag() {
    const token = 'Bearer+test';
    return this.http.get('http://localhost:8080/api/tags/auth', {
      headers: {'Authorization': token}
    });
  }
}

import {HttpClient} from '@angular/common/http';
