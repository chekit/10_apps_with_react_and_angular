import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor(
		private authService: AuthService,
	) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const request: HttpRequest<any> = this.authService.token
			? req.clone({
				setHeaders: { Authorization: this.authService.token }
			})
			: req.clone();

		return next.handle(request)
			.pipe(
				catchError((err: any) => this.getToken(err, next, req, request))
			);
	}

	private getToken(err: any, next: HttpHandler, req: HttpRequest<any>, request: HttpRequest<any>): Observable<HttpEvent<any>> {
		return err instanceof HttpErrorResponse && err.status === 401
			? this.authService.fetchToken()
				.pipe(
					map((token: string) => {
						request = req.clone({
							setHeaders: { Authorization: token }
						});
						return request;
					}),
					switchMap((r: HttpRequest<any>) => next.handle(r)),
					catchError((e) => next.handle(null)),
				)
			: next.handle(null);
	}
}