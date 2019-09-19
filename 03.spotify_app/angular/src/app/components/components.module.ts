import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { appRoutes } from '../pages/routing';
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
	ArtistComponent
]

@NgModule({
	imports: [
		CommonModule,
		MatToolbarModule,
		MatButtonModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatIconModule,
		ReactiveFormsModule,
		RouterModule.forRoot(appRoutes),
	],
	declarations: COMPONENTS,
	exports: [
		...COMPONENTS,
		RouterModule
	]
})
export class ComponenetsModule { }