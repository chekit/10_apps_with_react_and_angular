import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { LoaderComponent } from './loader/loader.component';
import { MessageComponent } from './message/message.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';

const COMPONENTS = [
	LoaderComponent,
	ArtistComponent,
	AlbumComponent,
	NavigationComponent,
	NavbarComponent,
	SearchComponent,
	MessageComponent
];

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule,
		MatToolbarModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatIconModule,
		MatButtonModule,
		MatChipsModule
	],
	declarations: COMPONENTS,
	exports: [
		...COMPONENTS,
		CommonModule,
		MatIconModule,
		MatChipsModule
	]
})
export class SharedComponentsModule {}
