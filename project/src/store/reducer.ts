import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import {switchToAllGenres, switchToComedies, switchToCrime, switchToDocumentary, switchToDramas, switchToHorror, switchToKidsAndFamily, switchToRomance, switchToSciFi, switchToThrillers} from './actions'



const initialState = {
  genre: 'All Genres',
  filmsList: films
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchToAllGenres, (state) => {
      state.genre = 'All Genres';
      state.filmsList = films;
    })
    .addCase(switchToComedies, (state) => {
      state.genre = 'Comedies';
      state.filmsList = films.filter((film) => film.genre === 'Comedy' );
    })
    .addCase(switchToCrime, (state) => {
      state.genre = 'Crime';
      state.filmsList = films.filter((film) => film.genre === 'Crime' );
    })
    .addCase(switchToDramas, (state) => {
      state.genre = 'Dramas';
      state.filmsList = films.filter((film) => film.genre === 'Drama' );
    })
    .addCase(switchToDocumentary, (state) => {
      state.genre = 'Documentary';
      state.filmsList = films.filter((film) => film.genre === 'Documentary' );
    })
    .addCase(switchToHorror, (state) => {
      state.genre = 'Horror';
      state.filmsList = films.filter((film) => film.genre === 'Horror' );
    })
    .addCase(switchToKidsAndFamily, (state) => {
      state.genre = 'Kids & Family';
      state.filmsList = films.filter((film) => film.genre === 'Kids & Family' );
    })
    .addCase(switchToRomance, (state) => {
      state.genre = 'Romance';
      state.filmsList = films.filter((film) => film.genre === 'Romance' );
    })
    .addCase(switchToSciFi, (state) => {
      state.genre = 'Sci-Fi';
      state.filmsList = films.filter((film) => film.genre === 'Sci-fi' );
    })
    .addCase(switchToThrillers, (state) => {
      state.genre = 'Thrillers';
      state.filmsList = films.filter((film) => film.genre === 'Thriller' );
    })


});

export {reducer};
