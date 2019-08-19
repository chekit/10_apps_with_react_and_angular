import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ComponenetsModule } from '../components/components.module';
import { AboutPageComponent } from './about/about.component';
import { HomePageComponent } from './home/home.component';
import { PagesWrapperComponent } from './wrapper/pages-wrapper.component';


@NgModule({
	imports: [
		MatSidenavModule,
		ComponenetsModule,
		CommonModule
	],
	declarations: [
		PagesWrapperComponent,
		AboutPageComponent,
		HomePageComponent
	],
	exports: [
		PagesWrapperComponent
	]
})
export class PagesModule {

}