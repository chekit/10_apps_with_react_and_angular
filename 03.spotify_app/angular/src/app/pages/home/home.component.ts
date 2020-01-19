import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { filter, first, takeUntil } from 'rxjs/operators';
import { ITEMS_LIMIT } from 'src/app/config/constants';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { RouteTitleService } from 'src/app/core/services/title.service';
import { Album } from 'src/app/shared/models/albums.model';
import { Artist, ArtistsCollection } from 'src/app/shared/models/artists.model';
import { ArtistComponent } from 'src/app/shared/components/artist/artist.component';

export enum HomePageStateTypes {
	ERROR,
	DEFAULT,
	LOADING
}

export type HomePageData = string | Artist[];

interface HomePageState {
	type: HomePageStateTypes;
	data?: HomePageData;
}

const PAGE_NAME = 'Home';

@Component({
	selector: 'ps-home-page',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
	@ViewChild(ArtistComponent, { static: false }) artistComponent: ArtistComponent;

	currentQuery: string;

	state: HomePageState = {
		type: HomePageStateTypes.DEFAULT,
		data: null
	};

	private offset: number = 0;
	private total: number = 0;

	private itemsPerPage: number = 10;
	private itemHeight: number = 30;

	private destroy$: Subject<boolean> = new Subject();

	constructor(
		private routeTitle: RouteTitleService,
		private spotifyService: SpotifyService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
		this.routeTitle.setTitle(PAGE_NAME);

		this.initQueryParams();
		this.initPageByScroll();
	}

	ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.complete();
	}

	onQueryChange(query: string): void {
		this.updateUrl(query);
		this.state.data = null;
		this.getArtistsByQuery(query);
	}

	showArtistInfo({ id }: Artist): void {
		this.router.navigate([`/artist/${id}`]);
	}

	isError(): boolean {
		return this.state.type === HomePageStateTypes.ERROR;
	}

	isLoading(): boolean {
		return this.state.type === HomePageStateTypes.LOADING;
	}

	trackById(index: number, item: Album): string {
		return item.id;
	}

	private setState(type: HomePageStateTypes, data?: any): void {
		this.state = {
			...this.state,
			type,
			data: data || this.state.data
		}
	}

	private updateUrl(query: string): void {
		this.currentQuery = query;

		this.router.navigate(
			[],
			{
				relativeTo: this.route,
				queryParams: { q: this.currentQuery }
			}
		)
	}

	private getArtistsByQuery(q: string, offset: number = 0): void {
		if (this.state.type === HomePageStateTypes.LOADING) return;

		this.setState(HomePageStateTypes.LOADING);

		this.spotifyService.searchArtists({ q, offset: `${offset}` })
			.pipe(
				takeUntil(this.destroy$)
			)
			.subscribe(
				(response: ArtistsCollection) => {
					let data;

					if (response) {
						const { artists, total, offset: responseOffset } = response;

						data = [...(this.state.data as Artist[] || []), ...artists];
						this.total = total;
						this.offset = responseOffset;
					}

					this.setState(HomePageStateTypes.DEFAULT, data);
				},
				() => this.setState(HomePageStateTypes.ERROR, 'Something went wrong!')
			);
	}

	private initQueryParams(): void {
		this.route.queryParams
			.pipe(
				filter(params => params.q),
				first(),
			)
			.subscribe(params => {
				this.currentQuery = params.q;
				this.onQueryChange(params.q);
			});
	}

	private initPageByScroll(): void {
		fromEvent(document.body, 'scroll')
			.pipe(
				filter((event: Event) => {
					const body = event.target as HTMLElement;
					const scrollEvailable = Math.floor(body.scrollHeight - body.getBoundingClientRect().height);
					const scrolled = Math.round(body.scrollTop);

					return scrolled >= scrollEvailable;
				}),
				filter(() => this.state.data && this.state.data.length
					? this.total > this.state.data.length
					: true
				),
				takeUntil(this.destroy$)
			)
			.subscribe(() => this.getArtistsByQuery(this.currentQuery, this.offset + ITEMS_LIMIT))
	}

}