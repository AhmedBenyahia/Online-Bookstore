import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/cli/lib/config/schema';
import {ChartService} from '../../../service/chart.service';
import {Book} from '../../../model/Book';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, public charService: ChartService) { }
  private chart: Book [] ;
  ngOnInit() {
    this.chart = this.charService.chart ;
  }

  onUserLogin(user: string, password: string) {
    this.authService.login(user, password);
  }
}
