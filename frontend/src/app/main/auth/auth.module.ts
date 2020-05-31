import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FuseSharedModule } from '@fuse/shared.module';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes = [
    {
        path     : 'login',
        component: LoginComponent
    },
    {
        path     : 'logout',
        component: LogoutComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent,
        LogoutComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule
    ]
})
export class AuthModule
{
}
