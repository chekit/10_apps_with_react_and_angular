import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AboutComponent,
        HomeComponent
    ],
    exports: [
        AboutComponent,
        HomeComponent
    ]
})
export class PagesModule { }