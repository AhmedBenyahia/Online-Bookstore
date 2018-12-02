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
import { BookSearchBarComponent } from './book-search-bar/book-search-bar.component';

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
    BookSearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
