import { Routes } from '@angular/router';
import { ContactComponent, HomeComponent, ProductDetailComponent, ProductsComponent } from './pages';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'home',component: HomeComponent},
    {path:'contact',component: ContactComponent},
    {path:'products',component: ProductsComponent},
    {path:'products/:id',component: ProductDetailComponent},
    //{path:'products/:cat/:id',component: ProductDetailComponent},
    {path:'**',redirectTo:'', pathMatch:'full'},
];
