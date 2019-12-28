import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL, ITEMS_LIMIT } from 'src/app/config/constants';
import {
    Artist,
    ArtistItemResponse,
    ArtistsCollection,
    ArtistsCollectionResponse,
} from 'src/app/shared/models/artists.model';

import { AlbumsCollection, AlbumsCollectionResponse } from './../../shared/models/albums.model';

export enum SearchTypes {
	ARTIST = 'artist',
	ALBUM = 'album',
	PLAYLIST = 'playlist',
	TRACK = 'track'
}

export interface SearchConfig {
	q?: string;
	offset?: string;
	limit?: string;
}

@Injectable()
export class SpotifyService {
	constructor(
		private http: HttpClient
	) { }

	searchAlbums(config: SearchConfig): Observable<AlbumsCollection> {
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
					map((response: AlbumsCollectionResponse) => new AlbumsCollection(response))
				)
			: EMPTY;
	}

	searchArtists(config: SearchConfig): Observable<ArtistsCollection> {
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
					map((response: ArtistsCollectionResponse) => new ArtistsCollection(response))
				)
			: EMPTY;
	}

	getArtistById(id: string): Observable<Artist> {
		return this.http.get(`${API_URL}artists/${id}`)
			.pipe(
				map((response: ArtistItemResponse) => new Artist(response))
			);
	}

	getAlbumsByArtistId(id: string): Observable<AlbumsCollection> {
		return this.http.get(`${API_URL}artists/${id}/albums`)
			.pipe(
				map((response: AlbumsCollectionResponse) => new AlbumsCollection(response))
			);
	}
}