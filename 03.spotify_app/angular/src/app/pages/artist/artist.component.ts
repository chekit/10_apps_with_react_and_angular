import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin, BehaviorSubject } from 'rxjs';
import { map, switchMap, pluck } from 'rxjs/operators';

import { ArtistPageModel } from './../../shared/models/artist-page.model';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
	selector: 'sp-artist-page',
	styleUrls: ['./artist.component.scss'],
	templateUrl: './artist.component.html'
})
export class ArtistPageComponent implements OnInit {
	model: ArtistPageModel;

	isLoading: BehaviorSubject<boolean> = new BehaviorSubject(true);

	externalResources: [string, string][] = [];

	constructor(
		private route: ActivatedRoute,
		private spotifyService: SpotifyService
	) {}

	ngOnInit(): void {
		this.route.params
			.pipe(
				pluck('id'),
				switchMap((id: string) => {
					return forkJoin([
						this.spotifyService.getArtistById(id),
						this.spotifyService.getAlbumsByArtistId(id)
					]);
				})
			)
			.subscribe({
				next: ([artist, albums]: any[]) => {
					this.model = new ArtistPageModel(artist, albums);
					this.externalResources = Object.entries(this.model.artist.external_urls);
					this.isLoading.next(false);
				},
				error: err => {
					console.warn(err);
					this.isLoading.next(false);
					this.model = null;
				}
			});
	}
}