import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArtistItem } from 'src/app/models/artist.model';

import { Image } from '../../models/base.model';

const COVER_SIZE: number = 300;

@Component({
	selector: 'sp-artist',
	templateUrl: './artist.component.html',
	styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
	@Input() model: ArtistItem;

	@Output() showAlbum: EventEmitter<string> = new EventEmitter();
	@Output() shoowArtist: EventEmitter<string> = new EventEmitter();

	get albumCover(): Image {
		return this.model.images.find(image => image.width === COVER_SIZE) || null;
	}

	onArtistClick(href: string): void {
		this.shoowArtist.emit(href);
	}
	
	onAlbumClick(href: string): void {
		this.showAlbum.emit(href);
	}
}