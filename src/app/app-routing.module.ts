import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as path from 'path';
import {BookGallaryComponent} from './book-gallary/book-gallary.component';
import {LoginComponent} from './login/login.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: ({ path: string; component: any })[] = [
    {
      path: '/home',
      component: BookGallaryComponent
    },
    {
      path: '/login',
      component: LoginComponent
    },
    {
      path: '/create_account',
      component: CreateAccountComponent
    },
    {
      path: '/admin',
      component: /AdminComponent
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
