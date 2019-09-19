import { BaseDataItem, BaseItem } from './base.model';
import { ArtistItem } from './artist.model';

export interface AlbumsResponse {
	albums: Albums;
}

export interface Albums extends BaseDataItem {
	items: AlbumItem[];
}

export interface AlbumItem extends BaseItem {
	available_markets: string[];
	album_type: AlbumType;
	artists: ArtistItem[];
	type: AlbumType;
	total_tracks: number;
	release_date_precision: ReleaseDatePrecision;
	release_date: string;
}

export enum ReleaseDatePrecision {
	DAY = "day",
	YEAR = "year",
}

export enum AlbumType {
	ALBUM = "album",
	SINGLE = "single",
}


