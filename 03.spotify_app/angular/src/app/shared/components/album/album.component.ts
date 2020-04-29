import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { COVER_SIZE } from 'src/app/config/constants';

import { Album, BasicImageData } from '../../models';

const MAIN_SOURCE: string = 'spotify';

@Component({
	selector: 'sp-album',
	templateUrl: './album.component.html',
	styleUrls: ['./album.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent implements OnInit {
	@Input() model: Album;

	albumUrl: string;
	albumImage: string;

	ngOnInit(): void {
		const [image]: BasicImageData[] = this.model.images.filter((item: BasicImageData) => item.width === COVER_SIZE);

		this.albumUrl = this.model.external_urls[MAIN_SOURCE];
		this.albumImage = image ? image.url : null;
	}
}