import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { MessageComponent } from './message/message.component';
import { LoaderComponent } from './loader/loader.component';
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
		ReactiveFormsModule,
		RouterModule,
		CommonModule,
		MatToolbarModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatIconModule,
		MatButtonModule
	],
	declarations: COMPONENTS,
	exports: COMPONENTS
})
export class SharedComponentsModule {}
