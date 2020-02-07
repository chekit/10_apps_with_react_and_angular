import { Artist, ArtistItemResponse } from './artists.model';
import { BasicDataItem, BasicDataItemResponse, BasicItemsCollection, BasicItemsCollectionResponse } from './basic.model';


export interface AlbumsSearchResponse {
	albums: AlbumsCollectionResponse;
}

export interface AlbumsCollectionResponse extends BasicItemsCollectionResponse {
	items: AlbumItemResponse[];
}

export interface AlbumItemResponse extends BasicDataItemResponse {
	available_markets: string[];
	album_type: AlbumType;
	artists: ArtistItemResponse[];
	type: AlbumType;
	total_tracks: number;
	release_date_precision: ReleaseDatePrecision;
	release_date: string;
}

export enum ReleaseDatePrecision {
	DAY = 'day',
	YEAR = 'year',
}

export enum AlbumType {
	ALBUM = 'album',
	SINGLE = 'single',
}

export class AlbumsCollection extends BasicItemsCollection {
	albums: Album[] = [];

	constructor(protected data: AlbumsCollectionResponse) {
		super(data);
		this.albums = data.items.map(item => new Album(item));
	}
}

export class Album extends BasicDataItem {
	artists: Artist[] = [];

	constructor(protected data: AlbumItemResponse) {
		super(data);
		this.artists = data.artists.map(artist => new Artist(artist));
	}

	get available_markets(): string[] {
		return this.data.available_markets;
	}
	get album_type(): AlbumType {
		return this.data.album_type;
	}
	get type(): AlbumType {
		return this.data.type;
	}
	get total_tracks(): number {
		return this.data.total_tracks;
	}
	get release_date_precision(): ReleaseDatePrecision {
		return this.data.release_date_precision;
	}
	get release_date(): string {
		return this.data.release_date;
	}
}

