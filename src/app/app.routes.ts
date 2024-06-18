import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routeConfig: Routes = [
    {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    title: 'Cart',
  },
];

export default routeConfig;
