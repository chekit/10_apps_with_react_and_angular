import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { ProfileComponent } from './profile.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
	imports: [
		CommonModule,
		MatCardModule,
		MatChipsModule,
		MatButtonModule,
		MatDividerModule,
		MatListModule,

	],
	declarations: [
		UserInfoComponent,
		RepositoriesComponent,
		ProfileComponent
	],
	exports: [
		ProfileComponent
	]
})
export class ProfileModule {

}
