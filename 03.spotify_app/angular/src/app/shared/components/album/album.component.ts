import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { COVER_SIZE } from '@app/config/constants';
import { BasicImageData } from '@app/shared/models/basic.model';

import { Album } from './../../models/albums.model';

@Component({
	selector: 'sp-album',
	templateUrl: './album.component.html',
	styleUrls: ['./album.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent {
	@Input() model: Album;

	get albumImage(): string {
		const [image]: BasicImageData[] = this.model.images.filter((image: BasicImageData) => image.width === COVER_SIZE);

		return image ? image.url : null;
	}
}