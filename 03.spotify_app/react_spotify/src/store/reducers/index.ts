import { SpotifyAppActions } from './../actions';

export interface AppState {
    initialized: boolean,
    home: {
        query: string;
        artists: any[];
        currentPage: number;
        offset: number;
        error: string | null;
    },
    artist: {
        albums: any[];
        url: string;
        generes: any[];
        error: string | null;
    }
}

const inititalState: AppState = {
    initialized: false,
    home: {
        query: '',
        artists: [],
        currentPage: 0,
        offset: 0,
        error: null
    },
    artist: {
        albums: [],
        url: '',
        generes: [],
        error: null
    }
};

export default function appReducer(state: AppState = inititalState, action: SpotifyAppActions) {
    switch (action.type) {
        default:
            return state;
    }
}