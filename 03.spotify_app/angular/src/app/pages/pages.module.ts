import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { SharedComponentsModule } from '../shared/components/shared-component.module';
import { SharedModule } from '../shared/shared.module';
import { AboutPageComponent } from './about/about.component';
import { ArtistPageComponent } from './artist/artist.component';
import { HomePageComponent } from './home/home.component';
import { appRoutes } from './pages.routing';
import { PagesWrapperComponent } from './wrapper/pages-wrapper.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(appRoutes),
		SharedModule,
		SharedComponentsModule,
		MatIconModule
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