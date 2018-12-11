import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-book-gallary',
  templateUrl: './book-gallary.component.html',
  styleUrls: ['./book-gallary.component.css']
})
export class BookGallaryComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (!this.authService.isLogin()) {
      this.router.navigate(['/login']);
    }
  }

}
