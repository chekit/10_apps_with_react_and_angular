import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';

const COMPONENTS = [
	NavigationComponent,
	NavbarComponent,
	SearchComponent,
	LoaderComponent,
	ArtistComponent,
	AlbumComponent
]

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
	],
	declarations: COMPONENTS,
	exports: [
		...COMPONENTS
	]
})
export class ComponenetsModule { }