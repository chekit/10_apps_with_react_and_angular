import { Action } from '@ngrx/store';
import { SearchConfig } from 'src/app/core/services/spotify.service';
import { ArtistsCollection } from 'src/app/shared/models';

export enum HomeActionTypes {
    SET_QUERY = '[Home] Set user query',
    LOAD_ARTISTS = '[Home] Load Artists',
    LOAD_ARTISTS_SUCCESS = '[Home] Load Artists Success',
    LOAD_ARTISTS_FAILURE = '[Home] Load Artists Failure',
}

export class SetQueryAction implements Action {
    type = HomeActionTypes.SET_QUERY;

    constructor(public readonly payload: string) { }
}

export class LoadArtistsAction implements Action {
    type = HomeActionTypes.LOAD_ARTISTS;

    constructor(public readonly payload: SearchConfig) { }
}

export class LoadArtistsSuccesAction implements Action {
    type = HomeActionTypes.LOAD_ARTISTS_SUCCESS;

    constructor(public readonly payload: ArtistsCollection) { }
}

export class LoadArtistsFailureAction implements Action {
    type = HomeActionTypes.LOAD_ARTISTS_FAILURE;

    constructor(public readonly payload: string) { }
}

export type HomeActions = SetQueryAction |
    LoadArtistsAction |
    LoadArtistsSuccesAction |
    LoadArtistsFailureAction;
