import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { appRoutes } from '../pages/routing';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';

const COMPONENTS = [
	NavigationComponent,
	NavbarComponent,
	SearchComponent
]

@NgModule({
	imports: [
		MatToolbarModule,
		MatButtonModule,
		MatInputModule,
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