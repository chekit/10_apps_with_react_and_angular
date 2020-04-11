import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

import { LoadArtistsAction } from '../../actions';
import { GetTokeFailureAction, GetTokeSuccessAction, GlobalActionTypes } from '../../actions/global/global.action';

@Injectable()
export class GlobalEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }

    @Effect()
    loadArtists = this.actions$
        .pipe(
            ofType(GlobalActionTypes.GET_TOKEN),
            switchMap((action: LoadArtistsAction) => this.authService.fetchToken()
                .pipe(
                    map(() => new GetTokeSuccessAction()),
                    catchError(() => of(new GetTokeFailureAction('Failed to connect.')))
                )
            )
        )
}