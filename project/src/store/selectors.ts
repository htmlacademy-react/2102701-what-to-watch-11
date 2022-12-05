import { useAppSelector } from '../hooks';
import { Films } from '../types/film';

export const useSelectGenres = () => useAppSelector((state) => [...new Set(state.DATA.films.map((film) => film.genre))]);
