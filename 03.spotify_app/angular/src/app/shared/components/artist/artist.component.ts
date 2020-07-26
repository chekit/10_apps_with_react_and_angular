import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { COVER_SIZE } from 'src/app/config/constants';

import { Artist, BasicImageData } from '../../models';

@Component({
	selector: 'sp-artist',
	templateUrl: './artist.component.html',
	styleUrls: ['./artist.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistComponent {
	@Input() model: Artist;

	get artistPhoto(): BasicImageData {
		return this.model.images.find(image => image.width === COVER_SIZE) || null;
	}
}