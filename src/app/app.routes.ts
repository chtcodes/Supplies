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
import { DFormComponent } from './components/dform/dform.component';
import { FFormComponent } from './components/fform/fform.component';
import { SFormComponent } from './components/sform/sform.component';
import { SupplyTableComponent } from './components/supply-table/supply-table.component';
import { SupplyFormComponent } from './components/supply-form/supply-form.component';

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
                component: SupplyRequestComponent,
                children: [
                    {
                        path: 'supplyTable',
                        component: SupplyTableComponent
                    },
                    {
                        path: 'supplyForm',
                        component: SupplyFormComponent
                    },
                    {
                        path: 'dForm',
                        component: DFormComponent
                    },
                    {
                        path: 'fForm',
                        component: FFormComponent
                    },
                    {
                        path: 'sForm',
                        component: SFormComponent
                    },
                ],
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
