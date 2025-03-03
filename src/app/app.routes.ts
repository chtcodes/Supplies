import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { SupplyRequestComponent } from './components/supply-request/supply-request.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { facultyComponent } from './components/faculty/faculty.component';
import { DesignationsComponent } from './components/designations/designations.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
       
    },
    {
        path: 'layout',
        component: LayoutComponent,
       
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'supplyRequest',
                component: SupplyRequestComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'designation',
                component: DesignationsComponent
            },
            {
                path: 'faculty',
                component: facultyComponent
            },
            {
                path: 'users',
                component: UsersComponent
            }

        ],
    },
   
   
];
