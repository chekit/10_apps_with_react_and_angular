import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GitHubInterceptor implements HttpInterceptor {
	private API: string = 'https://api.github.com';
	private USER_NAME: string = 'chekit';
	private CLIENT_ID: string = '2e911e889cd585c72c42';
	private CLIENT_SECRET: string = '8a63e8980301825df3410cd3894b4469271a355e';

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const request = req.clone({
			url: `${this.API}/${req.url}`,
			headers: new HttpHeaders({

			})
		});

		return next.handle(request);
	}
}
