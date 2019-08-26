import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Albums, AlbumsResponse } from '../models/albums.response';

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
	) { }

	searchAlbums(query: string, type: SearchTypes = SearchTypes.ALBUM): Observable<Albums> {
		return query
			? this.http.get(
				'https://api.spotify.com/v1/search',
				{
					params: {
						q: query,
						type,
						// offset: '20' - на сколько трэков сместить
						// limit - сколько максимум загружать
					}
				}
			)
				.pipe(
					map(({ albums }: AlbumsResponse) => albums)
				)
			: of(null);
	}
}