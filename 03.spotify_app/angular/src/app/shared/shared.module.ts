import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ComponenetsModule } from './components/components.module';

NgModule({
	imports: [
		MatToolbarModule,
		MatButtonModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatIconModule,
		ReactiveFormsModule,
		MatIconModule,
		MatSidenavModule,
		ComponenetsModule
	]
})
export class SharedModule { }