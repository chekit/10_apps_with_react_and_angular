import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Albums, AlbumsResponse } from '../models/albums.model';
import { Artists, ArtistsResponse } from '../models/artist.model';

export enum SearchTypes {
	ARTIST = 'artist',
	ALBUM = 'album',
	PLAYLIST = 'playlist',
	TRACK = 'track'
}

export interface searchConfig {
	q?: string;
	type?: SearchTypes;
	offset?: string;
	limit?: string;
}

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {
	constructor(
		private http: HttpClient
	) { }

	searchAlbums(config: searchConfig): Observable<Albums> {
		return config.q
			? this.http.get(
				'https://api.spotify.com/v1/search',
				{
					params: {
						type: SearchTypes.ALBUM,
						limit: '20',
						offset: '0',
						...config
					}
				}
			)
				.pipe(
					map(({ albums }: AlbumsResponse) => albums)
				)
			: of(null);
	}

	searchArtist(config: searchConfig): Observable<Artists> {
		return config.q
			? this.http.get(
				'https://api.spotify.com/v1/search',
				{
					params: {
						type: SearchTypes.ARTIST,
						limit: '20',
						offset: '0',
						...config
					}
				}
			)
				.pipe(
					map(({ artists }: ArtistsResponse) => artists)
				)
			: of(null);
	}
}