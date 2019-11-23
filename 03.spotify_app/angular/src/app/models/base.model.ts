export interface BaseDataItem {
	href: string;
	items: BaseItem[];
	limit: number;
	next: string;
	offset: number;
	previous: null;
	total: number;
}

export interface BaseItem {
	images: Image[];
	external_urls: ExternalUrls;
	href: string;
	id: string;
	name: string;
	uri: string;
}

export interface ExternalUrls {
	spotify: string;
}

export interface Image {
	height: number;
	url: string;
	width: number;
}