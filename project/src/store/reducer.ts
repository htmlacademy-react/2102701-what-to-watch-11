import { createReducer } from '@reduxjs/toolkit';
import {switchToGenre, setFilmsDataLoadingStatus, setError, requireAuthorization, loadFilms, showMoreFilms, switchToAllGenres} from './actions';
import {AuthorizationStatus} from '../const';
import { Films } from '../types/film';

type InitialState = {
  genre: string;
  filmsList: Films;
  filmsCount: number;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isFilmsDataLoading: boolean;
};

const initialState: InitialState = {
  genre: 'All Genres',
  filmsList: [],
  filmsCount: 8,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isFilmsDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchToAllGenres, (state, action) => {
      state.genre = 'All Genres';
      state.filmsCount = 8;
    })
    .addCase(switchToGenre, (state, action) => {
      state.genre = action.payload;
      state.filmsCount = 8;
    })
    .addCase(showMoreFilms, (state) => {
      state.filmsCount += 8;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsList = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    });

});

export {reducer};
