import { createAction } from '@reduxjs/toolkit';

export const switchToAllGenres = createAction('allGenres');
export const switchToComedies = createAction('comedies');
export const switchToCrime = createAction('crime');
export const switchToDocumentary = createAction('documentary');
export const switchToDramas = createAction('dramas');
export const switchToHorror = createAction('horror');
export const switchToKidsAndFamily = createAction('kids & family');
export const switchToRomance = createAction('romance');
export const switchToSciFi = createAction('sci-fi');
export const switchToThrillers = createAction('thrillers');
export const getMoreFilms = createAction('getMoreFilms');
