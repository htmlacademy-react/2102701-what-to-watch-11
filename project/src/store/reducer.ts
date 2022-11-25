import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import {getMoreFilms, switchToAllGenres, switchToComedies, switchToCrime, switchToDocumentary, switchToDramas, switchToHorror, switchToKidsAndFamily, switchToRomance, switchToSciFi, switchToThrillers} from './actions';


const initialState = {
  genre: 'All Genres',
  filmsList: films,
  filmsCount: 8
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchToAllGenres, (state) => {
      state.genre = 'All Genres';
      state.filmsList = films;
      state.filmsCount = 8;
    })
    .addCase(switchToComedies, (state) => {
      state.genre = 'Comedies';
      state.filmsList = films.filter((film) => film.genre === 'Comedy' );
      state.filmsCount = 8;
    })
    .addCase(switchToCrime, (state) => {
      state.genre = 'Crime';
      state.filmsList = films.filter((film) => film.genre === 'Crime' );
      state.filmsCount = 8;
    })
    .addCase(switchToDramas, (state) => {
      state.genre = 'Dramas';
      state.filmsList = films.filter((film) => film.genre === 'Drama' );
      state.filmsCount = 8;
    })
    .addCase(switchToDocumentary, (state) => {
      state.genre = 'Documentary';
      state.filmsList = films.filter((film) => film.genre === 'Documentary' );
      state.filmsCount = 8;
    })
    .addCase(switchToHorror, (state) => {
      state.genre = 'Horror';
      state.filmsList = films.filter((film) => film.genre === 'Horror' );
      state.filmsCount = 8;
    })
    .addCase(switchToKidsAndFamily, (state) => {
      state.genre = 'Kids & Family';
      state.filmsList = films.filter((film) => film.genre === 'Kids & Family' );
      state.filmsCount = 8;
    })
    .addCase(switchToRomance, (state) => {
      state.genre = 'Romance';
      state.filmsList = films.filter((film) => film.genre === 'Romance' );
      state.filmsCount = 8;
    })
    .addCase(switchToSciFi, (state) => {
      state.genre = 'Sci-Fi';
      state.filmsList = films.filter((film) => film.genre === 'Sci-fi' );
      state.filmsCount = 8;
    })
    .addCase(switchToThrillers, (state) => {
      state.genre = 'Thrillers';
      state.filmsList = films.filter((film) => film.genre === 'Thriller' );
      state.filmsCount = 8;
    })
    .addCase(getMoreFilms, (state) => {
      state.filmsCount += 8;
    });


});

export {reducer};
