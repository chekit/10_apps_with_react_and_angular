import { createSelector } from '@ngrx/store';

import { AppState } from '../..';
import { HomeState } from '../../reducers';
import { ArtistsCollection } from 'src/app/shared/models/artists.model';

export const getHomeState = (state: AppState) => state.home;

export const selectHomeQuery = createSelector(getHomeState, (state: HomeState) => state.query);
export const selectHomeLoading = createSelector(getHomeState, (state: HomeState) => state.loading);
export const selectHomeArtists = createSelector(getHomeState, (state: HomeState) => state.collection);
export const selectHomeTotal = createSelector(getHomeState, (state: HomeState) => state.total);
export const selectHomeOffset = createSelector(getHomeState, (state: HomeState) => state.offset);
export const selectHomeError = createSelector(getHomeState, (state: HomeState) => state.error);
