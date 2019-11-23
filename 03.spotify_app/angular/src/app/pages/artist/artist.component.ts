import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SpotifyService } from 'src/app/core';
import { ArtistPageModel } from 'src/app/models/artist-page.model';

@Component({
	selector: 'sp-artist-page',
	styleUrls: ['./artist.component.scss'],
	templateUrl: './artist.component.html'
})
export class ArtistPageComponent implements OnInit {
	model: ArtistPageModel;

	private loading: boolean = true;

	constructor(
		private route: ActivatedRoute,
		private spotifySerrvice: SpotifyService
	) {

	}

	ngOnInit(): void {
		this.route.params
			.pipe(
				map((params: Params) => params.id),
				switchMap((id: string) => {
					return forkJoin([
						this.spotifySerrvice.getArtistById(id),
						this.spotifySerrvice.getAlbumsByArtistId(id)
					])
				})
			)
			.subscribe(([artist, albums]: any[]) => {
				this.model = new ArtistPageModel(artist, albums);
				this.loading = false;
			})
	}

	isLoading(): boolean {
		return this.loading;
	}
}