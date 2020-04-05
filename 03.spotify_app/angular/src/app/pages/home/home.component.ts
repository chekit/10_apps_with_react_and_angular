import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { forkJoin, fromEvent, Observable, Subject, combineLatest, of } from 'rxjs';
import { filter, switchMap, takeUntil, exhaustMap, tap, delay, distinctUntilChanged, map } from 'rxjs/operators';
import { ITEMS_LIMIT } from 'src/app/config/constants';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { RouteTitleService } from 'src/app/core/services/title.service';
import { ArtistComponent } from 'src/app/shared/components/artist/artist.component';
import { Album } from 'src/app/shared/models/albums.model';
import { Artist, ArtistsCollection } from 'src/app/shared/models/artists.model';

import * as fromStore from './../../store';

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
	@ViewChild(ArtistComponent) artistComponent: ArtistComponent;

	currentQuery$: Observable<string>;
	loading$: Observable<boolean>;
	error$: Observable<string>;
	total$: Observable<number>;
	artists$: Observable<Artist[]>;

	private offset: number = 0;
	private total: number = 0;

	private itemsPerPage: number = 10;
	private itemHeight: number = 30;

	private destroy$: Subject<boolean> = new Subject();

	constructor(
		private routeTitle: RouteTitleService,
		private route: ActivatedRoute,
		private router: Router,
		private store: Store<fromStore.AppState>
	) { }

	ngOnInit(): void {
		this.routeTitle.setTitle(PAGE_NAME);

		this.currentQuery$ = this.store.pipe(select(fromStore.selectQuery));
		this.loading$ = this.store.pipe(select(fromStore.selectLoading));
		this.error$ = this.store.pipe(select(fromStore.selectError));
		this.artists$ = this.store.pipe(select(fromStore.selectArtists));
		this.total$ = this.store.pipe(select(fromStore.selectTotal));

		// this.initPageByScroll();
	}

	ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.complete();
	}

	onQueryChange(query: string): void {
		this.store.dispatch(new fromStore.SetQueryAction(query));
		this.store.dispatch(new fromStore.LoadArtistsAction({ q: query }));
	}

	showArtistInfo({ id }: Artist): void {
		this.router.navigate([`/artist/${id}`]);
	}

	trackById(index: number, item: Album): string {
		return item.id;
	}

	private initPageByScroll(): void {
		fromEvent(document.body, 'scroll')
			.pipe(
				distinctUntilChanged(),
				filter((event: Event) => {
					const body = event.target as HTMLElement;
					const scrollEvailable = Math.floor(body.scrollHeight - body.getBoundingClientRect().height);
					const scrolled = Math.round(body.scrollTop);
					console.log(scrolled, scrollEvailable);
					return scrolled >= scrollEvailable;
				}),
				switchMap(() => combineLatest([
					this.store.pipe(select(fromStore.selectArtists)),
					this.store.pipe(select(fromStore.selectTotal)),
				])),
				tap((data) => console.log(data)),
				filter(([data, total]: [Artist[], number]) => !!data && !!total),
				filter(([data, total]: [Artist[], number]) => total > data.length),
				switchMap(() => combineLatest([
					this.store.pipe(select(fromStore.selectOffset)),
					this.store.pipe(select(fromStore.selectQuery)),
				])),
				tap(([offset, query]: [number, string]) => {
					return of(this.store.dispatch(new fromStore.LoadArtistsAction({ q: query, offset: `${offset + ITEMS_LIMIT}` })));
				}),
				takeUntil(this.destroy$)
			)
			.subscribe(() => {
				console.log('test')
			});
	}
}