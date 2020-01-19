export interface BasicItemsCollectionResponse {
	href: string;
	items: BasicDataItemResponse[];
	limit: number;
	next: string;
	offset: number;
	previous: null;
	total: number;
}

export interface BasicDataItemResponse {
	images: BasicImageDataResponse[];
	external_urls: ExternalUrls;
	href: string;
	id: string;
	name: string;
	uri: string;
}

export interface ExternalUrls {
	spotify: string;
}

export interface BasicImageDataResponse {
	height: number;
	url: string;
	width: number;
}

export class BasicResponseModel<T> {
	constructor(protected data: T) { }
}

export class BasicItemsCollection extends BasicResponseModel<BasicItemsCollectionResponse> {
	get href(): string {
		return this.data.href;
	}
	get limit(): number {
		return this.data.limit;
	}
	get next(): string {
		return this.data.next;
	}
	get offset(): number {
		return this.data.offset;
	}
	get previous(): null {
		return this.data.previous;
	}
	get total(): number {
		return this.data.total;
	}
}

export class BasicDataItem extends BasicResponseModel<BasicDataItemResponse> {
	images: BasicImageData[] = [];

	constructor(protected data: BasicDataItemResponse) {
		super(data);
		this.images = data.images.map(item => new BasicImageData(item));
	}

	get external_urls(): ExternalUrls {
		return this.data.external_urls;
	}
	get href(): string {
		return this.data.href;
	}
	get id(): string {
		return this.data.id;
	}
	get name(): string {
		return this.data.name;
	}
	get uri(): string {
		return this.data.uri;
	}
}

export class BasicImageData extends BasicResponseModel<BasicImageDataResponse> {
	get height(): number {
		return this.data.height;
	}
	get url(): string {
		return this.data.url;
	}
	get width(): number {
		return this.data.width;
	}
}