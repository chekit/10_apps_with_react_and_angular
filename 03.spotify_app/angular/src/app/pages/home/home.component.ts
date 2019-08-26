import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Albums, Item } from '../../models/albums.response';
import { SpotifyService } from '../../services/spotify.service';
import { APP_TITLE } from '../app-title';

export enum HomePageStateTypes {
	ERROR,
	DEFAULT,
	LOADING
}

interface HomePageState {
	type: HomePageStateTypes;
	data?: HomePageData;
}

export type HomePageData = string | Albums;

@Component({
	selector: 'ps-home-page',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
	state: HomePageState = {
		type: HomePageStateTypes.DEFAULT
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

		this.spotifyService.searchAlbums(query)
			.subscribe(
				(data: Albums) => this.setState(HomePageStateTypes.DEFAULT, data),
				(err: HttpErrorResponse) => this.setState(HomePageStateTypes.ERROR, 'Something goes wrong!')
			)
	}

	isError(): boolean {
		return this.state.type === HomePageStateTypes.ERROR;
	}

	isLoading(): boolean {
		return this.state.type === HomePageStateTypes.LOADING;
	}

	getAlbums(): Item[] {
		return (this.state.data && (this.state.data as Albums).items) || [];
	}

	trackById(index: number, item: Item): string {
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