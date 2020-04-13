import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { AlbumsCollection } from 'src/app/shared/models/albums.model';
import { Artist } from 'src/app/shared/models/artists.model';

import {
    ArtistActionTypes,
    LoadArtistAction,
    LoadArtistAlbumsAction,
    LoadArtistAlbumsFailureAction,
    LoadArtistAlbumsSucessAction,
    LoadArtistFailureAction,
    LoadArtistSuccessAction,
} from '../../actions/artist/artist.action';

@Injectable()
export class ArtistDataEffects {
    constructor(
        private actions$: Actions,
        private spotifyService: SpotifyService
    ) { }

    @Effect()
    loadArtistData = this.actions$
        .pipe(
            ofType(ArtistActionTypes.LOAD_ARTIST),
            switchMap(({ payload: id }: LoadArtistAction) => this.spotifyService.getArtistById(id)
                .pipe(
                    map((result: Artist) => new LoadArtistSuccessAction(result)),
                    catchError(() => of(new LoadArtistFailureAction('Error load artists data!')))
                )
            )
        );

    @Effect()
    loadAlbumsData = this.actions$
        .pipe(
            ofType(ArtistActionTypes.LOAD_ALBUMS),
            switchMap(({ payload: id }: LoadArtistAlbumsAction) => this.spotifyService.getAlbumsByArtistId(id)
                .pipe(
                    map((result: AlbumsCollection) => new LoadArtistAlbumsSucessAction(result)),
                    catchError(() => of(new LoadArtistAlbumsFailureAction('Error load artists albums data!')))
                )
            )
        );
}