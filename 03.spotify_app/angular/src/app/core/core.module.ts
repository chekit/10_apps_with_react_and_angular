import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AuthService } from './services/auth.service';
import { SpotifyService } from './services/spotify.service';
import { RouteTitleService } from './services/title.service';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
	imports: [
		HttpClientModule,
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
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(`CoreModule has already been loaded. Import CoreModule modules in the AppModule only.`);
		}
	}
}