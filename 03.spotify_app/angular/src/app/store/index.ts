import { ActionReducerMap } from '@ngrx/store';

import { HomeState, GlobalState } from './reducers';
import * as fromReducers from './reducers';

export * from './actions';
export * from './reducers';
export * from './selectors';
export * from './effects';

export interface AppState {
    home: HomeState;
    global: GlobalState;
}

export const reducers: ActionReducerMap<AppState> = {
    home: fromReducers.homeReducer,
    global: fromReducers.globalReducer
}