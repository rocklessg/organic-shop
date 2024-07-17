import { AuthGuardService } from './auth-guard.service';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

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
        canActivate: [AuthGuardService]
    },
    {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        title: 'Manage Orders',
        canActivate: [AuthGuardService]
    },
    {
        path: 'admin/products',
        component: AdminProductsComponent,
        title: 'My Orders',
        canActivate: [AuthGuardService]
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
        canActivate: [AuthGuardService]
    },
    {
        path: 'order-success',
        component: OrderSuccessComponent,
        title: 'Order Success',
        canActivate: [AuthGuardService]
    }
];

export default routeConfig;
