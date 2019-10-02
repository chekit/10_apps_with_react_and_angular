import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Albums, AlbumItem } from '../../models/albums.model';
import { SpotifyService } from '../../services/spotify.service';
import { APP_TITLE } from '../app-title';
import { Artists, ArtistItem } from 'src/app/models/artist.model';
import { fromEvent } from 'rxjs';
import { first, filter } from 'rxjs/operators';
import { ArtistComponent } from 'src/app/components/artist/artist.component';

export enum HomePageStateTypes {
	ERROR,
	DEFAULT,
	LOADING
}

interface HomePageState {
	type: HomePageStateTypes;
	data?: HomePageData;
}

export type HomePageData = string | ArtistItem[];

@Component({
	selector: 'ps-home-page',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
	@ViewChild(ArtistComponent, { static: false }) artistComponent: ArtistComponent;

	initQuery: string;

	state: HomePageState = {
		type: HomePageStateTypes.DEFAULT,
		data: null
	}

	private offset: number = 0;
	private total: number = 0;

	constructor(
		private title: Title,
		private spotifyService: SpotifyService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
		this.title.setTitle(`${APP_TITLE} - Home`);

		this.route.queryParams
			.pipe(
				filter(params => params.q),
				first()
			)
			.subscribe(params => {
				this.initQuery = params.q;
				this.onQueryChange(params.q);
			})

		fromEvent(document.body, 'scroll')
			.subscribe(() => console.log('scroll'))
	}

	onQueryChange(query: string): void {
		this.updateUrl(query);

		this.setState(HomePageStateTypes.LOADING);

		this.spotifyService.searchArtist({ q: query })
			.subscribe(
				(response: Artists) => {
					let data;

					if (response) {
						const { items, total, offset } = response;

						data = [...(this.state.data as ArtistItem[] || []), ...items];
						this.total = total;
						this.offset = offset;
					}

					this.setState(HomePageStateTypes.DEFAULT, data);
				},
				() => this.setState(HomePageStateTypes.ERROR, 'Something goes wrong!')
			);
	}

	showArtistInfo(artist: ArtistItem): void {
		this.router.navigate([`/artist/${artist.id}`]);
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

	private updateUrl(query: string): void {
		this.router.navigate(
			[],
			{
				relativeTo: this.route,
				queryParams: { q: query }
			}
		)
	}
}