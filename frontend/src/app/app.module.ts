import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from './fuse-config'
import { FakeDbService } from 'app/fake-db/fake-db.service';

import { AppComponent } from './app.component'
import { LayoutModule } from './layout/layout.module'
import { SampleModule } from './main/sample/sample.module'
import { AuthModule } from './main/auth/auth.module'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

const appRoutes: Routes = [
    {
        path        : 'auth',
        loadChildren: () => import('./main/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path        : 'e-commerce',
        loadChildren: () => import('./main/e-commerce/e-commerce.module').then(m => m.EcommerceModule)
    },
    {
        path      : '**',
        redirectTo: 'sample'
    },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),
        
        // Material moment date module
        MatMomentDateModule,
        
        // Material
        MatButtonModule,
        MatIconModule,
        
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        
        // App modules
        LayoutModule,
        SampleModule,
        AuthModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
