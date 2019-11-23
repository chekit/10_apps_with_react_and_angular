import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { SpotifyService } from './services/spotify.service';
import { RouteTitleService } from './services/title.service';
import { TokenInterceptor } from './services/token.interceptor';

NgModule({
	imports: [
		HttpClientModule
	],
	providers: [
		AuthService,
		SpotifyService,
		RouteTitleService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		}
	]
})
export class CoreModule { }