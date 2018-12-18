import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/cli/lib/config/schema';
import {ChartService} from '../../../service/chart.service';
import {Book} from '../../../model/Book';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';
import {BooksService} from '../../../service/books.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService,
              private charService: ChartService,
              private router: Router,
              private serviceBook: BooksService) { }
  private chart: Book [] ;
  ngOnInit() {
    this.chart = this.charService.chart ;
  }

  onUserLogin(user: string, password: string) {
    this.authService.login(user, password);
  }

  logoutUser() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  serarchLogic(title: string) {
    title = title.trim();
    console.log('searching');
    if (title === '') {
      this.serviceBook.disableFilter();
    } else {
      this.serviceBook.filterName(title);
    }
  }
}
