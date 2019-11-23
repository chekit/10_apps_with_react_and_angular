import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, flatMap, catchError, mergeMap, switchMap, map, retry } from 'rxjs/operators';

import { Paths } from '../pages/routing';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let request: HttpRequest<any> = this.authService.token
			? req.clone({
				setHeaders: {
					'Authorization': this.authService.token
				}
			})
			: req.clone();

		return next.handle(request)
			.pipe(
				catchError((err: any) => {
					if (err instanceof HttpErrorResponse && err.status === 401) {
						return this.authService.fetchToken()
							.pipe(
								map((token: string) => {
									request = req.clone({
										setHeaders: {
											'Authorization': token
										}
									});

									return request;
								}),
								switchMap((r: HttpRequest<any>) => next.handle(r)),
							)
					}
				})
			);
	}
}