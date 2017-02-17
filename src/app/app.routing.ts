import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BandsComponent} from './bands/bands.component';
import {LoginComponent} from './login/login.component';
import {UserHomeComponent} from './user-home/user-home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user/:id',
    component: UserHomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
