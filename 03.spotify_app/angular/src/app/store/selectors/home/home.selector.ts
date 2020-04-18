import { createSelector } from '@ngrx/store';

import { AppState } from '../..';
import { HomeState } from '../../reducers';

export const getHomeState = ({ home }: AppState) => home;

export const selectHomeQuery = createSelector(getHomeState, ({ query }: HomeState) => query);
export const selectHomeLoading = createSelector(getHomeState, ({ loading }: HomeState) => loading);
export const selectHomeArtists = createSelector(getHomeState, ({ collection }: HomeState) => collection);
export const selectHomeTotal = createSelector(getHomeState, ({ total }: HomeState) => total);
export const selectHomeOffset = createSelector(getHomeState, ({ offset }: HomeState) => offset);
export const selectHomeError = createSelector(getHomeState, ({ error }: HomeState) => error);

export const selectArtistsAndTotal = createSelector(selectHomeTotal, selectHomeArtists, (total, artists) => ({ total, artists }));
export const selectQueryAndOffset = createSelector(selectHomeOffset, selectHomeQuery, (offset, query) => ({ offset, query }));
