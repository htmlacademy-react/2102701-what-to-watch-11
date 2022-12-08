import { useAppSelector } from '../hooks';

export const useSelectGenres = () => useAppSelector((state) => [...new Set(state.DATA.films.map((film) => film.genre))]);
