import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { COVER_SIZE } from '@app/config/constants';
import { Artist } from '@app/shared/models/artists.model';
import { BasicImageData } from '@app/shared/models/basic.model';

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