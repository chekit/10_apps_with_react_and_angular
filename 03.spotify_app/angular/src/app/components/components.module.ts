import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { appRoutes } from '../pages/routing';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';

const COMPONENTS = [
	NavigationComponent,
	NavbarComponent,
	SearchComponent,
	LoaderComponent
]

@NgModule({
	imports: [
		MatToolbarModule,
		MatButtonModule,
		MatInputModule,
		MatProgressSpinnerModule,
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