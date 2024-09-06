import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "products", component: ProductsComponent},
    {path: "product/:id", component: ProductsComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
