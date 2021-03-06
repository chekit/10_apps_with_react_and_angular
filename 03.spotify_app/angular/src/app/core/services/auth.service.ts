import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { CLNT_ID, CLNT_SCRT, TOKEN_URL } from '../../config/constants';

export interface TokenData {
	access_token: string;
	token_type: string;
	expires_in: number;
	scope: string;
}

@Injectable()
export class AuthService {
	private payload: HttpParams;
	private currentToken: string;

	constructor(
		private http: HttpClient
	) {
		this.payload = new HttpParams()
			.set('grant_type', 'client_credentials')
			.set('client_id', atob(CLNT_ID))
			.set('client_secret', atob(CLNT_SCRT));
	}

	get token(): string {
		return this.currentToken;
	}

	fetchToken(): Observable<string> {
		const options = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		};

		return this.http.post(
			TOKEN_URL,
			this.getPayload(),
			options
		)
			.pipe(
				map((data: TokenData) => {
					this.currentToken = `${data.token_type} ${data.access_token}`;
					return this.currentToken;
				})
			);

	}

	private getPayload(): string {
		return this.payload.toString();
	}
}