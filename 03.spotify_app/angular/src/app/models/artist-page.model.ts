import { Albums } from './albums.model';
import { ArtistItem, FACE_SIZE } from './artist.model';
import { Image } from './base.model';

export class ArtistPageModel {
	constructor(
		public artist: ArtistItem,
		public albums: Albums
	) { }

	get artistImage(): string {
		const [image]: Image[] = this.artist.images.filter((image: Image) => image.width === FACE_SIZE);

		return image ? image.url : null;
	}
}