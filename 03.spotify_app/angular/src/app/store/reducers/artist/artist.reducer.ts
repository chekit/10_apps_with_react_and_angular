import { AlbumsCollection } from 'src/app/shared/models/albums.model';
import { Artist } from 'src/app/shared/models/artists.model';

import {
    ArtistActions,
    ArtistActionTypes,
    LoadArtistAlbumsFailureAction,
    LoadArtistAlbumsSucessAction,
    LoadArtistFailureAction,
    LoadArtistSuccessAction,
} from '../../actions/artist/artist.action';

export interface ArtistState {
    loadingArtistData: boolean;
    loadingAlbumsData: boolean;
    errorArtistData: string;
    errorAlbumsData: string;
    artist: Artist;
    albums: AlbumsCollection;
}

export const artistInitialState: ArtistState = {
    loadingArtistData: false,
    loadingAlbumsData: false,
    errorArtistData: null,
    errorAlbumsData: null,
    artist: null,
    albums: null
};

export function artistReducer(state: ArtistState = artistInitialState, action: ArtistActions) {
    switch (action.type) {
        case ArtistActionTypes.LOAD_ARTIST:
            return {
                ...state,
                loadingArtistData: true
            };
        case ArtistActionTypes.LOAD_ARTIST_SUCCESS:
            return {
                ...state,
                artist: (action as LoadArtistSuccessAction).payload,
                loadingArtistData: false
            };
        case ArtistActionTypes.LOAD_ARTIST_FAILURE:
            return {
                ...state,
                artist: null,
                errorArtistData: (action as LoadArtistFailureAction).payload,
                loadingArtistData: false
            };
        case ArtistActionTypes.LOAD_ALBUMS:
            return {
                ...state,
                loadingAlbumstData: true
            };
        case ArtistActionTypes.LOAD_ALBUMS_SUCCESS:
            return {
                ...state,
                albums: (action as LoadArtistAlbumsSucessAction).payload,
                loadingAlbumsData: false
            };
        case ArtistActionTypes.LOAD_ALBUMS_FAILURE:
            return {
                ...state,
                albums: null,
                errorAlbumsData: (action as LoadArtistAlbumsFailureAction).payload,
                loadingAlbumsData: false
            };
        default:
            return state;
    }
}