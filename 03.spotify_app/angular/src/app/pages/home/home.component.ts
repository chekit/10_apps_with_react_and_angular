import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Albums, AlbumItem } from '../../models/albums.model';
import { SpotifyService } from '../../services/spotify.service';
import { APP_TITLE } from '../app-title';
import { Artists, ArtistItem } from 'src/app/models/artist.model';

export enum HomePageStateTypes {
	ERROR,
	DEFAULT,
	LOADING
}

interface HomePageState {
	type: HomePageStateTypes;
	data?: HomePageData;
}

export type HomePageData = string | Artists;

@Component({
	selector: 'ps-home-page',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
	state: HomePageState = {
		type: HomePageStateTypes.DEFAULT,
		data: null
	}

	constructor(
		private title: Title,
		private spotifyService: SpotifyService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
		this.title.setTitle(`${APP_TITLE} - Home`);
	}

	onQueryChange(query: string): void {
		this.updateUrl(query);

		this.setState(HomePageStateTypes.LOADING);

		this.spotifyService.searchArtist(query)
			.subscribe(
				(data: Artists) => this.setState(HomePageStateTypes.DEFAULT, data),
				() => this.setState(HomePageStateTypes.ERROR, 'Something goes wrong!')
			)
	}

	isError(): boolean {
		return this.state.type === HomePageStateTypes.ERROR;
	}

	isLoading(): boolean {
		return this.state.type === HomePageStateTypes.LOADING;
	}

	trackById(index: number, item: AlbumItem): string {
		return item.id;
	}

	private setState(type: HomePageStateTypes, data?: any): void {
		this.state = {
			...this.state,
			type,
			data
		}
	}

	private updateUrl(q: string): void {
		this.router.navigate(
			[],
			{
				relativeTo: this.route,
				queryParams: { q }
			}
		)
	}
}