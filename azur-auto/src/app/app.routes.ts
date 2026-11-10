import { Routes } from '@angular/router';
import { Home } from './home/home';
import {Cars} from './cars/cars';
import {About} from './about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'cars',
    component: Cars,
  },
  {
    path: 'cars/:id',
    redirectTo: ''
  },
  {
    path: 'about',
    component: About,
  }
];
