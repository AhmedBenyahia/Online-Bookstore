import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ListPersonneComponent} from './list-personne/list-personne.component';
import {CarteVisiteFormComponent} from './list-personne/carte-visite-form/carte-visite-form.component';
import {CarteVisiteComponent} from './list-personne/carte-visite/carte-visite.component';
import {FormsModule} from '@angular/forms';
import { BookListComponent } from './book-gallary/book-list/book-list.component';
import { BookCartComponent } from './book-gallary/book-list/book-cart/book-cart.component';
import { BookGallaryComponent } from './book-gallary/book-gallary.component';
import { BookCategoryComponent } from './book-gallary/book-list/book-category/book-category.component';
import { BookSearchBarComponent } from './book-gallary/book-list/book-search-bar/book-search-bar.component';
import { NavbarComponent } from './book-gallary/book-list/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonneComponent,
    CarteVisiteFormComponent,
    CarteVisiteComponent,
    BookListComponent,
    BookCartComponent,
    BookGallaryComponent,
    BookCategoryComponent,
    BookSearchBarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
