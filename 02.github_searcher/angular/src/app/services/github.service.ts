import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { Repository } from '../models/repository.model';
import { User, UserData } from '../models/user-profile.model';


@Injectable({
	providedIn: 'root'
})
export class GitHubService {
	constructor(
		private http: HttpClient
	) {
	}

	/**
	 * Получаем данные о пользователе по переданному bvtyb
	 *
	 * @param {string} name
	 * @returns {Observable<UserData>}
	 */
	public getUser(name: string): Observable<User> {
		return this.http.get(`users/${name}`)
			.pipe(
				map((data: UserData) => new User(data))
			);
	}

	public getRepos(name: string): Observable<Repository[]> {
		return this.http.get(`users/${name}/repos`)
			.pipe(
				map((data: Repository[]) => data || [])
			);
	}
}
