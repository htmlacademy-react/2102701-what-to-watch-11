import { useAppSelector } from "../hooks"

export const useSelectGenres = () => {
  return useAppSelector((state) => [...new Set(state.filmsList.map((film) => film.genre))])
}
