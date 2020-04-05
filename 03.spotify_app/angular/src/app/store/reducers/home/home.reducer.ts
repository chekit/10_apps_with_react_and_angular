import { Artist, ArtistsCollection } from 'src/app/shared/models/artists.model';

import {
    HomeActions,
    HomeActionTypes,
    LoadArtistsFailureAction,
    LoadArtistsSuccesAction,
    SetQueryAction,
} from '../../actions';

export interface HomeState {
    query: string;
    collection: ArtistsCollection;
    error: string;
    loading: boolean;
}

const homeInitialState: HomeState = {
    query: '',
    collection: null,
    error: '',
    loading: false
};

export function homeReducer(state: HomeState = homeInitialState, action: HomeActions): HomeState {
    switch (action.type) {
        case HomeActionTypes.SET_QUERY:
            return {
                ...state,
                query: (action as SetQueryAction).payload
            };
        case HomeActionTypes.LOAD_ARTISTS:
            return {
                ...state,
                loading: true
            };
        case HomeActionTypes.LOAD_ARTISTS_SUCCESS:
            return {
                ...state,
                collection: (action as LoadArtistsSuccesAction).payload,
                loading: false,
                error: ''
            };
        case HomeActionTypes.LOAD_ARTISTS_FAILURE:
            return {
                ...state,
                collection: null,
                loading: false,
                error: (action as LoadArtistsFailureAction).payload
            };
        default:
            return state;
    }
}