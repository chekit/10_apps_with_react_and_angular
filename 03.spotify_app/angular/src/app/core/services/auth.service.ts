import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

export interface TokenData {
	access_token: string;
	token_type: string;
	expires_in: number;
	scope: string;
}

const CLIENT_ID: string = 'f20de8659aa84942920613dfa212cd3c';
const CLIENT_SECRET: string = '8f3f55a13be64c72889a85b20c73b618';

@Injectable()
export class AuthService {
	private payload: HttpParams;
	private currentToken: string;

	constructor(
		private http: HttpClient
	) {
		this.payload = new HttpParams()
			.set('grant_type', 'client_credentials')
			.set('client_id', CLIENT_ID)
			.set('client_secret', CLIENT_SECRET);
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
			'/api/token',
			this.getPayload(),
			options
		)
			.pipe(
				map((data: TokenData) => {
					this.currentToken = `${data.token_type} ${data.access_token}`;
					return this.currentToken;
				}),
				catchError(err => of(null))
			);

	}

	private getPayload(): string {
		return this.payload.toString();
	}
} 