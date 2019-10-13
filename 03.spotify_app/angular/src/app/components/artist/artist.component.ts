import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ArtistItem, COVER_SIZE } from 'src/app/models/artist.model';

import { Image } from '../../models/base.model';

@Component({
	selector: 'sp-artist',
	templateUrl: './artist.component.html',
	styleUrls: ['./artist.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistComponent {
	@Input() model: ArtistItem;

	get artistPhoto(): Image {
		return this.model.images.find(image => image.width === COVER_SIZE) || null;
	}
}