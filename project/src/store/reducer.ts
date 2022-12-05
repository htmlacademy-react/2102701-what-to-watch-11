import { createReducer } from '@reduxjs/toolkit';
import {switchToGenre, setError, showMoreFilms, switchToAllGenres} from './actions';
import { Films } from '../types/film';

type InitialState = {
  genre: string;
  filmsList: Films;
  filmsCount: number;
  error: string | null;
  isFilmsDataLoading: boolean;
};

const initialState: InitialState = {
  genre: 'All Genres',
  filmsList: [],
  filmsCount: 8,
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
});

export {reducer};
