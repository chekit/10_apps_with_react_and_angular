import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AboutPageComponent } from './about/about.component';
import { ArtistPageComponent } from './artist/artist.component';
import { HomePageComponent } from './home/home.component';
import { appRoutes } from './pages.routing';
import { PagesWrapperComponent } from './wrapper/pages-wrapper.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedComponentsModule } from '../shared/components/shared-component.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(appRoutes),
		SharedModule,
		SharedComponentsModule,
		MatSidenavModule,
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