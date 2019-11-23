import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AlbumItem } from 'src/app/models/albums.model';
import { COVER_SIZE } from 'src/app/models/artist.model';
import { Image } from 'src/app/models/base.model';

@Component({
	selector: 'sp-album',
	templateUrl: './album.component.html',
	styleUrls: ['./album.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent {
	@Input() model: AlbumItem;

	get albumImage(): string {
		const [image]: Image[] = this.model.images.filter((image: Image) => image.width === COVER_SIZE);

		return image ? image.url : null;
	}
}