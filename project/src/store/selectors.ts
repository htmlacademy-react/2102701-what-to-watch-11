import { useAppSelector } from '../hooks';

export const useSelectGenres = () => useAppSelector((state) => [...new Set(state.DATA.films.map((film) => film.genre))]);
export const useSelectFavoritesCount = () => useAppSelector((state) => state.DATA.films.filter((film) => film.isFavorite).length);
export const useSelectPromoFilm = () => useAppSelector((state) => state.DATA.films.find((film) => state.DATA.promoFilm?.id === film.id));
