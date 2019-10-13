import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Albums, AlbumsResponse } from '../models/albums.model';
import { ArtistItem, Artists, ArtistsResponse } from '../models/artist.model';

export enum SearchTypes {
	ARTIST = 'artist',
	ALBUM = 'album',
	PLAYLIST = 'playlist',
	TRACK = 'track'
}

export interface searchConfig {
	q?: string;
	offset?: string;
	limit?: string;
}

export const ITEMS_LIMIT: number = 20;

const API_URL: string = 'https://api.spotify.com/v1/';

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
				`${API_URL}search`,
				{
					params: {
						type: SearchTypes.ALBUM,
						limit: `${ITEMS_LIMIT}`,
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

	searchArtists(config: searchConfig): Observable<Artists> {
		return config.q
			? this.http.get(
				`${API_URL}search`,
				{
					params: {
						type: SearchTypes.ARTIST,
						limit: `${ITEMS_LIMIT}`,
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

	getArtistById(id: string): Observable<ArtistItem> {
		return this.http.get(`${API_URL}artists/${id}`)
			.pipe(
				map((response: ArtistItem) => response)
			);
	}

	getAlbumsByArtistId(id: string): Observable<Albums> {
		return this.http.get(`${API_URL}artists/${id}/albums`)
			.pipe(
				map((response: Albums) => response)
			);
	}
}