import { BaseDataItem, BaseItem } from './base.model';

export interface ArtistsResponse {
	artists: Artists;
}

export interface Artists extends BaseDataItem {
	items: ArtistItem[];
}

export interface ArtistItem extends BaseItem { }

export enum ArtistType {
	ARTIST = "artist",
}