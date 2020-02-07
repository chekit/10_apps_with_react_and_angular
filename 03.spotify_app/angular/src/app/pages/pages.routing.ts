import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home.component';
import { AboutPageComponent } from './about/about.component';
import { ArtistPageComponent } from './artist/artist.component';

export enum Paths {
	ROOT = '',
	ABOUT = 'about',
	LOGIN = 'login',
	ARTIST = 'artist/:id'
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
		path: Paths.ARTIST,
		component: ArtistPageComponent
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: Paths.ROOT
	},
];