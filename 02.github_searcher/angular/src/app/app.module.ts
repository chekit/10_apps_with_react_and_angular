import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileModule } from './components/profile/profile.module';
import { SearchComponent } from './components/search/search.component';
import { GitHubInterceptor } from './interceptors/github.interceptor';

@NgModule({
	declarations: [
		AppComponent,
		SearchComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		CommonModule,
		ProfileModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: GitHubInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
