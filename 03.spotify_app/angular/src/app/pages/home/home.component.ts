import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SpotifyService } from 'src/app/services/spotify.service';

import { APP_TITLE } from '../app-title';

@Component({
	selector: 'ps-home-page',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
	constructor(
		private title: Title,
		private spotifyService: SpotifyService
	) {}

	ngOnInit(): void {
		this.title.setTitle(`${APP_TITLE} - Home`);
	}

	onQueryChange(query: string): void {
		this.spotifyService.searchMusic(query)
			.subscribe(v => console.log(v))
	}
}