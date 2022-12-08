import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FilmsData} from '../../types/state';
import { showMoreFilms, switchToAllGenres, switchToGenre } from '../actions';
import {fetchFilmsAction} from '../api-actions';

const initialState: FilmsData = {
  films: [],
  isFilmsDataLoading: false,
  filmsCount: 8,
  genre: 'All Genres',
  error: null,
};

export const filmData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(switchToGenre, (state, action) => {
        state.genre = action.payload;
        state.filmsCount = 8;
      })
      .addCase(switchToAllGenres, (state, action) => {
        state.genre = 'All Genres';
        state.filmsCount = 8;
      })
      .addCase(showMoreFilms, (state) => {
        state.filmsCount += 8;
      })
  }
});
