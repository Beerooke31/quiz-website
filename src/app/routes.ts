import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Quiz details',
  },
  {
    path: 'signup',
    component: SignupPageComponent,
    title: 'Signup page',
  },
];

export default routeConfig;
