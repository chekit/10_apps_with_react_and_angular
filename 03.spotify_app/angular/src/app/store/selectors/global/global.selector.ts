import { createSelector } from '@ngrx/store';

import { AppState } from '../..';
import { GlobalState } from '../../reducers';

export const getGlobalState = ({ global }: AppState) => global;

export const selectGlobalLoading = createSelector(getGlobalState, ({ loading }: GlobalState) => loading);
export const selectGlobalError = createSelector(getGlobalState, ({ error }: GlobalState) => error);
