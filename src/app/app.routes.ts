import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { HomeLayout } from './components/home-layout/home-layout';
import { ResetPassword } from './components/reset-password/reset-password';

export const routes: Routes = [

  {
    path:'',
    component: Login,
    pathMatch: 'full'
  },
  {
    path: 'resetPassword',
    component: ResetPassword,
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeLayout,
    pathMatch: 'full'
  }

];
