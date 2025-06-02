import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ClientsComponent } from './components/clients/clients.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product', component:  ProductComponent},
    { path: 'client', component: ClientsComponent },
];
