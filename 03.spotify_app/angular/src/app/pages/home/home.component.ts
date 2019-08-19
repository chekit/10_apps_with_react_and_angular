import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

import { APP_TITLE } from '../app-title';

export enum HomePageStateTypes {
	ERROR,
	DEFAULT,
	LOADING
}

interface HomePageState {
	type: HomePageStateTypes;
	data?: any;
}

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
		private location: Location,
		private router: Router
	) { }

	ngOnInit(): void {
		this.title.setTitle(`${APP_TITLE} - Home`);
	}

	onQueryChange(query: string): void {
		this.updateUrl(query);

		this.setState(HomePageStateTypes.LOADING);

		this.spotifyService.searchMusic(query)
			.subscribe(
				(data: any) => this.setState(HomePageStateTypes.DEFAULT, data),
				(err: HttpErrorResponse) => this.setState(HomePageStateTypes.ERROR, 'Something goes wrong!')
			)
	}

	isError(): boolean {
		return this.state.type === HomePageStateTypes.ERROR;
	}

	isLoading(): boolean {
		return this.state.type === HomePageStateTypes.LOADING;
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