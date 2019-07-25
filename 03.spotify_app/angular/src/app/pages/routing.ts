import { Routes } from '@angular/router';

import { AboutPageComponent } from './about/about.component';
import { HomePageComponent } from './home/home.component';

export enum Paths {
	ROOT = '',
	ABOUT = 'about'
}

export const appRoutes: Routes = [
	{
		path: Paths.ROOT,
		component: HomePageComponent
	},
	{
		path: Paths.ABOUT,
		component: AboutPageComponent
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: Paths.ROOT
	},
];