import { BaseDataItem, BaseItem } from './base.model';

export interface ArtistsResponse {
	artists: Artists;
}

export interface Artists extends BaseDataItem {
	items: ArtistItem[];
}

export interface ArtistItem extends BaseItem {
	followers: Followers;
	type: ArtistType;
	genres: string[];
	popularity: number;
 }

export enum ArtistType {
	ARTIST = "artist",
}

export interface Followers {
	href: null;
	total: number;
}

export const COVER_SIZE: number = 300;
export const FACE_SIZE: number = 200;
