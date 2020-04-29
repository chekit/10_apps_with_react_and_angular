import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { ArtistsCollection } from 'src/app/shared/models';

import { HomeActionTypes, LoadArtistsAction, LoadArtistsFailureAction, LoadArtistsSuccesAction } from '../../actions';

@Injectable()
export class HomeEffects {
    constructor(
        private actions$: Actions,
        private spotifyService: SpotifyService
    ) {}

    @Effect()
    loadArtists = this.actions$
        .pipe(
            ofType(HomeActionTypes.LOAD_ARTISTS),
            switchMap((action: LoadArtistsAction) => this.spotifyService.searchArtists(action.payload)
                .pipe(
                    map((result: ArtistsCollection) => new LoadArtistsSuccesAction(result)),
                    catchError(error => of(new LoadArtistsFailureAction('Error Loading Artists')))
                )
            )
        )
}