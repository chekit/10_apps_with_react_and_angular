import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AboutPageComponent } from './about/about.component';
import { ArtistPageComponent } from './artist/artist.component';
import { HomePageComponent } from './home/home.component';
import { appRoutes } from './routing';
import { PagesWrapperComponent } from './wrapper/pages-wrapper.component';


@NgModule({
	imports: [
		SharedModule,
		CommonModule,
		RouterModule.forRoot(appRoutes),
	],
	declarations: [
		PagesWrapperComponent,
		AboutPageComponent,
		HomePageComponent,
		ArtistPageComponent
	],
	exports: [
		PagesWrapperComponent
	]
})
export class PagesModule {

}