import { createSelector } from '@ngrx/store';

import { AppState } from '../..';
import { ArtistState } from '../../reducers';
import { Artist } from 'src/app/shared/models/artists.model';
import { AlbumsCollection } from 'src/app/shared/models/albums.model';
import { ArtistPageModel } from 'src/app/shared/models/artist-page.model';

export const getArtistState = (state: AppState) => state.artist;

export const selectArtist = createSelector(getArtistState, ({ artist }: ArtistState) => artist);
export const selectArtistAlbums = createSelector(getArtistState, ({ albums }: ArtistState) => albums);

export const selectArtistAndAlbums = createSelector(selectArtist, selectArtistAlbums, (artist: Artist, albums: AlbumsCollection) => new ArtistPageModel(artist, albums));

export const selectArtistLoading = createSelector(getArtistState, ({ loadingArtistData }: ArtistState) => loadingArtistData);
export const selectAlbumsLoading = createSelector(getArtistState, ({ loadingAlbumsData }: ArtistState) => loadingAlbumsData);
export const selectArtistDataLoading = createSelector(selectArtistLoading, selectAlbumsLoading, (infoLoader, albumsLoader) => infoLoader && albumsLoader);

export const selectArtistError = createSelector(getArtistState, ({ errorArtistData }: ArtistState) => errorArtistData);
export const selectArtistAlbumsError = createSelector(getArtistState, ({ errorAlbumsData: errorAlbumstData }: ArtistState) => errorAlbumstData);
export const selectArtistDataError = createSelector(selectArtistError, selectArtistAlbumsError, (artistErrorMessage, albumsErrorMessage) => [
    `${artistErrorMessage || ''}`,
    `${albumsErrorMessage || ''}`
].join(''));
