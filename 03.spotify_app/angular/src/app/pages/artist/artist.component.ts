import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artist, ArtistPageModel } from 'src/app/shared/models';

import * as fromStore from './../../store';

@Component({
	selector: 'sp-artist-page',
	styleUrls: ['./artist.component.scss'],
	templateUrl: './artist.component.html'
})
export class ArtistPageComponent implements OnInit {
	model$: Observable<ArtistPageModel>;
	isLoading$: Observable<boolean>;
	externalResources$: Observable<[string, string][]>;
	error$: Observable<string>;
	errorAlbums$: Observable<string>;

	constructor(
		private store: Store<fromStore.AppState>,
		private route: ActivatedRoute,
	) { }

	ngOnInit(): void {
		const { id } = this.route.snapshot.params;

		this.store.dispatch(new fromStore.LoadArtistAction(id));
		this.store.dispatch(new fromStore.LoadArtistAlbumsAction(id));

		this.isLoading$ = this.store.pipe(select(fromStore.selectArtistDataLoading));
		this.error$ = this.store.pipe(select(fromStore.selectArtistDataError));
		this.errorAlbums$ = this.store.pipe(select(fromStore.selectArtistAlbumsError));

		this.model$ = this.store.pipe(select(fromStore.selectArtistAndAlbums));
		this.externalResources$ = this.store.pipe(
			select(fromStore.selectArtist),
			map((data: Artist) => Object.entries(data.external_urls))
		);

	}
}