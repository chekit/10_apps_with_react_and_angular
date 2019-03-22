import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';




const appRoutes: Routes = [
	{
		path: '',
		
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: '**',
		redirectTo: '',
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);