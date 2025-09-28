import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { HomeLayout } from './components/home-layout/home-layout';

export const routes: Routes = [

  {
    path:'',
    component: Login,
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeLayout,
    pathMatch: 'full'
  }

];
