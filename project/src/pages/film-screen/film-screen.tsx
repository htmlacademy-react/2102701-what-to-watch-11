import FilmScreenComponent from '../../components/film-screen-component/film-screen-component';
import { useParams} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import Error404Screen from '../error-404-screen/error-404-screen';


function FilmScreen(): JSX.Element {
  const films = useAppSelector((state) => state.DATA.films);
  const reviews = useAppSelector((state) => state.DATA.reviews);
  const params = useParams();
  const activeFilm = films.find((film) => {
    if(film.id === Number(params.id)) {
      return true;
    }
    return false;
  });

  if(!activeFilm) {
    return (
      <Error404Screen/>

    );
  }


  return (
    <FilmScreenComponent film={activeFilm} reviews={reviews} similarFilms={films.filter((film) => film.genre === activeFilm.genre).slice(0, 4)}/>

  );
}

export default FilmScreen;
