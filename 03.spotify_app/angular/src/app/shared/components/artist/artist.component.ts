import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Artist } from '../../models/artists.model';
import { BasicImageData } from '../../models/basic.model';
import { COVER_SIZE } from 'src/app/config/constants';

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