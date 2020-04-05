import { createSelector } from '@ngrx/store';

import { AppState } from '../..';
import { HomeState } from '../../reducers';
import { ArtistsCollection } from 'src/app/shared/models/artists.model';

export const getHomeState = (state: AppState) => state.home;

export const selectQuery = createSelector(getHomeState, (state: HomeState) => state.query);
export const selectLoading = createSelector(getHomeState, (state: HomeState) => state.loading);
export const selectCollectionData = createSelector(getHomeState, (state: HomeState) => state.collection);
export const selectArtists = createSelector(getHomeState, selectCollectionData, (state: HomeState, data: ArtistsCollection) => data && data.artists);
export const selectError = createSelector(getHomeState, (state: HomeState) => state.error);
