import { FACE_SIZE } from 'src/app/config/constants';

import { AlbumsCollection } from './albums.model';
import { Artist } from './artists.model';
import { BasicImageData, BasicImageDataResponse } from './basic.model';


export class ArtistPageModel {
	constructor(
		public artist: Artist,
		public albums: AlbumsCollection
	) { }

	get artistImage(): string {
		const [image]: BasicImageData[] = this.artist.images
			.filter((item: BasicImageDataResponse) => item.width === FACE_SIZE)
			.map((item: BasicImageDataResponse) => new BasicImageData(item));

		return image ? image.url : null;
	}
}