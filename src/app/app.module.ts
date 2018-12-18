import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ListPersonneComponent} from './list-personne/list-personne.component';
import {CarteVisiteFormComponent} from './list-personne/carte-visite-form/carte-visite-form.component';
import {CarteVisiteComponent} from './list-personne/carte-visite/carte-visite.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookListComponent } from './book-gallary/book-list/book-list.component';
import { BookCartComponent } from './book-gallary/book-list/book-cart/book-cart.component';
import { BookGallaryComponent } from './book-gallary/book-gallary.component';
import { BookCategoryComponent } from './book-gallary/book-list/book-category/book-category.component';
import { BookSearchBarComponent } from './book-gallary/book-list/book-search-bar/book-search-bar.component';
import { NavbarComponent } from './book-gallary/book-list/navbar/navbar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RefreshTokenInterceptor} from './service/refresh-token-interceptor.service';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
import { NewOrderComponent } from './new-order/new-order.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

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
    NavbarComponent,
    LoginComponent,
    CreateAccountComponent,
    AdminComponent,
    NotFoundComponent,
    NewOrderComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
