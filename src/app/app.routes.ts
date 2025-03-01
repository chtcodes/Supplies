import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { SupplyRequestComponent } from './components/supply-request/supply-request.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: IndexComponent,
       
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'supplyRequest',
        component: SupplyRequestComponent
    },
    {
        path: 'users',
        component: UsersComponent
    }
   
];
