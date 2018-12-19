import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookGallaryComponent} from './book-gallary/book-gallary.component';
import {LoginComponent} from './login/login.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AdminComponent} from './admin/admin.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

const routes: ({ path: string; component: any })[] = [
  {
      path: '',
      component: BookGallaryComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'create_account',
      component: CreateAccountComponent
    },
    {
      path: 'admin',
      component: AdminComponent
    },
  {
    path: 'cart',
    component: ShoppingCartComponent
  },
    {
      path: '**',
      component: NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
