import { createReducer } from '@reduxjs/toolkit';
import {setFilmsDataLoadingStatus, setError, requireAuthorization, loadFilms, showMoreFilms, switchToAllGenres, switchToComedies, switchToCrime, switchToDocumentary, switchToDramas, switchToHorror, switchToKidsAndFamily, switchToRomance, switchToSciFi, switchToThrillers} from './actions';
import {AuthorizationStatus} from '../const';
import { Films } from '../types/film';

type InitialState = {
  genre: string,
  filmsList: Films,
  filmsCount: number,
  authorizationStatus: AuthorizationStatus,
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
      state.filmsList = action.payload;
      state.filmsCount = 8;
    })
    .addCase(switchToComedies, (state, action) => {
      state.genre = 'Comedies';
      state.filmsList = action.payload;
      state.filmsCount = 8;
    })
    .addCase(switchToCrime, (state, action) => {
      state.genre = 'Crime';
      state.filmsList = action.payload;;
      state.filmsCount = 8;
    })
    .addCase(switchToDramas, (state, action) => {
      state.genre = 'Dramas';
      state.filmsList = state.filmsList = action.payload;;
      state.filmsCount = 8;
    })
    .addCase(switchToDocumentary, (state, action) => {
      state.genre = 'Documentary';
      state.filmsList = state.filmsList = action.payload;;
      state.filmsCount = 8;
    })
    .addCase(switchToHorror, (state, action) => {
      state.genre = 'Horror';
      state.filmsList = state.filmsList = action.payload;;
      state.filmsCount = 8;
    })
    .addCase(switchToKidsAndFamily, (state, action) => {
      state.genre = 'Kids & Family';
      state.filmsList = state.filmsList = action.payload;;
      state.filmsCount = 8;
    })
    .addCase(switchToRomance, (state, action) => {
      state.genre = 'Romance';
      state.filmsList = state.filmsList = action.payload;;
      state.filmsCount = 8;
    })
    .addCase(switchToSciFi, (state, action) => {
      state.genre = 'Sci-Fi';
      state.filmsList = state.filmsList = action.payload;;
      state.filmsCount = 8;
    })
    .addCase(switchToThrillers, (state, action) => {
      state.genre = 'Thrillers';
      state.filmsList = state.filmsList = action.payload;;
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
    })

});

export {reducer};
