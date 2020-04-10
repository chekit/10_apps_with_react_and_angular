import { createSelector } from '@ngrx/store';

import { AppState } from '../..';
import { GlobalState } from '../../reducers';

export const getGlobalState = (state: AppState) => state.global;

export const selectGlobalLoading = createSelector(getGlobalState, (state: GlobalState) => state.loading);
export const selectGlobalToken = createSelector(getGlobalState, (state: GlobalState) => state.token);
export const selectGlobalError = createSelector(getGlobalState, (state: GlobalState) => state.error);
