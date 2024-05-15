import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductsComponent } from './products/products.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'sign-up', component: RegisterComponent},
    {path: 'products', component: ProductsComponent, canActivate: [authGuard]}
];
