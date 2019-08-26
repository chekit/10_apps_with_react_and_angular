import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Image, Item } from '../../models/albums.response';

const COVER_SIZE: number = 300;

@Component({
	selector: 'sp-album',
	templateUrl: './album.component.html',
	styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
	@Input() model: Item;

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