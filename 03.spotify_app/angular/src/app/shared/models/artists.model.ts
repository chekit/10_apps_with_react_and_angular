import { BasicItemsCollectionResponse, BasicDataItemResponse, BasicDataItem, BasicItemsCollection } from './basic.model';

export interface ArtistsResponse {
	artists: ArtistsCollectionResponse;
}

export interface ArtistsCollectionResponse extends BasicItemsCollectionResponse {
	items: ArtistItemResponse[];
}

export interface ArtistItemResponse extends BasicDataItemResponse {
	followers: FollowersResponse;
	type: ArtistType;
	genres: string[];
	popularity: number;
}

export enum ArtistType {
	ARTIST = 'artist',
}

export interface FollowersResponse {
	href: string;
	total: number;
}

export class Followers implements FollowersResponse {
	constructor(private data: FollowersResponse) { }
	get href(): string {
		return this.data.href;
	}
	get total(): number {
		return this.data.total;
	}
}

export class Artist extends BasicDataItem {
	private _folowwers: Followers = null;

	constructor(protected data: ArtistItemResponse) {
		super(data);
		this._folowwers = new Followers(data.followers);
	}

	get followers(): Followers {
		return this._folowwers;
	}
	get type(): ArtistType {
		return this.data.type;
	}
	get genres(): string[] {
		return this.data.genres;
	}
	get popularity(): number {
		return this.data.popularity;
	}
}

export class ArtistsCollection extends BasicItemsCollection {
	private _artists: Artist[] = [];

	constructor(protected data: ArtistsCollectionResponse) {
		super(data);
		this._artists = data.items.map(artist => new Artist(artist));
	}

	get artitst(): Artist[] {
		return this._artists;
	}
}