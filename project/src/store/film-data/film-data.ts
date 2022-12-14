import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FilmsData} from '../../types/state';
import { replaceFilm, showMoreFilms, switchToAllGenres, switchToGenre } from '../actions';
import {fetchFilmsAction, fetchFavoritesAction, fetchReviewsAction, postReviewsAction, fetchPromoAction, fetchSimilarFilmsAction} from '../api-actions';

const initialState: FilmsData = {
  films: [],
  isFilmsDataLoading: false,
  filmsCount: 8,
  genre: 'All Genres',
  error: null,
  filmsFavorites: [],
  reviews: [],
  isReviewsDataLoading: false,
  promoFilm: undefined,
  similarFilms: [],
  similarFilmsCount: 4,
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
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.filmsFavorites = action.payload;
      })
      .addCase(switchToGenre, (state, action) => {
        state.genre = action.payload;
        state.filmsCount = 8;
      })
      .addCase(switchToAllGenres, (state) => {
        state.genre = 'All Genres';
        state.filmsCount = 8;
      })
      .addCase(showMoreFilms, (state) => {
        state.filmsCount += 8;
      })
      .addCase(replaceFilm, (state, action) => {
        state.films = state.films.map((film) => {
          if (film.id === action.payload.id) {
            return action.payload;
          }
          return film;
        });
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      });
  }
});
