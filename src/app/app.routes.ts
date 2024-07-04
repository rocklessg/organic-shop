import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { CheckOutComponent } from './check-out/check-out.component';

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
    {
        path: 'my/orders',
        component: MyOrdersComponent,
        title: 'My Orders',
    },
    {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        title: 'Manage Orders',
    },
    {
        path: 'admin/products',
        component: AdminProductsComponent,
        title: 'My Orders',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
    },
    {
        path: 'check-out',
        component: CheckOutComponent,
        title: 'Checkout',
    }
];

export default routeConfig;
