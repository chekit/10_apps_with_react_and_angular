import { BasicItemsCollectionResponse, BasicDataItemResponse, BasicDataItem, BasicItemsCollection } from './basic.model';

export interface ArtistsSearchResponse {
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
	followers: Followers = null;

	constructor(protected data: ArtistItemResponse) {
		super(data);
		this.followers = new Followers(data.followers);
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
	public artists: Artist[] = [];

	constructor(protected data: ArtistsCollectionResponse) {
		super(data);
		this.artists = data.items.map(artist => new Artist(artist));
	}
}