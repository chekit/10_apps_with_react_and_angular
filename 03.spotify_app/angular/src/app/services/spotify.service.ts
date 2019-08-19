import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export enum SearchTypes {
	ARTIST = 'artist',
	ALBUM = 'album',
	PLAYLIST = 'playlist',
	TRACK = 'track'
}

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {
	constructor(
		private http: HttpClient
	) {}

	searchMusic(query: string, type: SearchTypes = SearchTypes.ALBUM): Observable<any> {
		return query 
			? this.http.get(
				'https://api.spotify.com/v1/search',
				{
					params: {
						q: query,
						type
					}
				}
			)
			: of(null);
	}
}