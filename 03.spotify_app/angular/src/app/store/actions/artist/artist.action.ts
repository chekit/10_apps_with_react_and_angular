import { Action } from '@ngrx/store';
import { Artist } from 'src/app/shared/models/artists.model';
import { AlbumsCollection } from 'src/app/shared/models/albums.model';

export enum ArtistActionTypes {
    LOAD_ARTIST = '[Artist] Load Artist',
    LOAD_ARTIST_SUCCESS = '[Artist] Load Artist Success',
    LOAD_ARTIST_FAILURE = '[Artist] Load Artist Filure',
    LOAD_ALBUMS = '[Artist] Load Albums',
    LOAD_ALBUMS_SUCCESS = '[Artist] Load Albums Success',
    LOAD_ALBUMS_FAILURE = '[Artist] Load Albums Failure',
}

export class LoadArtistAction implements Action {
    type = ArtistActionTypes.LOAD_ARTIST;

    constructor(public payload: string) { }
}

export class LoadArtistSuccessAction implements Action {
    type = ArtistActionTypes.LOAD_ARTIST_SUCCESS;

    constructor(public payload: Artist) { }
}

export class LoadArtistFailureAction implements Action {
    type = ArtistActionTypes.LOAD_ARTIST_FAILURE;

    constructor(public payload: string) { }
}

export class LoadArtistAlbumsAction implements Action {
    type = ArtistActionTypes.LOAD_ALBUMS;

    constructor(public payload: string) { }
}

export class LoadArtistAlbumsSucessAction implements Action {
    type = ArtistActionTypes.LOAD_ALBUMS_SUCCESS;

    constructor(public payload: AlbumsCollection) { }
}

export class LoadArtistAlbumsFailureAction implements Action {
    type = ArtistActionTypes.LOAD_ALBUMS_FAILURE;

    constructor(public payload: string) { }
}
export type ArtistActions = LoadArtistAction |
    LoadArtistSuccessAction |
    LoadArtistFailureAction |
    LoadArtistAlbumsAction |
    LoadArtistAlbumsSucessAction |
    LoadArtistAlbumsFailureAction;
