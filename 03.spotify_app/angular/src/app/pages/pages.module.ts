import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AboutPageComponent } from './about/about.component';
import { ArtistPageComponent } from './artist/artist.component';
import { HomePageComponent } from './home/home.component';
import { appRoutes } from './pages.routing';
import { PagesWrapperComponent } from './wrapper/pages-wrapper.component';

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes),
		SharedModule
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
export class PagesModule { }