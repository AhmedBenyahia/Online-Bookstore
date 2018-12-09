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
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWxsZSI6ImFqaW0iLCJjb2RlcG9zdGFsIjoiNDEzNSIsInN1cm5hbWUiOiJzdXJuYW1lIiwibmFtZSI6InNsYXkiLCJjaW4iOiIxMzQ2MjQ1NyIsImV4cCI6MTU0NDQwMDI5MSwidXNlcm5hbWUiOiJzYXl0byJ9.WKsof1MKlVImElOZwQoIUptl4OQuXGqAXjic778cxrM';
    return this.http.get(this.urlTag);
  }

  getAll() {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWxsZSI6ImFqaW0iLCJjb2RlcG9zdGFsIjoiNDEzNSIsInN1cm5hbWUiOiJzdXJuYW1lIiwibmFtZSI6InNsYXkiLCJjaW4iOiIxMzQ2MjQ1NyIsImV4cCI6MTU0NDQwMDI5MSwidXNlcm5hbWUiOiJzYXl0byJ9.WKsof1MKlVImElOZwQoIUptl4OQuXGqAXjic778cxrM';
    return this.http.get(this.urlBook, {
      headers: {'Authorization': token}
    }) ;
  }
}

