import { createSelector } from '@ngrx/store';

import { AppState } from '../..';
import { HomeState } from '../../reducers';
import { ArtistsCollection } from 'src/app/shared/models/artists.model';

export const getHomeState = (state: AppState) => state.home;

export const selectQuery = createSelector(getHomeState, (state: HomeState) => state.query);
export const selectLoading = createSelector(getHomeState, (state: HomeState) => state.loading);
export const selectArtists = createSelector(getHomeState, (state: HomeState) => state.collection);
export const selectTotal = createSelector(getHomeState, (state: HomeState) => state.total);
export const selectOffset = createSelector(getHomeState, (state: HomeState) => state.offset);
export const selectError = createSelector(getHomeState, (state: HomeState) => state.error);
